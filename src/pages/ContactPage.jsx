import GlassButton from "../components/GlassButton";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";

export default function ContactPage() {
	const copyToClipboard = async (text) => {
		navigator.clipboard.writeText(text);
	};

	return (
		<section
			id="contact"
			className="flex items-center justify-center px-6 py-10"
		>
			<div className="p-10 text-white max-w-3xl text-center flex flex-col items-center w-full">
				<h2 className="text-4xl font-bold mb-4">Contact Me</h2>
				<p className="text-lg text-white mb-2">
					Feel free to reach out through any of the options below!
				</p>
				<p className="text-md text-gray-300 mb-10">
					Clicking phone or email will copy to your clipboard.
				</p>

				<div className="flex flex-wrap justify-center gap-3">
					<GlassButton
						onClick={() => copyToClipboard("arpitgill314@gmail.com")}
						a_tag={false}
						circular={true}
						title={"Copy email"}
					>
						<MdEmail size={25} />
					</GlassButton>

					<GlassButton
						onClick={() => copyToClipboard("5132279086")}
						a_tag={false}
						circular={true}
						title={"Copy phone number"}
					>
						<FaPhone />
					</GlassButton>

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
						<FaGithubAlt size={25} />
					</GlassButton>
				</div>
			</div>
		</section>
	);
}
