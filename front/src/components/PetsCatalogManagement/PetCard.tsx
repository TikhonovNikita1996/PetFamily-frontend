import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from "@mui/material";
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
			/>
			<CardContent>
				<Typography
					gutterBottom
					variant="h6"
					color=""
				>
					{pet.name}, {pet.age} лет
				</Typography>
				<Typography variant="h6">
					TEST!!!!
				</Typography>
			</CardContent>
			<CardActions sx={{ justifyContent: "space-between" }}>
				<Button variant="contained">Подробнее</Button>
				<IconButton color="inherit">
					<StarBorderIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
