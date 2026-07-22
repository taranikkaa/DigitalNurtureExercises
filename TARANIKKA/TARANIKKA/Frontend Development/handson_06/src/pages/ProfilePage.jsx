import { useEnrollment } from '../context/EnrollmentContext'; // Import context hook

function ProfilePage() {
  // 83 & 84. Read state and draw remove function from Context
  const { enrolledCourses, unenrollCourse } = useEnrollment();

  return (
    <div>
      <h2>Your Profile Dashboard</h2>
      <h3>Your Enrolled Courses ({enrolledCourses.length})</h3>

      {enrolledCourses.length === 0 ? (
        <p style={{ color: '#777' }}>You haven't enrolled in any courses yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {enrolledCourses.map((courseId) => (
            <li 
              key={courseId} 
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 15px', border: '1px solid #eee', marginBottom: '10px', borderRadius: '4px', background: '#f9f9f9' }}
            >
              <span><strong>Course Module ID:</strong> #{courseId}</span>
              <button 
                onClick={() => unenrollCourse(courseId)}
                style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Un-enroll / Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ProfilePage;