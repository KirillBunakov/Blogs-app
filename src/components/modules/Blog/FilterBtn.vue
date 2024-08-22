<template>
  <div class="relative">
    <div @click="btnState = !btnState" class="inter h-8 bg-grey flex justify-center items-center box-border text-blue rounded-20px after:pl-1.5 px-5" :class="{ activeBtn: btnState, filterAdd: btnState==false, filterCheck: btnState }"><slot></slot></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const btnState = ref(false)

</script>

<style lang="scss" scoped>
  .filterAdd::after{
    content: url('../../../assets/img/plus.svg');
  }

  .filterAdd:hover{
    background-color: #3E97FF33;
  }

  .filterCheck::after{
    content: url('../../../assets/img/check.svg');
  }

  .filterCheck:hover::after{
    content: url('../../../assets/img/cross.svg');
  }

</style>