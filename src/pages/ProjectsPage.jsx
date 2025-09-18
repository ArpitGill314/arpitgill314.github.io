import { useState } from "react";
import GlassButton from "../components/GlassButton";

export default function ProjectsPage() {
	const [modalOpen, setModalOpen] = useState(false);

	const projects = [
		{
			title: "Multiplayer Games Website",
			description:
				"A full-stack web application for playing a variety of turn-based games.",
			tech: ["React", "Django", "WebSockets"],
			link: null,
		},
		{
			title: "Portfolio Website",
			description: "Personal site with glassmorphism and animated particles.",
			tech: ["React", "Tailwind CSS"],
			link: "https://github.com/ArpitGill314/portfolio-website",
		},
	];

	const handleClick = (link) => {
		if (link) {
			window.open(link, "_blank");
		} else {
			setModalOpen(true);
		}
	};

	return (
		<section
			id="projects"
			className="flex items-center justify-center px-6 py-10"
		>
			<div className="p-10 text-white max-w-3xl text-center flex flex-col items-center w-full">
				<h2 className="text-4xl font-bold mb-10">Projects</h2>

				<div className="grid grid-cols-1 gap-6 w-full">
					{projects.map((proj, i) => (
						<div
							key={i}
							onClick={() => handleClick(proj.link)}
							className="relative cursor-pointer bg-white/10 border border-white/20 backdrop-blur-sm
                rounded-[30px] shadow-md p-6 transition duration-300 
                hover:bg-white/20 hover:border-white/30 flex flex-col items-center group"
						>
							<h3 className="text-lg font-bold mb-2">{proj.title}</h3>
							<p className="text-md text-gray-300 mb-3">{proj.description}</p>

							<div className="flex flex-wrap justify-center gap-2">
								{proj.tech.map((t, j) => (
									<span
										key={j}
										className="px-3 py-1 text-sm bg-white/15 rounded-full text-gray-200"
									>
										{t}
									</span>
								))}
							</div>

							{/* Tooltip */}
							{proj.link && (
								<div
									className="absolute -top-[21px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
                  transition bg-black/50 text-white text-xs px-2 py-0 rounded-full pointer-events-none"
								>
									View on GitHub
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			{/* Modal */}
			{modalOpen && (
				<div className="fixed inset-0 bg-black/10 backdrop-blur-md flex items-center justify-center z-50">
					<div className="bg-white/10 border border-white/20 rounded-[45px] shadow-lg p-6 text-center max-w-xs flex flex-col justify-center">
						<h3 className="text-xl font-bold mb-4">Hold Your Horses!</h3>
						<p className="text-gray-300 mb-6">
							This project isn't available on GitHub yet, please check back later!
						</p>
						<GlassButton onClick={() => setModalOpen(false)} a_tag={false}>
							Close
						</GlassButton>
					</div>
				</div>
			)}
		</section>
	);
}
