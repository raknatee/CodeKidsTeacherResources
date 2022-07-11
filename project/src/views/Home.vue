<template>
  <div class="home">
    <header>
      <h1>CodeKids Teacher</h1>
    </header>
    <div class="content">
    
      <router-link to="/python" class="btn btn-py">
        <h1>Python Series</h1>
        <img class="btn-img" src="/class-logos/py/main.png" alt="" />
      </router-link>

      <router-link to="/scratch" class="btn btn-scratch">
        <h1>Scratch Series</h1>
        <img class="btn-img" src="/class-logos/scratch/main.png" alt="" />
      </router-link>
       <router-link to="/web-html" class="btn btn-web">
        <h1>Web and HTML Series</h1>
         <img class="btn-img" src="/class-logos/web-html/web.png" alt="" />
       
        
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$first-bp: 1100px;
$second-bp: 600px;
$third-bp: 500px;
$fourth-bp: 350px;
.home {
  display: grid;
  grid-template-areas: "header" "content";
  grid-template-rows: 20vh auto;
  width: 100vw;
  place-items: center;
  padding-bottom: 5rem;

  @include grid-bg(rgb(256, 192, 0), #ffd65c);

  header {
    color: white;
    background-color: #26476a;
    grid-area: header;
    display: inline-block;
    width: max-content;
    text-align: center;
    $pad: 5rem;
    padding-left: $pad;
    padding-right: $pad;
    border-radius: 1rem;
    box-shadow: 5px 5px 1rem 1px black;
    @media (max-width: $third-bp) {
      $pad: 1rem;
      padding-left: $pad;
      padding-right: $pad;
    }
    @media (max-width: $fourth-bp) {
      font-size: .7rem;
    }
  }
  .content {
    grid-area: content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-evenly;
    gap: 1rem;
    @media (max-width: $first-bp) {
      grid-template-columns: 1fr;
    }
  }

  .btn {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    height: 70vh;
    transition: all;
    @media (max-width: $first-bp) {
      height: 50vh;
    }
    @media (max-width: $second-bp) {
      height: 30vh;
    }
    @media (max-width: $fourth-bp) {
      height: 25vh;
    }
    h1 {
      transform: translateY(-3vh);
      margin-block-start: 0;
      margin-block-end: 0;
      @media (max-width: $second-bp) {
        font-size: 2rem;
      }
      @media (max-width: $fourth-bp) {
      font-size: 1.5rem;
    }
    }
    &-img {
      margin: 0 auto;
      height: 28vh;
      @media (max-width: $second-bp) {
        height: 15vh;
      }
      @media (max-width: $fourth-bp) {
        height: 10vh;
    }
    }
    &-py {
      @include btn(#ffffff, #1f202c);
    }
    &-scratch {
      @include btn(#ffffff, #dc6e08);
    }
    &-web{
      @include btn(#ffffff, #1d1d1d);
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
