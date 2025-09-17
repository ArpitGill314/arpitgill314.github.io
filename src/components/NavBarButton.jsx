export default function NavBarButton({ children, href }) {
	return (
		<a
			href={href}
			className="px-6 h-14 text-lg font-semibold rounded-full hover:bg-white/15 transition duration-300 flex items-center justify-center"
		>
			{children}
		</a>
	);
}
