<template>
    <div class="max-w-full sm:max-w-md shrink-0 h-fit border-black border-8 grid grid-cols-4 p-6 gap-y-2 gap-x-2 rounded-lg snap-center">
        <div class="text-2xl col-span-full my-2">{{  name }}</div>
        <template  v-for="profile in spells">
            <div class="col-span-full font-bold">{{ profile.name }}</div>
            <div class="col-span-2"> {{ profile.when}}</div>
            <div class="col-span-1 font-italic"> {{ profile.duration}}</div>
            <div class="col-span-1 font-italic"> {{ profile.range}}</div>
            <div class="col-span-full mb-4">{{ profile.effect }}</div>
        </template >
    </div>
</template>


<script setup lang="ts">
import Spell from '~/typescript/spell';

export  interface Crew {
    name: string,
spells: Array<Spell>
}


const props = defineProps<Crew>()

</script>