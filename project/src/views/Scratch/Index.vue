<template>
<div class="home">

  <h1>Scratch Series</h1>

  <div class="gs">
    <img class="img-border gs-img" src="/class-logos/scratch/GS.jpeg" alt="" />
    <div class="dummy"></div>
    <div class="list">
    <a
    
      href="https://drive.google.com/drive/u/0/folders/1Jg68CYLjZdkMeND8fo7XHEQNpMBWMxUi"
      target="_blank"
    >
      Game in Scratch Lv 1
    </a>
    <a
      

      href="https://drive.google.com/drive/u/0/folders/1uqTihRH4qyTiMiQLB5bN3kgjC5LeHlxU"
      target="_blank"
    >
      Game in Scratch Lv 2
    </a>
    <a
    
      href="https://drive.google.com/drive/u/0/folders/1oPv9dPHe3b7kWYiXPXQRBTjudeJ3wAwq"
      target="_blank"
    >
      Game in Scratch Lv 3
    </a>
    <a
      

      href="https://drive.google.com/drive/u/0/folders/1zXaieCw9Z4ma0z0g9p0Gic8peL4xiNJg"
      target="_blank"
    >
      Game in Scratch Lv 4
    </a>
    </div>
  </div>
    <div class="dummy"></div>

  
  <a
    href="https://drive.google.com/drive/u/0/folders/1ISr8wIPyUmPUJSfC-A6uj1iHwZuRVSL9"
    target="_blank"
    class="class-frame"
  >
    <h2>Mario Game</h2>
    <img class="img-border" src="/class-logos/scratch/mario.jpeg" alt="" />
  </a>

    <div class="dummy"></div>
  
</div>
</template>

<style lang="scss" scoped>
$first-bp:900px;
$second-bp:500px;
$thirth-bp:350px;
.home{
  --gap:4rem;
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100%;
  @media(max-width:$first-bp){
      --gap:2rem;
  }

  @include rect-bg(#9eeded,#aeffff,3px);
  h1{
    color:#1A1D35;
    font-size: 4rem;
    @media(max-width:$second-bp){
      font-size: 3rem;
    }
    @media(max-width:$thirth-bp){
      font-size: 2rem;
    }
    
  }
  .dummy{
    height: var(--gap);
}

.gs{
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  
  .list{
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    gap: var(--gap);
    width: 50vw;
    @media(max-width:$second-bp){
      width: 80vw;
  }
    
    
    a{
      @include btn(#ffffff,#EF9C38);
      @media(max-width:$first-bp){
          font-size: 1rem;
      }
    }

  }
}
}
.class-frame{
  @include class-frame(#1A1D35)
}

</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
