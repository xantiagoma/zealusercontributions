import "../../styles/main.css";

import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Providers } from "./Providers";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin", "latin-ext"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.variable} suppressHydrationWarning>
			<head>
				<title>Zeal User Contributions & Cheat Sheets</title>
				<meta
					name="viewport"
					content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
				/>
				<link
					rel="icon"
					href="/favicon-16.png"
					sizes="16x16"
					type="image/png"
				/>
				<link
					rel="icon"
					href="/favicon-32.png"
					sizes="32x32"
					type="image/png"
				/>
				<link
					rel="icon"
					href="/favicon-48.png"
					sizes="48x48"
					type="image/png"
				/>
				<link
					rel="icon"
					href="/favicon-62.png"
					sizes="62x62"
					type="image/png"
				/>
				<link
					rel="icon"
					href="/favicon-192.png"
					sizes="192x192"
					type="image/png"
				/>
				<meta
					name="description"
					content="Non-Official Zeal User Contributions & Cheat Sheets Repository - Create by xantiagoma"
				/>
			</head>
			<body className="min-h-svh">
				<Providers>
					<Navbar />
					<main className="container mx-auto mb-4">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
