export default function GlassButton({ children, onClick }) {
	return (
		<button
			onClick={onClick}
			className={`
        px-6 py-3 rounded-full text-white font-semibold
        bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg
        hover:bg-white/20 transition duration-300
      `}
		>
			{children}
		</button>
	);
}
