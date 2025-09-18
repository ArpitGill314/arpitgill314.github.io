export default function ExperiencePage() {
	const details = [
		{
			title: "Backend SWE Intern",
			company: "Tenet3",
			period: "May 2025 - Aug 2025",
			highlights: ["Python", "API testing", "CI/CD integration"],
		},
		{
			title: "Solutions Analyst Intern",
			company: "Tenet3",
			period: "Aug 2024 - Dec 2024",
			highlights: ["Python", "Data analysis", "Systems modeling"],
		},
		{
			title: "Manager",
			company: "Okeana Food Mart",
			period: "May 2021 - Aug 2024",
			highlights: ["Inventory", "Operations", "Staff training"],
		},
	];

	return (
		<section id="about" className="flex items-center justify-center px-6 py-10">
			<div className="p-10 text-white max-w-6xl text-center flex items-center flex-col w-full">
				<h2 className="text-4xl font-bold mb-6">Experience</h2>

				<div className="grid grid-cols-1 gap-6 w-full max-w-2xl">
					{details.map((exp, i) => (
						<div
							key={i}
							className="bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20
        rounded-[30px] shadow-md p-6 hover:border-white/30 transition duration-300 flex flex-col"
						>
							<h3 className="text-lg font-bold">{exp.title}</h3>
							<p className="text-indigo-300 text-md mb-1">{exp.company}</p>
							<p className="text-pink-300 text-sm mb-2">{exp.period}</p>
							<ul className="text-md space-y-1 text-center text-gray-300">
								{exp.highlights.map((d, j) => (
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
