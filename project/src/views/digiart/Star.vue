<template>
  
    <div class="star" v-for="position in positions" :key="position" :style="injectPosition(position)"></div>

  
    
</template>

<style lang="scss" scoped>

.star {
    position: absolute;
    z-index: 1;

  width: 1.5rem;
  height: 1.5rem;

  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    // &::before{
    //     content: "";
    //     width: 150%;
    //     height: 150%;
    //     z-index: 0;
    //     border: 1px solid white;
    //     box-shadow: 0rem 0rem 1rem 1rem white;

    // }
}

</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const randint = (start:number,end:number) =>{
            return Math.floor(Math.random() * end) + start;
        }
        function choice<T>(data:Array<T>):T{
            return data[randint(0,data.length)]
        }
        const starColors:string[] = ["#00b2bf","#bc00c3","#ff0084","#f7ee00"]
        const positions:Position[] = []
        for(let i=0;i<150;i++){
            positions.push({
                left: randint(1,window.innerWidth),
                top:randint(1,window.innerHeight)
            } as Position)
        }
        type Position = {
            left:number
            top:number
        }
        const injectPosition = (position:Position) => {
            const style = {
                left: `${position.left}px`,
                top: `${position.top}px`,
                "background-color": choice(starColors)
            }
            console.log(style)
            return style
        }
        return {positions,injectPosition}
    },
})
</script>
