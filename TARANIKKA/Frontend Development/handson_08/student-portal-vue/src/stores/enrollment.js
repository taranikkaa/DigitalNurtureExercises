import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Step 117: Define the global enrollment store
export const useEnrollmentStore = defineStore('enrollment', () => {
  // Reactive array of enrolled courses
  const enrolledCourses = ref([])

  // Computed property to calculate total credits dynamically
  const totalCredits = computed(() => {
    return enrolledCourses.value.reduce((total, course) => total + Number(course.credits), 0)
  })

  // Action to enroll a course (preventing duplicates)
  function enroll(course) {
    if (!enrolledCourses.value.some(c => c.id === course.id)) {
      enrolledCourses.value.push(course)
    }
  }

  // Action to unenroll a course
  function unenroll(courseId) {
    enrolledCourses.value = enrolledCourses.value.filter(c => c.id !== courseId)
  }

  return { enrolledCourses, totalCredits, enroll, unenroll }
})