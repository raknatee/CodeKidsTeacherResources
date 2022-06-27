<template>
  <div class="main-layout">
  <router-view/>  


     <footer>
      <p>&copy; Created by Raknatee and Nattanon</p>
    </footer>
  </div>

</template>

<style lang="scss">
.main-layout{
  display: grid;
  min-height: 100vh;
  width: 100vw;
  grid-template-columns: 1fr;
  place-items: center;
  
}
footer{
  height: 5rem;
  color: black;
  display: grid;
  place-items: center;
}

@font-face {
    font-family: eina;
    src: url(/eina/Eina01-SemiBold.ttf);
}
@keyframes fade-up {
  0%   {
    opacity: 0;
    transform: translateY(-3rem);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
    }

}
*{
    animation: fade-up;
    animation-duration: 1s;
}
body{
    font-family: 'eina';
    margin: 0;
    padding: 0;

}


a{
  text-decoration: none;
}



</style>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup(){
    document.title = "CodeKids Teacher Resources"
  }

});
</script>
