import NavBarButton from "./NavBarButton";

export default function NavBar() {
	return (
		<nav
			className="fixed top-5 left-1/2 -translate-x-1/2 
                    flex gap-0 px-0 py-0 hover:border-white/30 transition duration-300
                    bg-white/10 backdrop-blur-sm border border-white/20 
                    rounded-full shadow-lg z-50 text-white font-semibold"
		>
			<NavBarButton href={"#home"}>Home</NavBarButton>
			<NavBarButton href={"#about"}>About</NavBarButton>
            <NavBarButton href={"#projects"}>Projects</NavBarButton>
            <NavBarButton href={"#contact"}>Contact</NavBarButton>
		</nav>
	);
}
