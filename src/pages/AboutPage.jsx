export default function AboutPage() {
	const details = [
		{
			section: "Languages",
			items: ["JavaScript", "Python", "C++"],
		},
		{
			section: "Frameworks / Libraries",
			items: ["React", "Node.js", "Express.js"],
		},
		{
			section: "Skills",
			items: ["Web development", "Backend engineering", "Data analysis"],
		},
	];

	return (
		<section id="about" className="flex items-center justify-center px-6 py-10">
			<div className="p-10 text-white max-w-6xl text-center flex items-center flex-col w-full">
				<h2 className="text-4xl font-bold mb-6">About Me</h2>

				<p className="text-lg leading-relaxed mb-6">
					Hi! I'm <span className="font-semibold">Arpit Gill</span>, I
					<span className="text-indigo-300"> do stuff</span>,
					<span className="text-pink-300"> and other stuff</span>, and I'm just
					filling space for now.
				</p>

				<div className="grid grid-cols-1 gap-6 w-full max-w-2xl">
					{details.map((det, i) => (
						<div
							key={i}
							className="bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20
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
