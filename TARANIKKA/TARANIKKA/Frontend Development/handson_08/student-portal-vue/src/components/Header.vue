<template>
  <header class="navbar">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/courses">Courses</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
    </nav>
    <!-- Step 120: Dynamic count using the Pinia store -->
    <div class="badge">
      Enrolled Courses: <span>{{ store.enrolledCourses.length }}</span>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useEnrollmentStore } from '../stores/enrollment'

// Access global store instance
const store = useEnrollmentStore()
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 20px;
}
nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}
nav a.router-link-active {
  color: #0056b3;
  border-bottom: 2px solid #0056b3;
}
.badge span {
  background-color: #28a745;
  color: white;
  padding: 3px 10px;
  border-radius: 12px;
  font-weight: bold;
}
</style>