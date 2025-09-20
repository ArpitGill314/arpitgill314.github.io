import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";

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
			background: { color: "transparent" },
			particles: {
				number: { value: 120 },
				color: { value: ["#344CB7", "#d65db1", "#7649fe"] },
				shape: { type: "circle" },
				size: { value: { min: 2, max: 7 } },
				opacity: { value: 0.8 },
				move: { enable: true, speed: 0.6 },
				links: { enable: true, color: "#ffffff", opacity: 0.3 },
			},
			interactivity: {
				events: { onHover: { enable: true, mode: "grab" } },
				modes: {
					grab: { distance: 150, links: { opacity: 0.9, color: "#d65db1" } },
				},
			},
		}),
		[]
	);

	return (
		<div className="relative min-h-screen">
			<div className="absolute inset-0 -z-20 bg-[linear-gradient(to_bottom,black,indigo,midnightblue,black)]"></div>
			{init && (
				<Particles
					id="tsparticles"
					className="absolute inset-0 -z-10 hidden md:block"
					options={particlesOptions}
				/>
			)}

			<NavBar />
			<LandingPage />
			<AboutPage />
			<ExperiencePage />
			<ProjectsPage />
			<ContactPage />
		</div>
	);
}
