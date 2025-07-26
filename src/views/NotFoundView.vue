<script setup lang="ts"></script>

<template>
  <div class="flex h-dvh w-screen flex-col items-center justify-center">
    <h1 class="text-2xl font-bold">Page Not Found</h1>
    <router-link class="mt-4" :to="{ name: 'Home' }">
      <q-btn color="primary"> Go to Home </q-btn>
    </router-link>
  </div>
</template>
