import GlassButton from "../components/GlassButton";

export default function ProjectsPage() {
	const projects = [
		{
			title: "Multiplayer Games Website",
			description:
				"A full-stack web application for playing a variety of turn-based games.",
			time: "Ongoing",
			tech: ["React", "Django", "WebSockets"],
			link: null,
		},
		{
			title: "Portfolio Website",
			description:
				"My second personal website, this time with a clean and glassy look.",
			time: "September 2025",
			tech: ["React", "Tailwind CSS"],
			link: "https://github.com/ArpitGill314/arpitgill314.github.io",
		},
		{
			title: "Lego EV3 Robot",
			description:
				"A Lego Mindstorms robot with an array of sensors programmed to accomplish 4 challenging tasks.",
			time: "May 2024",
			tech: ["Python"],
			link: null,
		},
	];

	const handleClick = (link) => {
		if (link) {
			window.open(link, "_blank");
		}
	};

	return (
		<section
			id="projects"
			className="flex items-center justify-center px-6 py-20"
		>
			<div className="p-10 text-white max-w-3xl text-center flex flex-col items-center w-full">
				<h2 className="text-4xl font-bold mb-6">Projects</h2>

				<p className="text-lg leading-relaxed mb-6 max-w-3xl">
					Click on each project to view more information on GitHub (if available).
				</p>

				<div className="grid grid-cols-1 gap-6 w-full">
					{projects.map((proj, i) => (
						<div
							key={i}
							onClick={() => handleClick(proj.link)}
							className="relative cursor-pointer bg-white/10 border border-white/20 backdrop-blur-[8px]
                rounded-[30px] shadow-md p-6 transition duration-300 
                hover:bg-white/20 hover:border-white/30 flex flex-col items-center group"
						>
							<h3 className="text-lg font-bold">{proj.title}</h3>
							<p className="text-md text-indigo-300 mb-1">{proj.time}</p>
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
							{proj.link ? (
								<div
									className="absolute -top-[21px] left-1/2 -translate-x-1/2 opacity-100 md:opacity-0 group-hover:opacity-100
                  transition bg-transparent text-white text-xs px-2 py-0 rounded-full pointer-events-none"
								>
									View on GitHub
								</div>
							) : (
								<div
									className="absolute -top-[21px] left-1/2 -translate-x-1/2 opacity-100 md:opacity-0 group-hover:opacity-100
                  transition bg-transparent text-white text-xs px-2 py-0 rounded-full pointer-events-none"
								>
									Not on GitHub yet
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
