const Projects = () => (
  <section id="projects" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6">
    <div className="max-w-6xl mx-auto ">
      <h2 className="text-4xl font-bold text-center mb-10 ">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 ">
        <div className=" p-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <h3 className="text-2xl font-bold mb-2">Portfolio Website</h3>
          <p className="text-gray-700 text-white">A personal portfolio built with React and Tailwind CSS to showcase my work.</p>
        </div>
        <div className=" p-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <h3 className="text-2xl font-bold mb-2">Todo App</h3>
          <p className="text-gray-700 text-white">Full Stack app using Node.js, Express, and MongoDB with authentication.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;


