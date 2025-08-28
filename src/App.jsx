import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function App() {
	const [init, setInit] = useState(false);

	// Initialize engine
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	// Particle options
	const particlesOptions = useMemo(
		() => ({
			background: {
				color: "#000000",
			},
			particles: {
				number: { value: 60 },
				color: { value: "#ffffff" },
				size: { value: 3 },
				move: { enable: true, speed: 1 },
				links: { enable: true, color: "#ffffff" },
			},
		}),
		[]
	);

	return (
		<div className="relative min-h-screen flex items-center justify-center">
			{init && (
				<Particles
					id="tsparticles"
					className="absolute inset-0"
					options={particlesOptions}
				/>
			)}

			<div className="relative text-center text-white">
				<h1 className="text-5xl font-bold mb-4">Hi, I'm Arpit</h1>
				<p className="text-xl mb-6">I'm a programmer</p>
				<button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:scale-105 transition">
					View My Work
				</button>
			</div>
		</div>
	);
}
