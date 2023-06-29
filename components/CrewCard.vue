<template>
    <div class="max-w-full sm:max-w-md shrink-0 h-fit border-black border-8 grid grid-cols-7 p-6 gap-y-4 gap-x-2 rounded-lg snap-center">
        <div class="text-2xl col-span-full my-2">{{  name }}</div>
        <div class="col-span-full mb-4 -mx-4 border-2 px-4 py-2 rounded-lg border-black">{{  special }}</div>
        <template  v-for="profile in profiles">
            <div class="col-span-1 w-6 h-6 text-sm  bg-black text-white rounded-full flex items-center justify-center"><span class="">{{ profile.size }}</span></div>
            <div class="col-span-2">{{ profile.name }}</div>
            <div class="col-span-4">{{ profile.special }}</div>
        </template >
    </div>
</template>


<script setup lang="ts">
import Profile from '~/typescript/profile';

export  interface Crew {
    name: string,
    special: string,
    profiles: Array<Profile>
}


const props = defineProps<Crew>()

</script>