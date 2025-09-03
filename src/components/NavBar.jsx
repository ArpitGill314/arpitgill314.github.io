import NavBarButton from "./NavBarButton";

export default function NavBar() {
	return (
		<nav
			className="fixed top-5 left-1/2 -translate-x-1/2 
                    flex gap-0 px-0 py-0
                    bg-white/10 backdrop-blur-sm border border-white/20 
                    rounded-full shadow-lg z-50 text-white font-semibold"
		>
			<NavBarButton>Home</NavBarButton>
			<NavBarButton>About</NavBarButton>
            <NavBarButton>Projects</NavBarButton>
            <NavBarButton>Contact</NavBarButton>
		</nav>
	);
}
