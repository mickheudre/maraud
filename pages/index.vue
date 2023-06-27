<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center">
      
      <CrewCard v-bind="selectedCrew"/>
      <div class="fixed sm:static sm:flex bottom-0"> 
        <button @click="selectedCrew = Skavens">Skavens</button>
        <button @click="selectedCrew = Gobelins">Gobelins</button>
      </div>
    </div>
</template>
  
<script setup>
import { Skavens } from '~/typescript/crews/skavens';
import { Gobelins } from "~/typescript/crews/gobelins"

const selectedCrew = ref(Skavens)

</script>