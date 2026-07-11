import { Link } from 'react-router-dom';
import { useEnrollment } from '../context/EnrollmentContext'; // Import hook

function Header() {
  // 83. Consume the enrolledCourses array length for the live header count
  const { enrolledCourses } = useEnrollment();

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#333', color: '#fff', padding: '15px 30px', borderRadius: '4px', marginBottom: '20px' }}>
      <h3 style={{ margin: 0 }}>Student Portal</h3>
      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/courses" style={{ color: '#fff', textDecoration: 'none' }}>Courses</Link>
        {/* 85. Count badge updates automatically */}
        <Link to="/profile" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
          Profile ({enrolledCourses.length})
        </Link>
      </nav>
    </header>
  );
}
export default Header;