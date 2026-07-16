<template>
  <div v-if="course" class="detail-container">
    <h2>Course Details</h2>
    <div class="detail-card">
      <h3>{{ course.name }}</h3>
      <p><strong>Course Code:</strong> {{ course.code }}</p>
      <p><strong>Credits Hours:</strong> {{ course.credits }} Credits</p>
      <p><strong>Typical Grade:</strong> {{ course.grade }}</p>
      <!-- Step 115: Programmatic navigation action button -->
      <button @click="enrollAndRedirect" class="enroll-btn">Enroll & Go to Profile</button>
    </div>
  </div>
  <div v-else>
    <p>Loading course details...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useEnrollmentStore } from '../stores/enrollment' // Import store

const route = useRoute()
const router = useRouter()
const store = useEnrollmentStore() // Access the store
const course = ref(null)

const mockCourses = [
  { id: 1, name: 'Introduction to Web Development', code: 'CS-101', credits: 3, grade: 'A' },
  { id: 2, name: 'Database Management Systems', code: 'CS-102', credits: 4, grade: 'B' },
  { id: 3, name: 'Data Structures and Algorithms', code: 'CS-103', credits: 4, grade: 'A' },
  { id: 4, name: 'Cloud Computing with AWS', code: 'CS-104', credits: 3, grade: 'A' },
  { id: 5, name: 'Machine Learning Fundamentals', code: 'CS-105', credits: 4, grade: 'B' }
]

onMounted(() => {
  const idParam = Number(route.params.id)
  course.value = mockCourses.find(c => c.id === idParam)
})

const enrollAndRedirect = () => {
  if (course.value) {
    store.enroll(course.value) // Step 118: Enroll course globally
    router.push('/profile')     // Step 115: Redirect to profile
  }
}
</script>

<style scoped>
.detail-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  background-color: #fafafa;
  margin-top: 15px;
}
.enroll-btn {
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>