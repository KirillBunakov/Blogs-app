<template>
  <div class="flex flex-row gap-2.5 flex-wrap">
    <div v-for="elem in props.blog.blogTypes" class="h-7 text-blue bg-grey rounded-20px box-border flex items-center justify-center px-3.5">{{ elem }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  blog: Object,
})
</script>