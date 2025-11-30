import "./cards.css";

export const Card = ({ title, description, skills, link }) => {
  return (
    <div className="container bg-[#0D0B14] border-purple-500 hover:border-2 w-96 p-10 rounded-xl hover:scale-105 duration-200 transition-all ease-in-out cursor-pointer  shadow-lg">
      <h1 className="bg-linear-to-r bg-clip-text text-transparent from-purple-400 to-white  font-extrabold font-sans text-2xl   mb-2">{title}</h1>

      <p className="text-white mb-3">{description}</p>

      <p className="font-semibold text-white">
        Skills:
        <span className="flex gap-2 flex-wrap mt-1">
          {skills?.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 px-2 py-1 text-purple-500 rounded text-sm"
            >
              {skill}
            </span>
          ))}
        </span>
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          className="text-blue-600 font-semibold mt-4 inline-block"
        >
          View Code →
        </a>
      )}
    </div>
  );
};
