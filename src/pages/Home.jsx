import StudentCard from '../components/StudentCard';

function Home() {
  return (
    <div className="page">
      <div className="welcome">
        <h1>Welcome to student Dashboard</h1>
        <p>Manage your student information here.</p>
      </div>

      <h2>Student Details</h2>

      <div className="student-container">
        <StudentCard name="Janani" dept="CSE" year="3rd Year" />
        <StudentCard name="Sakthi" dept="AML" year="3rd Year" />
        <StudentCard name="Jasmine" dept="CSS" year="3rd Year" />
      </div>
    </div>
  );
}

export default Home;