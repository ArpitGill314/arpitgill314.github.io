import clsx from "clsx";

export default function GlassButton({ children, onClick, circular = false }) {
	return (
		<button
			onClick={onClick}
			className={clsx(
				"h-12 bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg z-50 text-white font-semibold hover:bg-white/20 transition duration-300",
				circular
					? "w-12 h-12 flex items-center justify-center rounded-full"
					: "px-5 rounded-full"
			)}
		>
			{children}
		</button>
	);
}
