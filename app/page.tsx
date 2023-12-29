import Image from "next/image";
import Star from "@/public/images/star.svg";

import Terminal from "@/components/Terminal";

export default function Home() {
	return (
		<main>
			<div className="text-center my-16 mx-4 max-h-fit">
				<header className="font-playfair">
					<div className="hidden lg:block relative">
						<Image
							src={Star}
							width={40}
							height={40}
							alt="star bro"
							className="right-60 absolute"
						/>
					</div>
					<h1 className="lg:text-8xl sm:text-4xl md:text-6xl text-4xl font-acorn">
						<span>{`Hi. I'm Sudarshan.`}</span> <br />
						<span>A Developer.</span>
					</h1>
					<div className="hidden lg:block relative">
						<Image
							src={Star}
							width={40}
							height={40}
							alt="star bro"
							className="left-60 absolute bottom-4"
						/>
					</div>
					<h2 className="md:text-md text-2xl m-4 font-mono text-neutral-500">{`and Batman by night.`}</h2>
				</header>
			</div>
			<Terminal />
		</main>
	);
}
