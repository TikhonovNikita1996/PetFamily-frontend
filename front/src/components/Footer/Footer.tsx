import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, IconButton, Typography } from "@mui/material";

export default function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: "#0f172a",
				color: "white",
				padding: "16px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between"
			}}
		>
			<div>
				<IconButton color="inherit" href="https://t.me/TikhonovNikita">
					<TelegramIcon />
				</IconButton>
				<IconButton
					color="inherit"
					href="https://github.com/TikhonovNikita1996"
				>
					<GitHubIcon />
				</IconButton>
			</div>
			<Typography variant="body2">© 2024, Tikhonov Nikita</Typography>
		</Box>
	);
}
