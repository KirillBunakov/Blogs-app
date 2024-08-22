<template>
  <div v-for="blog in props.blogs" :key="blog.id">
    <div class="w-100 h-100 flex flex-col gap-2.5 md:w-90 s:w-80" @click="$emit('openModal', blog.id)">
      <img class="w-auto h-63 rounded-xl md:h-56 s:h-50" :src="blog.blogImage" alt="">
      <blog-info :blog="blog"></blog-info>
      <h2 class="inter text-black text-xl font-semibold">{{ blog.blogTitle }}</h2>
      <p class="inter text-black text-base font-medium">{{ blog.blogHeader }}</p>
      <div class="">
        <blog-types :blog="blog"></blog-types>
      </div>
    </div>
  </div>
</template>

<script setup>
import BlogInfo from './BlogInfo.vue';
import BlogTypes from './BlogTypes.vue';

const props = defineProps({
  blogs: Array
})

const emit = defineEmits(['openModal'])
</script>