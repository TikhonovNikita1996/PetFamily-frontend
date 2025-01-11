import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Pet } from "../../app/models/Pet";

type Props = {
	pet: Pet;
};
export default function PetCard({ pet }: Props) {
	return (
		<Card
			elevation={3}
			sx={{
				width: 300,
				borderRadius: 3,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				marginY: 1,
			}}
		>
			<CardMedia
				sx={{ height: 240, backgroundSize: "cover" }}
				image="https://i.ytimg.com/vi/-djeeBlIYFI/maxresdefault.jpg" // временно побудет так. Потом переделаю.
				title={pet.name}
			/>
			<CardContent>
				<Typography
					gutterBottom
					sx={{ textTransform: "uppercase" }}
					variant="subtitle2"
				>
					{pet.name}
				</Typography>
				<Typography variant="h6" sx={{ color: "secondary.main" }}>
					TEST!!!!
				</Typography>
			</CardContent>
		</Card>
	);
}
