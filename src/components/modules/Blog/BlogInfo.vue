<template>
  <div class="flex flex-row gap-2.5 items-center inter text-grey text-sm flex-wrap">
    <p class="font-medium">{{ props.blog.blogDate.date }} {{ getMonth(props.blog.blogDate.month) }}
    </p> 
    <p class="font-semibold">•</p>
    <div class="flex flex-row gap-1">
      <img src="../../../assets/img/clock.svg" alt="">
      <p class="font-medium">{{ props.blog.blogTime }} мин</p>
    </div>
    <p class="font-semibold">•</p>
    <div class="flex flex-row gap-1">
      <img src="../../../assets/img/comment.svg" alt="">
      <p class="font-medium">{{ props.blog.blogComment }} Комментарий</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  blog: Object
})

function getMonth(number){
  if (number == 0 ){
    return "Янв"
  } else if (number == 1) {
    return "Фев"
  } else if (number == 2) {
    return "Мар"
  } else if (number == 3) {
    return "Апр"
  } else if (number == 4) {
    return "Май"
  } else if (number == 5) {
    return "Июн"
  } else if (number == 6) {
    return "Июл"
  } else if (number == 7) {
    return "Авг"
  } else if (number == 8) {
    return "Сен"
  } else if (number == 9) {
    return "Окт"
  } else if (number == 10) {
    return "Ноя"
  } else if (number == 11) {
    return "Дек"
  }
}
</script>