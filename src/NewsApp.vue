<template>
  <div class="header">
    <div class="logo">
      <span class="logo__text">Край Спорта</span>
    </div>
    <div class="menu">
      <app-popover></app-popover>
      <button
        class="group inline-flex items-center rounded-md bg-black-700 px-3 py-2 text-2xl font-[350] font-sans text-white hover:text-[silver] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        @click="router.push('/')"
      >
        Назад
      </button>
    </div>
  </div>
  <AppCard>
    <template v-slot:picture><img src="./assets/img/gghh.jpg" /></template>
    <template v-slot:text>Недавно мы были на сревах ...</template>
  </AppCard>
</template>

<script setup>
import router from "@/router";
import AppCard from "@/components/AppCard";
</script>

<style scoped>
body {
  justify-content: center;
  align-items: center;
}
</style>
