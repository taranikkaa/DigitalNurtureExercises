<template>
  <div>
    <h2>Student Enrollment Profile</h2>

    <!-- Step 119: Read and list enrolled courses from store state -->
    <div v-if="store.enrolledCourses.length > 0">
      <div class="summary-card">
        <h3>Enrollment Summary</h3>
        <p>Total Credits Selected: <strong>{{ store.totalCredits }}</strong> Hours</p>
      </div>

      <h3>Your Enrolled Courses</h3>
      <div class="enrolled-list">
        <div v-for="course in store.enrolledCourses" :key="course.id" class="enrolled-item">
          <div>
            <strong>{{ course.name }}</strong> ({{ course.code }}) — {{ course.credits }} Credits
          </div>
          <!-- Action button to trigger unenrollment -->
          <button @click="store.unenroll(course.id)" class="unenroll-btn">Unenroll</button>
        </div>
      </div>
    </div>

    <div v-else class="empty-state">
      <p>You have not enrolled in any courses yet. Go check out the catalog!</p>
    </div>
  </div>
</template>

<script setup>
import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()
</script>

<style scoped>
.summary-card {
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 25px;
}
.enrolled-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.enrolled-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
}
.unenroll-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
.empty-state {
  border: 1px dashed #ccc;
  padding: 30px;
  text-align: center;
  color: #777;
  border-radius: 6px;
}
</style>