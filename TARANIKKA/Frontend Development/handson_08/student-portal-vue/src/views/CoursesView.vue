<template>
  <div>
    <h2>Available Courses</h2>
    
    <input 
      type="text" 
      v-model="searchTerm" 
      placeholder="Search courses by name..." 
      class="search-box"
    />

    <div v-if="filteredCourses.length > 0">
      <CourseCard 
        v-for="course in filteredCourses" 
        :key="course.id"
        :name="course.name"
        :code="course.code"
        :credits="course.credits"
        :grade="course.grade"
      >
        <div class="actions">
          <RouterLink :to="`/courses/${course.id}`" class="btn info-btn-link">View Details</RouterLink>
          <!-- Step 118: Click handler calling the Pinia enroll action -->
          <button @click="store.enroll(course)" class="btn enroll-btn">Enroll</button>
        </div>
      </CourseCard>
    </div>
    <p v-else class="no-results">No courses match your search.</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import CourseCard from '../components/CourseCard.vue'
import { useEnrollmentStore } from '../stores/enrollment' // Import store

const searchTerm = ref('')
const courses = ref([])
const store = useEnrollmentStore() // Access the store

onMounted(() => {
  courses.value = [
    { id: 1, name: 'Introduction to Web Development', code: 'CS-101', credits: 3, grade: 'A' },
    { id: 2, name: 'Database Management Systems', code: 'CS-102', credits: 4, grade: 'B' },
    { id: 3, name: 'Data Structures and Algorithms', code: 'CS-103', credits: 4, grade: 'A' },
    { id: 4, name: 'Cloud Computing with AWS', code: 'CS-104', credits: 3, grade: 'A' },
    { id: 5, name: 'Machine Learning Fundamentals', code: 'CS-105', credits: 4, grade: 'B' }
  ]
})

const filteredCourses = computed(() => {
  return courses.value.filter(course => 
    course.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})
</script>

<style scoped>
.search-box {
  padding: 8px 12px;
  width: 100%;
  max-width: 350px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
}
.info-btn-link {
  background-color: #6c757d;
  color: white;
}
.enroll-btn {
  background-color: #28a745;
  color: white;
}
.no-results {
  color: #888;
  font-style: italic;
}
</style>