import { createContext, useState, useContext } from 'react';

// 81. Define a context with createContext()
const EnrollmentContext = createContext();

// Create a provider component that holds enrolledCourses state and functions
export function EnrollmentProvider({ children }) {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Function to add a course ID to the array
  const enrollCourse = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
  };

  // 84. Add a Remove function to the context to un-enroll a course
  const unenrollCourse = (courseId) => {
    setEnrolledCourses(enrolledCourses.filter(id => id !== courseId));
  };

  return (
    <EnrollmentContext.Provider value={{ enrolledCourses, enrollCourse, unenrollCourse }}>
      {children}
    </EnrollmentContext.Provider>
  );
}

// Custom hook for easier consumption of the context state
export const useEnrollment = () => useContext(EnrollmentContext);