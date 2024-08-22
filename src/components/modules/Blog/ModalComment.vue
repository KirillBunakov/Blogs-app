<template>
  <div class="flex flex-row gap-3 m-3 items-center">
    <img class="border-50 w-38px h-38px" :src="props.blog.blogComments.commentImg" alt="">
    <div class="flex flex-col gap-1.5">
      <h4 class="inter text-16 font-semibold">{{ props.blog.blogComments.commentName }}</h4>
      <p class="inter text-14 font-medium">{{ props.blog.blogComments.commentContent }}</p>
      <div class="inter text-12 text-grey font-medium flex flex-row">
        <p>{{ props.blog.blogComments.commentDate }} в {{ props.blog.blogComments.commentTime }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  blog: Object,
})
</script>