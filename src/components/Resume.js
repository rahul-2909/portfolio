const Resume = () => (
  <section id="resume" className=" bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 text-center">
    <h2 className="text-4xl font-bold mb-6">Resume</h2>
    <a
      href="/resume.pdf"
      download
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
    >
      Download Resume
    </a>
  </section>
);

export default Resume;

// className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4"