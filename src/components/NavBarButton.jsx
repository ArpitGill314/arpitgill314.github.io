export default function NavBarButton({ children }) {
	return (
		<button className="px-5 h-12 rounded-full hover:bg-white/10 transition duration-300">
			{children}
		</button>
	);
}
