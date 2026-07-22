<template>
  <div class="app-container">
    <!-- Render global Header -->
    <Header />
    
    <main class="content">
      <!-- Step 113: Render matching route view inside RouterView wrapper -->
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f6f9;
}
.app-container {
  max-width: 900px;
  margin: 0 auto;
}
.content {
  padding: 0 20px 40px;
}
</style>