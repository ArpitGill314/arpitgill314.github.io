import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";

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
			background: { color: "#001f33" },
			particles: {
				number: { value: 80 },
				color: { value: "#6efff7" },
				shape: { type: "circle" },
				size: { value: { min: 2, max: 6 } },
				opacity: { value: 0.6 },
				move: { enable: true, speed: 0.7, direction: "top", outModes: "out" },
			},
			interactivity: {
				events: { onHover: { enable: true, mode: "bubble" } },
				modes: { bubble: { distance: 150, size: 15, duration: 3, opacity: 1 } },
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

			<NavBar />
			<LandingPage />
		</div>
	);
}
