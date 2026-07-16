<template>
  <div class="course-card">
    <h4>{{ name }}</h4>
    <p><strong>Code:</strong> {{ code }}</p>
    <p><strong>Credits:</strong> {{ credits }}</p>
    <p><strong>Grade:</strong> {{ grade }}</p>
    <slot></slot> <!-- Allows buttons to be injected dynamically -->
  </div>
</template>

<script setup>
// Step 108: Define props for CourseCard component
defineProps({
  name: { type: String, required: true },
  code: { type: String, required: true },
  credits: { type: Number, required: true },
  grade: { type: String, required: true }
})
</script>

<style scoped>
.course-card {
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px 0;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
</style>