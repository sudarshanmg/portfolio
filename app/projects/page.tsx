"use client";
import * as React from "react";
import { AlertTriangle } from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const projects = [
	{
		title: "Doodle Identifier",
		desc: `[Ongoing] Building an Artificial Neural Network from SCRATCH that can
		identify hand-drawn doodles.`,
		alert: true,
		deploymentLink: "",
		tools: "Python, NumPy",
		githubLink: "",
	},
	{
		title: "Frogify",
		desc: `Platform to upload and share your music and also listen to what others have shared.`,
		alert: false,
		deploymentLink: "https://frogify.verlcel.app",
		githubLink: "https://github.com/sudarshanmg/frogify",
		tools: "NextJS, TypeScript, Supabase, NextAuth, PostgreSQL, TailwindCSS",
	},
	{
		title: "Discord Clone",
		desc: `[Ongoing] Complete clone of discord including video/audio chat`,
		alert: true,
		deploymentLink: "",
		githubLink: "",
		tools: "NextJS, TypeScript, NodeJS, WebRTC, socket.io, UploadThing",
	},
	{
		title: "FIS - Faculty Information System",
		desc: `Custom application built for the college to manage the information of the faculties and perform CRUD operations with role based privileges`,
		alert: false,
		deploymentLink: "",
		githubLink: "https://github.com/sudarshanmg/faculty-system",
		tools: "NextJS, TypeScript, Supabase, PostgreSQL, UploadThing",
	},
	{
		title: "Pragyatha",
		desc: `Site built for the college fest`,
		alert: false,
		deploymentLink: "https://pragyatha.vercel.app",
		githubLink: "https://github.com/sudarshanmg/pragyatha",
		tools: "NextJS, TypeScript, TailwindCSS, Appwrite",
	},
	{
		title: "Currency Converter PC",
		desc: "Desktop application to convert currency built using electron.js",
		alert: false,
		deploymentLink: "",
		githubLink: "https://github.com/sudarshanmg/currency-converter",
		tools: "ReactJS, ElectronJS, TailwindCSS, NodeJS",
	},
	{
		title: "Algorithm Visualiser",
		desc: "[Ongoing] Currently only visualises findMax algorithm",
		alert: false,
		deploymentLink: "https://sudarshanmg.github.io/sudogorithm/",
		githubLink: "https://github.com/sudarshanmg/sudogorithm",
		tools: "ReactJS",
	},
];

export default function CarouselDemo() {
	return (
		<>
			<div className="text-center w-full text-slate-700">{`<- Slide ->`}</div>
			<div className="mt-4 flex justify-center w-full">
				<Carousel className="w-full max-w-md md:mx-4">
					<CarouselContent>
						{projects.map((project, index) => (
							<CarouselItem
								key={index}
								className=""
							>
								<Card className="p-1 pb-0">
									<CardHeader>
										<CardTitle>{project.title}</CardTitle>
										<CardDescription>{project.desc}</CardDescription>
									</CardHeader>
									<CardContent className="aspect-square p-6 pb-4">
										<div>Tools:</div>
										<div className="text-slate-400">{project.tools}</div>
										<div className="h-4/5 w-full mt-6 rounded-lg bg-slate-900 flex justify-center items-center text-yellow-500">
											{project.alert && (
												<div className="w-auto flex">
													<AlertTriangle
														strokeWidth={1.25}
														size={25}
														className="mx-2"
													/>
													<span>Preview coming soon</span>
												</div>
											)}
											{!project.alert && (
												<div className="flex flex-col gap-y-2">
													{project.deploymentLink.length !== 0 && (
														<Badge>
															<Link href={project.deploymentLink}>
																Deployment Link ⭧
															</Link>
														</Badge>
													)}
													<Badge>
														<Link href={project.githubLink}>Github Link ⭧</Link>
													</Badge>
												</div>
											)}
										</div>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</>
	);
}
