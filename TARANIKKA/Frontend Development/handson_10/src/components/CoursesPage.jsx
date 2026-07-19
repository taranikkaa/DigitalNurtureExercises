import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCourses, selectCourses, selectCoursesLoading, selectCoursesError } from '../store/courseSlice';

const CoursesPage = () => {
  const dispatch = useDispatch();

  // 146. Use selectors in components
  const courses = useSelector(selectCourses);
  const isLoading = useSelector(selectCoursesLoading);
  const error = useSelector(selectCoursesError);

  // 145. Dispatch the thunk in useEffect
  useEffect(() => {
    dispatch(fetchAllCourses());
  }, [dispatch]);

  if (isLoading) return <div>Loading courses...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;