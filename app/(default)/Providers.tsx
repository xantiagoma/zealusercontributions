import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider className="min-h-svh flex flex-col">
			{/* @ts-ignore */}
			<NextThemesProvider enableSystem attribute="class" defaultTheme="system">
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
}
