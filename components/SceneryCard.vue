<template>
    <div class="max-w-full sm:max-w-md shrink-0 h-fit snap-center">
        <div class="m-4 border-black border-8 grid grid-cols-4 p-6 gap-y-2 gap-x-2 rounded-lg snap-center">
        <div class="text-2xl col-span-full my-2 font-bold">Décors</div>
        <template  v-for="profile in sceneries">
            <div class="col-span-2 font-bold">{{ profile.name }}</div>
            <div class="col-span-2 text-sm items-center italic" v-if="!profile.enabledInMelee">Non utilisable si engagé</div>
            <div class="col-span-4 text-sm items-center italic" v-if="profile.blockRunning">Pas de course si en contact avec décor</div>
            <div class="col-span-2 text-sm items-center" v-if="profile.bonusPlan">1 point de plan si en contact avec décor</div>


            <!-- <div class="col-span-1 font-italic text-sm"> {{ profile.duration}}</div>
            <div class="col-span-1 font-italic text-sm"> {{ profile.range}}</div> -->
            <div class="col-span-full mb-4 text-sm">{{ profile.effect }}</div>
        </template >
    </div>
    </div>
</template>


<script setup lang="ts">
import { sceneries } from '~/typescript/scenery';

</script>