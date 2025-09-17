import clsx from "clsx";

export default function GlassButton({ children, onClick, circular = false }) {
	return (
		<button
			onClick={onClick}
			className={clsx(
				"h-14 text-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 shadow-lg z-50 text-white font-medium hover:bg-white/20 transition duration-300",
				circular
					? "w-14 h-14 flex items-center justify-center rounded-full"
					: "px-6 rounded-full"
			)}
		>
			{children}
		</button>
	);
}
