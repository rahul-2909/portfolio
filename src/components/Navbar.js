const sections = [
  "Home", "About", "Experience", "Education", "Projects",
  "Resume", "Expertise", "Certifications", "Skills", "Contact"
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 shadow-md backdrop-blur-md z-50 flex justify-between items-center px-8 py-4">
    <h1 className="text-2xl font-bold text-green-400 hover:text-green-200 transition duration-300 cursor-pointer">
      Rohit Rahul
    </h1>
    <ul className="flex space-x-6 text-lg text-white">
      {sections.map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            className="hover:text-blue-400 hover:scale-110 transition transform duration-300"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;


      
