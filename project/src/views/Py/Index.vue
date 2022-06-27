<template>
  <div class="home">


    <h1>Python Series</h1>
    <a href="https://drive.google.com/drive/u/0/folders/1JXVK5yBx4Zs7TZ_iHZRahMRsZSOciJtT" target="_blank">
      <img class="img-border" src="/class-logos/py/prepython.jpg" alt="">
    </a>
    <a href="https://drive.google.com/drive/u/0/folders/13b5TyZgkGjx6sADDYyhG4yFeW7xfivfw" target="_blank">
      <img class="img-border" src="/class-logos/py/Python.jpg" alt="">
    </a>
  <div class="dummy"></div>
  </div>

</template>

<style lang="scss" scoped>
$first-bp:450px;
$second-bp:350px;


.home{
  --gap-size:4rem;
  h1{
    color:white;
    font-size: 4rem;
    @media (max-width: $first-bp) {
      font-size: 3rem;
    }
     @media (max-width: $second-bp) {
      font-size: 2rem;
  }
  }
  display: grid;
  place-items: center;
  @include dot-bg(#26476a,#4f6787,5px);
  
  width: 100vw;
  height: 100%;
  gap:var(--gap-size);
  @media (max-width: $first-bp) {
        --gap-size:4rem;
  }
  

  .dummy{
  height: var(--gap-size);
  @media(max-width:$first-bp){
    height: calc(var(--gap-size)*2);
  }
}
}

</style>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({

})
</script>
