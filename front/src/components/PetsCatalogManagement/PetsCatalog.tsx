import { Grid2, Pagination } from "@mui/material";
import { Pet } from "../../app/models/Pet";
import PetCard from "./PetCard";

type Props = {
	pets: Pet[];
};
export default function PetsCatalog({ pets }: Props) {
	return (
		<Grid2 container spacing={3}>
			{pets.map((pet) => (
				<Grid2 size={3} display='flex'>
					<PetCard pet={pet} />
				</Grid2>
			))}
		</Grid2>
	);
}
