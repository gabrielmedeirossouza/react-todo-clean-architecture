export const THEME = {
	font: {
		primary: "#000000",
		secondary: "#FFFFFF",
		success: "#FFFFFF",
		danger: "#FFFFFF",
		warning: "#FFFFFF",
	}
} as const;

export type TTheme = typeof THEME;
