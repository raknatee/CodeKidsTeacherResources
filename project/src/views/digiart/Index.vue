<template>
    <Star/>

  <div class="home" id="home">
    <h1>Digital Art Series</h1>

    <a
      href="https://procreate.nattanon.codekids.education/#/"
      target="_blank"
      class="class-frame"
    >
      <h2>Procreate</h2>
      <img
        class="img-border"
        src="/class-logos/digiart/procreate.jpeg"
        alt=""
      />
    </a>

    <div class="dummy"></div>
    <a
      href="https://digitalart.nattanon.codekids.education/#/"
      target="_blank"
      class="class-frame"
    >
      <h2>Digital Art</h2>
      <img class="img-border" src="/class-logos/digiart/digiart.jpeg" alt="" />
    </a>

    <div class="dummy"></div>
  </div>

</template>

<style lang="scss" scoped>
$first-bp: 450px;
$second-bp: 350px;
$text-color: #ffffff;
$bg-color: #1d1d1d;
.home {
  --gap-size: 4rem;
  color: $text-color;
  background-color: $bg-color;
  position: relative;


  h1 {
    text-align: center;
    z-index: 2;
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
  width: 100vw;
  height: 100%;
  gap: var(--gap-size);
  @media (max-width: $first-bp) {
    --gap-size: 4rem;
  }

  .dummy {
    height: var(--gap-size);
    @media (max-width: $first-bp) {
      height: calc(var(--gap-size) * 2);
    }
  }
}

.class-frame {
    z-index: 2;
  @include class-frame($text-color);
}
</style>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Star from "./Star.vue"
export default defineComponent({
    components:{
        Star
    },
});
</script>
