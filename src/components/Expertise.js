const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Tailwind CSS", "Git"];

const Expertise = () => (
  <section id="expertise" className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">My Expertise</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 text-sm hover:bg-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

      // className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4"

export default Expertise;
