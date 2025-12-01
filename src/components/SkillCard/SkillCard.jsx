export const SkillCard = ({ title, icon, color, className }) => {
  return (
    <div className={`  p-6 rounded-xl shadow-lg flex flex-col items-center justify-center ${className}`}>
      <div className={`text-6xl mb-4 ${color} drop-shadow-blue-300 drop-shadow-md hover:scale-105 duration-200 transition-all ease-in-out hover:cursor-pointer  `}>{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
};
