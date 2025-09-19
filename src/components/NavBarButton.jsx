export default function NavBarButton({ children, href }) {
	return (
		<a
			href={href}
			className="px-4 sm:px-6 h-12 sm:h-14 text-lg font-semibold rounded-full hover:bg-white/15 
			transition duration-300 flex items-center justify-center active:bg-white/40"
		>
			{children}
		</a>
	);
}
