import GlassButton from "../components/GlassButton";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

export default function LandingPage() {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center px-6 py-20"
		>
			<div className="relative text-center text-white z-10">
				<h1 className="text-5xl font-bold mb-4">
					Hi, I'm
					<span className="bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
						{" "}
						Arpit Gill
					</span>
				</h1>
				<p className="text-xl mb-6">Full-Stack Developer</p>
				<div className="flex justify-center gap-3">
					<GlassButton href={"#about"}>View More</GlassButton>
					<GlassButton
						circular={true}
						href={"https://www.linkedin.com/in/arpitgill/"}
						title={"LinkedIn"}
					>
						<FaLinkedinIn size={20} />
					</GlassButton>
					<GlassButton
						circular={true}
						href={"https://github.com/ArpitGill314"}
						title={"GitHub"}
					>
						<TbBrandGithubFilled size={25} />
					</GlassButton>
				</div>
			</div>
		</section>
	);
}
