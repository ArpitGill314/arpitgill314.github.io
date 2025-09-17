// src/pages/AboutPage.jsx
export default function AboutPage() {
	return (
		<section id="about" className="flex items-center justify-center px-6 py-20">
			<div className="p-10 text-white max-w-4xl text-center flex items-center flex-col">
				<h2 className="text-4xl font-bold mb-6">About Me</h2>

				<p className="text-lg leading-relaxed mb-8">
					Hi! I'm <span className="font-semibold">Arpit Gill</span>, I
					<span className="text-indigo-300"> do stuff</span>,
					<span className="text-pink-300"> and other stuff</span>, and
					I'm just filling space for now.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
					<div
						className="bg-white/10 border border-white/20 backdrop-blur-sm hover:border-white/30 transition duration-300
							rounded-[30px] shadow-md px-20 py-6"
					>
						<h3 className="text-xl font-bold mb-2">Languages</h3>
						<ul className="space-y-2 text-center">
							<li>ReactJS</li>
							<li>JavaScript</li>
							<li>Python</li>
							<li>C++</li>
						</ul>
					</div>
					<div
						className="bg-white/10 border border-white/20 backdrop-blur-sm hover:border-white/30 transition duration-300
							rounded-[30px] shadow-md px-20 py-6"
					>
						<h3 className="text-xl font-bold mb-2">Skills</h3>
						<ul className="space-y-2 text-center">
							<li>Web development</li>
							<li>Backend engineering</li>
							<li>Data analysis</li>
							<li>Machine learning</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
