<template>
  <div class="home">
    <h1>Web and HTML Series</h1>

    <a
      href="https://drive.google.com/drive/u/0/folders/1G9L2DVtSBjPg9G_R3nzEYWxjlkZm3oQJ"
      target="_blank"
      class="class-frame"
    >
      <h2>HTML CSS</h2>
      <img class="img-border" src="/class-logos/web-html/html.ico" alt="" />
    </a>

    <div class="dummy"></div>
  </div>
</template>

<style lang="scss" scoped>
$first-bp: 450px;
$second-bp: 350px;

.home {
  --gap-size: 4rem;
  h1 {
    color: white;
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
  @include slash-bg(#ab2a2a, #d76060, 1px);

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
  @include class-frame(white);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  //   async setup() {
  //     const sleep = (ms: number) => {
  //       return new Promise((resolve) => setTimeout(resolve, ms));
  //     };
  //     let aFunc = async () => {
  //       await sleep(3000)
  //       console.log("a")
  //       return "a"
  //     }
  //     let a = await aFunc()
  //     return {a}
  //   },
});
</script>
