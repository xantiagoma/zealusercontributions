"use client";

import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { IoContrast, IoMoon, IoSunny } from "react-icons/io5";

export const ThemeSwitcher = () => {
	const { setTheme, theme } = useTheme();

	return (
		<Dropdown className="min-w-fit">
			<DropdownTrigger>
				<Button
					variant="bordered"
					className="p-0 size-10 min-w-fit"
					suppressHydrationWarning
				>
					{theme === "light" ? (
						<IoSunny suppressHydrationWarning />
					) : theme === "dark" ? (
						<IoMoon suppressHydrationWarning />
					) : (
						<IoContrast suppressHydrationWarning />
					)}
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				onAction={(key) => setTheme(key as "system" | "dark" | "light")}
			>
				<DropdownItem key="system" startContent={<IoContrast />}>
					System
				</DropdownItem>
				<DropdownItem key="dark" startContent={<IoMoon />}>
					Dark
				</DropdownItem>
				<DropdownItem key="light" startContent={<IoSunny />}>
					Light
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};
