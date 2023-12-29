"use client";
import { useRef, FormEvent } from "react";
import Notes from "@/components/Notes";
import { supabaseClient } from "@/supabase/supabaseClient";

export default function Wall() {
	const usernameRef = useRef<HTMLInputElement | null>(null);
	const noteRef = useRef<HTMLInputElement | null>(null);

	const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { data, error } = await supabaseClient
			.from("notes")
			.insert([
				{
					username: usernameRef?.current?.value,
					note: noteRef?.current?.value,
				},
			])
			.select();

		if (data) {
			window.location.reload();
		}
	};

	return (
		<div>
			<form
				onSubmit={submitHandler}
				className="flex flex-col w-full items-center p-8"
			>
				<header className="m-8 text-center">
					<h1 className="sm:text-4xl md:text-6xl lg:text-8xl text-4xl font-acorn text-neutral-600 text-center">
						The Wall
					</h1>
					<p className="my-4 text-lg font-serif text-left">
						Check out what others have to say and also...
					</p>
					<h1 className="sm:text-4xl md:text-6xl text-4xl font-acorn ">
						Go ahead and leave your footprint!
					</h1>
				</header>

				<input
					type="text"
					ref={noteRef}
					name="note"
					required
					id="note"
					className="mb-4 h-12 p-4 rounded-2xl w-5/6"
					placeholder="Say something..."
				/>
				<input
					type="text"
					name="username"
					ref={usernameRef}
					required
					id="username"
					className="mb-4 h-12 p-4 rounded-2xl w-5/6"
					placeholder="Your name..."
				/>
				<button
					type="submit"
					className="p-2 bg-neutral-400 rounded-xl"
				>
					Submit
				</button>
			</form>
			<Notes />
		</div>
	);
}
