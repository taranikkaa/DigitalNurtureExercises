import { useParams, useNavigate } from 'react-router-dom';
import { useEnrollment } from '../context/EnrollmentContext'; // Import context hook

function CourseDetailPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  // Destructure our enrollment action from Context
  const { enrollCourse } = useEnrollment();

  const handleEnroll = () => {
    // Save course selection globally
    enrollCourse(courseId);
    
    alert(`Successfully enrolled in Course #${courseId}!`);
    navigate('/profile');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '400px' }}>
      <h2>Course Details</h2>
      <p>You are viewing detailed parameters for <strong>Course ID: {courseId}</strong>.</p>
      <button 
        onClick={handleEnroll} 
        style={{ padding: '10px 15px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Enroll on this Course
      </button>
    </div>
  );
}
export default CourseDetailPage;