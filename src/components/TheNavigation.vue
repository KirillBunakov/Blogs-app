<script>

</script>

<template>
  <nav class="flex items-center h-16 md:h-19 bg-black">
    <div class="container mx-auto flex gap-20 items-center md:pl-5 md:gap-4 s:pl-5 s:gap-4">
      <div class="hidden md:block s:block text-white"><img src="../assets/img/general.svg" alt=""></div>
      <img src="../assets/img/Frame.png" alt="">
      <div class="flex gap-5 flex-row text-white">
        <router-link to="home" class="inter flex items-center justify-center w-24 h-8 rounded-md md:hidden s:hidden">Главная</router-link>
        <router-link to="blog" class="inter flex items-center justify-center w-16 h-8 rounded-md md:hidden s:hidden">Блог</router-link>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .container{
    max-width: 1288px;
  }

  .active{
    background: #FFFFFF1A;
    color: #3E97FF;
  }

  // @media (max-width: 800px){
  //   .container{
  //     max-width: 1288px;
  //   }
  // }
</style>