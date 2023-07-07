<template>
    <div class="w-screen h-screen flex flex-col sm:justify-center items-center">
      <div class="flex overflow-scroll snap-x snap-mandatory">
        <CrewCard id="crew" v-bind="selectedCrew" @click="showMagic"/>
        <MagicCard id="magic" v-bind="selectedCrew.grimoire"/>
      </div>
      <div class="fixed sm:static sm:flex bottom-0 my-4"> 
        <button class="rounded-full px-4 py-1 border-black border-2 mx-4" :class="selectedCrew.name == 'Skavens' ? 'bg-black text-white' : 'bg-white text-black'" @click="selectedCrew = Skavens">Skavens</button>
        <button class="rounded-full px-4 py-1 border-black border-2 mx-4" :class="selectedCrew.name == 'Gobelins' ? 'bg-black text-white' : 'bg-white text-black'" @click="selectedCrew = Gobelins">Gobelins</button>
      </div>
    </div>
</template>
  
<script setup>
import { Skavens } from '~/typescript/crews/skavens';
import { Gobelins } from "~/typescript/crews/gobelins"

const selectedCrew = ref(Skavens)

const showMagic = () => {
  document.getElementById("magic").scrollIntoView()
}
</script>