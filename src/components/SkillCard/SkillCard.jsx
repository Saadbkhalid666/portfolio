export const SkillCard = ({ title, icon, color, className }) => {
  return (
    <div className={`group relative bg-[#120F1F]/60 backdrop-blur-xl border border-purple-500/20 shadow-[0_4px_20px_rgba(168,85,247,0.05)] rounded-2xl p-6 lg:p-8 flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(168,85,247,0.2)] hover:border-purple-400/50 transition-all duration-500 overflow-hidden ${className}`}>
      {/* Subtle glowing blob inside the card on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-600/0 to-purple-600/0 group-hover:from-purple-500/10 group-hover:via-purple-600/5 group-hover:to-transparent transition-all duration-500 z-0"></div>
      
      <div className={`relative z-10 text-5xl md:text-6xl mb-4 ${color} filter transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_currentColor]`}>
        {icon}
      </div>
      <h3 className="relative z-10 text-base md:text-lg lg:text-xl font-bold text-gray-300 group-hover:text-white transition-colors duration-300 text-center tracking-wide">{title}</h3>
    </div>
  );
};
