<template>
  <div>
  <header class="w-1210px mx-auto w-">
    <div class="h-20 flex flex-row items-center justify-between md:mx-7 s:mx-2.5 s:flex s:pt-3 s:items-start s:h-24">
      <div class="flex flex-row gap-10 s:gap-2.5 s:flex-col">
        <h1 class="gilroy font-bold text-32">Блог</h1>
        <div class="relative">
          <input type="text" v-model="searchTitle" placeholder="Поиск" class="h-10 w-100 box-border pl-8 items-center input-background s:w-fit">
          <img src="../assets/img/magnifier.svg" alt="" class="absolute top-3 left-2.5">
        </div>
      </div>
      <div @click="filter = !filter" class="flex gap-1 w-auto h-fit items-center hover:cursor-pointer s:pt-3 ">
        <div class="inter text-grey text-sm font-medium">{{ filter==false ? 'Фильтр' : 'Скрыть фильтр'}}</div>
        <div v-if="filter == true" class="w-4 h-3 bg-no-repeat bg-[url('../assets/img/up.svg')]"></div>
        <div v-if="filter == false" class="w-4 h-4 bg-no-repeat bg-[url('../assets/img/down.svg')]"></div>
      </div>
    </div>
    <div v-if="filter" class="filter h-18 flex flex-row gap-2 items-center flex-wrap md:my-3 md:h-fit s:my-3 s:h-fit">
       <filter-btn v-for="(type, index) in filterTypes" :key="index" @click="filterByType(type)">{{ type }}</filter-btn>
    </div>
  </header>
  <section class="blog-background pt-5 pb-30px pb- h-full w-full">
    <div class="w-1300px bg-white box-border rounded-xl mx-auto flex flex-row flex-wrap gap-5 p-7 md:p-5 md:gap-7">
      <blog-card @openModal="openModal" :blogs="blogs" v-if="blogs.length > 0"></blog-card>
      <not-found-filter v-else></not-found-filter>
      <teleport to='body'>
        <app-modal v-if="showModal == true" :blogs="blogs" :blogId="modalId" @closeModal="openModal"></app-modal>
      </teleport>
    </div>
  </section>
  <!-- for developing -->
  <!-- <button @click="store.addBlog()">add</button> -->
</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useBlogsStore } from '@/stores/blogStore'
import FilterBtn from '@/components/modules/Blog/FilterBtn.vue';
import BlogCard from '@/components/modules/Blog/BlogCard.vue';
import NotFoundFilter from '@/components/modules/Blog/NotFoundFilter.vue';
import AppModal from '@/components/modules/Blog/AppModal.vue';

const searchTitle = ref('')
const filter = ref(true)
const filterTypes = ref(['Город','Природа','Люди','Животные','Еда','Напитки','Архитектура','Искусство'])
const store = useBlogsStore()

const filterBlogByTitle = (blog) => !searchTitle.value || blog.blogTitle.toLowerCase().includes(searchTitle.value.toLowerCase())
const filterBlogByType = (blog) => !activeFilters.value.length || activeFilters.value.some(filter => blog.blogTypes.includes(filter))
const blogs = computed(() => store.blogsArray.filter((blog) => filterBlogByType(blog) && filterBlogByTitle(blog)))

const showModal = ref(false)
const modalId = ref()

function openModal(id){
  modalId.value = id
  showModal.value = !showModal.value
}

const activeFilters = ref([])
function filterByType(type){
  if (activeFilters.value.find((item) => item == type)) {
    let index = activeFilters.value.findIndex((item) => item == type)
    activeFilters.value.splice(index,1)
  } else {
    activeFilters.value.push(type)
  }  
}

onMounted(() => {
  store.loadBlogs()
})
</script>