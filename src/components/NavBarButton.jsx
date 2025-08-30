export default function NavBarButton({ children }) {
	return (
		<button className="px-6 py-3 rounded-full hover:bg-white/15 transition duration-300">
			{children}
		</button>
	);
}
