
function About() {
  return (
    <div className="about-page">

      <h1>About Us</h1>
      <p className="about-subtitle">Welcome to Our Student Dashboard!</p>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a student-focused platform designed to make
          learning simple and interesting. Our website helps
          students explore knowledge and develop new skills.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide useful information and
          encourage students to achieve their goals.
        </p>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>

        <div className="about-cards">
          <div className="about-card">
            Student Friendly Platform
          </div>

          <div className="about-card">
            Easy Access to Information
          </div>

          <div className="about-card">
            Learning New Technologies
          </div>

          <div className="about-card">
            Developing Technical Skills
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To create a better learning environment where every
          student can learn, grow and succeed.
        </p>
      </section>

    </div>
  );
}

export default About;