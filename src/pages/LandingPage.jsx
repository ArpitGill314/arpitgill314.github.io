import GlassButton from "../components/GlassButton";

export default function LandingPage() {
	return (
		<div className="relative min-h-screen flex items-center justify-center">
			<div className="relative text-center text-white z-10">
				<h1 className="text-5xl font-bold mb-4">Hi, I'm Arpit</h1>
				<p className="text-xl mb-6">I like men</p>
				<GlassButton>View More</GlassButton>
			</div>
		</div>
	);
}
