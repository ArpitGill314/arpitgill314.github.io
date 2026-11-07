import GlassButton from "../components/GlassButton";

export default function AboutPage() {
	const details = [
		{
			section: "Languages",
			items: ["Python", "C++", "C", "Java", "JavaScript", "SQL"],
		},
		{
			section: "Frameworks & Development",
			items: ["React", "Django", "Node.js", "REST APIs", "WebSockets"],
		},
		{
			section: "DevOps & Tools",
			items: ["Jenkins", "Docker", "GitLab CI/CD", "MSBuild", "Trivy", "Git"],
		},
		{
			section: "Databases & Platforms",
			items: ["Oracle", "SQL Server", "SQLite", "Linux", "Windows", "macOS"],
		},
	];

	return (
		<section id="about" className="flex items-center justify-center px-6 py-20">
			<div className="p-10 text-white max-w-6xl text-center flex items-center flex-col w-full">
				<h2 className="text-4xl font-bold mb-6">About Me</h2>

				<p className="text-lg leading-relaxed mb-6 max-w-3xl">
					I'm <span className="font-semibold">Arpit</span>, a computer science
					student at the University of Cincinnati with a passion for
					software development and problem-solving. I've worked across
					backend development, CI/CD automation, and software infrastructure,
					using technologies like
					<span className="font-semibold"> Python</span>,
					<span className="font-semibold"> C++</span>, and
					<span className="font-semibold"> Docker</span>.
					I enjoy tackling complex technical challenges, improving
					development workflows, and building reliable software.
					Outside of coding, you can find me playing video games,
					watching TV, or playing sports.
				</p>

				<div className="mb-6">
					<GlassButton href={"/Gill_Arpit_Resume_2026.pdf"}>
						View resume
					</GlassButton>
				</div>

				<div className="grid grid-cols-1 gap-6 w-full max-w-2xl">
					{details.map((det, i) => (
						<div
							key={i}
							className="bg-white/10 border border-white/20 backdrop-blur-[8px] hover:bg-white/20
        rounded-[30px] shadow-md p-6 hover:border-white/30 transition duration-300 flex flex-col"
						>
							<h3 className="text-lg font-bold">{det.section}</h3>
							<ul className="text-md space-y-1 text-center text-gray-300">
								{det.items.map((d, j) => (
									<li key={j}>• {d}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
