<template>
    <form class="">
      <select
        v-model="locale"
        class="text-sm font-sans font-light uppercase text-slate-500 bg-white underline underline-offset-2"
      >
        <option value="en">en</option>
        <option value="no">no</option>
      </select>
    </form>
  </template>
  
  <script setup>
  const { locale, locales } = useI18n();
  </script>