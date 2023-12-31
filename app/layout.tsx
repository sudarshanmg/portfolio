import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ModeToggle from "@/components/ModeToggle";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sudarshan",
	description: "Software Developer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body className={font.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
				>
					<Navbar />
					{children}
					<ModeToggle />
				</ThemeProvider>
			</body>
		</html>
	);
}
