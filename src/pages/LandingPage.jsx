import GlassButton from "../components/GlassButton";
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";

export default function LandingPage() {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center px-6 py-20"
		>
			<div className="relative text-center text-white z-10">
				<h1 className="text-5xl font-bold mb-4">Hi, I'm Arpit</h1>
				<p className="text-xl mb-6">Text TBD</p>
				<div className="flex justify-center gap-3">
					<GlassButton>View More</GlassButton>
					<GlassButton circular={true}>
						<FaLinkedinIn size={20} />
					</GlassButton>
					<GlassButton circular={true}>
						<FaGithubAlt size={25} />
					</GlassButton>
				</div>
			</div>
		</section>
	);
}
