<template>
    <div class="w-screen h-screen flex flex-col sm:justify-center items-center">
      <div class="flex max-w-full sm:max-w-md  overflow-scroll  snap-x snap-mandatory">
        <template v-for="crew in crews">
        <CrewCard :id="`${crew.name}-crew`" v-bind="crew" @click="showMagic(crew.name)"/>
        <MagicCard :id="`${crew.name}-magic`" v-bind="crew.grimoire"/>
      </template>
      </div>
      <div class="fixed sm:static sm:flex bottom-0 my-4 items-center"> 
        <button class="rounded-full px-4 py-1 border-black border-2 mx-1" :class="selectedCrew.name == 'Skavens' ? 'bg-black text-white' : 'bg-white text-black'" @click="showCrew('Skavens')">Skavens</button>
        <button class="rounded-full h-4 w-4 border-black border-2 mx-1" :class="selectedCrew.name == 'Skavens' ? 'bg-black text-white' : 'bg-white text-black'" @click="showCrew('Skavens')"></button>
        <button class="rounded-full px-4 py-1 border-black border-2 mx-1" :class="selectedCrew.name == 'Gobelins' ? 'bg-black text-white' : 'bg-white text-black'" @click="showCrew('Gobelins')">Gobelins</button>
        <button class="rounded-full px-4 py-1 border-black border-2 mx-1" :class="selectedCrew.name == 'Gobelins' ? 'bg-black text-white' : 'bg-white text-black'" @click="selectedCrew = Gobelins">Aides de jeu</button>

      </div>
    </div>
</template>
  
<script setup>
import { Skavens } from '~/typescript/crews/skavens';
import { Gobelins } from "~/typescript/crews/gobelins"

const selectedCrew = ref(Skavens)

const crews = ref([ Skavens, Gobelins])
const showMagic = (crewName) => {
  document.getElementById(`${crewName}-magic`).scrollIntoView({ behavior: 'smooth', block: 'center' })
}
const showCrew = (crewName) => {
  document.getElementById(`${crewName}-crew`).scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>