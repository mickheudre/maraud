<template>
        <div class="max-w-full sm:max-w-md shrink-0 h-fit snap-center">
        <div class="m-4 border-black border-8 grid grid-cols-7 p-6 gap-y-6 gap-x-2 rounded-lg snap-center">
        <div class="text-2xl font-bold col-span-5">{{ name }}</div>
        <div class="col-span-2 place-self-end" @click="$emit('click')">Magie →</div>

        <div class="col-span-full mb-4 -mx-4 border-2 px-4 py-2  border-black text-sm"><span class="font-semibold">{{  special.split(':')[0]}} :</span>{{  special.split(':')[1]}}</div>
        <template  v-for="profile in profiles">
            <div class="col-span-1 w-6 h-6 text-sm  bg-black text-white rounded-full flex items-center justify-center"><span class="">{{ profile.size }}</span></div>
            <div class="col-span-2 font-semibold tex">{{ profile.name }}</div>
            <div class="col-span-4 text-sm">{{ profile.special }}</div>
        </template >
    </div>
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