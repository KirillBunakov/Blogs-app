<template>
  <div class="-translate-x-1/2 rounded-xl bg-white self-auto p-4 flex flex-col gap-4 w-37 modal-content absolute scroll-auto top-56 left-1/2 md:top-1/2 md:w-full s:top-80 s:w-full">
    <div class="flex flex-col gap-2.5 relative">
      <h3 class="inter text-2xl font-semibold" >{{ currentBlog.blogTitle }}</h3>
      <blog-info :blog="currentBlog"></blog-info>
      <div class="absolute w-5 h-5 top-2 right-0 rotate-90 text-grey cursor-pointer flex justify-center items-center" @click="$emit('closeModal')"><img src="../../../assets/img/crossModal.svg" alt=""></div>
    </div>
    <img :src="currentBlog.blogImage" alt="" class="rounded-xl w-full h-96 s:h-50">
    <div class="flex flex-col gap-2.5">
      <p class="inter font-medium text-base">{{ currentBlog.blogContent }}</p>
      <blog-types :blog="currentBlog"></blog-types>
    </div>
    <div class="flex flex-col gap-2.5">
      <p class="inter text-base font-semibold">Комментариев <span class="font-medium text-grey">{{ currentBlog.blogComment }}</span></p>
      <div class="flex flex-col gap-1.5">
        <textarea class="box-border h-14 placeholder:py-3 pl-4 flex items-center justify-center rounded-md resize-none validTextArea value:py-3" name="" id="" placeholder="Введите комментарий" v-model="commentValue" :class="{ invalidTextArea: commentValue.length > 250 }"></textarea>
        <div v-if="commentValue.length !== 0">
          <p class="text-12 text-grey"><span :class="{ invalidValue: commentValue.length > 250}">{{ commentValue.length }}</span> из 250 символов</p>
          </div>
          <div v-if="commentValue.length !== 0" class="flex align-bottom justify-end gap-2.5">
            <button class="inter rounded-md text-blue-700 btn-grey py-3 px-8" @click="commentValue = ''">Отмена</button>
            <button class="inter rounded-md text-white btn-blue py-3 px-3" :class="{ invalidBtn: commentValue.length > 250 }">Опубликовать</button>
          </div>
        </div>
        <div>
          <modal-comment v-if="Number(currentBlog.blogComment)>0" :blog="currentBlog"></modal-comment>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import BlogInfo from './BlogInfo.vue';
import BlogTypes from './BlogTypes.vue';
import ModalComment from './ModalComment.vue';

const commentValue = ref('')
const currentBlog = computed(() => props.blogs.find(blog => blog.id === props.blogId))

const props = defineProps({
  blogs: Array,
  blogId: String
})
const emit = defineEmits(['closeModal'])
</script>

<style lang="scss" scoped>
.validTextArea{
  border: 1px solid #F1F1F2;
}

.invalidTextArea{
  border: 1px solid red;
  outline: none; 
}

.btn-grey{
  background-color: #EEF6FF;
}

.btn-blue{
  background-color: #3E97FF;
}

.invalidBtn{
  background-color: #F9F9F9;
  color: #D8D8E5;
}

.invalidValue{
  color: red;
}
</style>