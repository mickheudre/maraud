<template>
  <div class="w-screen h-screen flex flex-col sm:justify-center items-center">
    <div id="container" @scroll="handleScroll" class="flex max-w-full sm:max-w-md  overflow-x-scroll overflow-y-auto snap-x snap-mandatory">
      <template v-for="crew in crews">
        <CrewCard :id="`${crew.name}-crew`" v-bind="crew" @click="showMagic(crew.name)"/>
        <MagicCard :id="`${crew.name}-magic`" v-bind="crew.grimoire"/>
      </template>
      <SceneryCard id="scenery" />
    </div>
    <div class="fixed sm:static sm:flex bottom-0 my-4 items-center"> 
      <button class="rounded-full px-4 py-1 border-black border-2 mx-1" :class="isSelected(0) ? 'bg-black text-white' : 'bg-white text-black'" @click="showCrew('Skavens')">Skavens</button>
      <button class="rounded-full h-4 w-4 border-black border-2 mx-1" :class="isSelected(1) ? 'bg-black text-white' : 'bg-white text-black'" @click="showMagic('Skavens')"></button>
      <button class="rounded-full px-4 py-1 border-black border-2 mx-1" :class="isSelected(2) ? 'bg-black text-white' : 'bg-white text-black'" @click="showCrew('Gobelins')">Gobelins</button>
      <button class="rounded-full h-4 w-4 border-black border-2 mx-1" :class="isSelected(3) ? 'bg-black text-white' : 'bg-white text-black'" @click="showMagic('Gobelins')"></button>

      <button class="rounded-full px-4 py-1 border-black border-2 mx-1" ::class="isSelected(4) ? 'bg-black text-white' : 'bg-white text-black'" @click="navigateTo('scenery')">Aides de jeu</button>
      
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

const navigateTo = (itemId) => {
  document.getElementById(itemId).scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const scrollValue = ref(0)
const scrollItemsCount = 5

const isSelected = (index)  => {
  console.log(index, scrollValue.value, (((index / (scrollItemsCount -1)) * 100) - 5), (((index / (scrollItemsCount- 1)) * 100) + 5))
  return (scrollValue.value * 100) >= (((index / (scrollItemsCount -1)) * 100) - 5) && (scrollValue.value * 100) <= (((index / (scrollItemsCount- 1)) * 100) + 5)
}

const handleScroll = () => {
  const container = document.getElementById("container")
  scrollValue.value = container.scrollLeft / (container.scrollWidth - container.clientWidth)
}

</script>

<style>

#container::-webkit-scrollbar {
  display: none;
}

#container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>