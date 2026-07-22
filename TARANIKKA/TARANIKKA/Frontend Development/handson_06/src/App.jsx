import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
// 1. Import Redux hooks and our slice actions
import { useSelector, useDispatch } from 'react-redux';
import { enroll, unenroll } from './store/enrollmentSlice';

// Global Header Navigation
function Header() {
  // Read the enrolled courses directly from Redux global state
  const enrolledCourses = useSelector((state) => state.enrollment.enrolledCourses);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#333', color: '#fff', padding: '15px 30px', borderRadius: '4px', marginBottom: '20px' }}>
      <h3 style={{ margin: 0 }}>Student Portal</h3>
      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/courses" style={{ color: '#fff', textDecoration: 'none' }}>Courses</Link>
        <Link to="/profile" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
          Profile ({enrolledCourses.length})
        </Link>
      </nav>
    </header>
  );
}

// Dashboard Home Component
function HomePage() {
  return (
    <div>
      <h2>Welcome to the Student Portal</h2>
      <p>Select "Courses" from the menu above to browse available modules.</p>
    </div>
  );
}

// Courses List Component
function CoursesPage() {
  const courses = [
    { id: '1', title: 'Full-Stack Web Development' },
    { id: '2', title: 'Data Structures & Algorithms' },
    { id: '3', title: 'Cloud Computing with AWS' }
  ];
  return (
    <div>
      <h2>Available Courses</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {courses.map(course => (
          <div key={course.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
            <h3>{course.title}</h3>
            <Link to={`/courses/${course.id}`} style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
              View Details & Enroll →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Detailed Course View Component
function CourseDetailPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  // Initialize the Redux dispatch hook
  const dispatch = useDispatch();

  const handleEnroll = () => {
    // 2. Dispatch the enroll action to the Redux store
    dispatch(enroll(courseId));
    alert(`Successfully enrolled in Course #${courseId}!`);
    navigate('/profile');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '400px' }}>
      <h2>Course Details</h2>
      <p>You are viewing detailed parameters for <strong>Course ID: {courseId}</strong>.</p>
      <button onClick={handleEnroll} style={{ padding: '10px 15px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Enroll on this Course
      </button>
    </div>
  );
}

// User Profile Component
function ProfilePage() {
  const enrolledCourses = useSelector((state) => state.enrollment.enrolledCourses);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your Profile Dashboard</h2>
      <h3>Your Enrolled Courses ({enrolledCourses.length})</h3>
      {enrolledCourses.length === 0 ? (
        <p style={{ color: '#777' }}>You haven't enrolled in any courses yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {enrolledCourses.map((courseId) => (
            <li key={courseId} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 15px', border: '1px solid #eee', marginBottom: '10px', borderRadius: '4px', background: '#f9f9f9' }}>
              <span><strong>Course Module ID:</strong> #{courseId}</span>
              {/* 3. Dispatch the unenroll action to remove a course */}
              <button onClick={() => dispatch(unenroll(courseId))} style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
                Un-enroll / Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Main Application Flow
export default function App() {
  // Notice: The local useState hooks are completely gone. Everything flows through Redux!
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif', padding: '20px' }}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}