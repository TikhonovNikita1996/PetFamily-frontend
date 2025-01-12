import { Grid2, Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pet } from "../../app/models/Pet";
import PetsCatalog from "../../components/PetsCatalogManagement/PetsCatalog";
import PetsFilter from "../../components/PetsCatalogManagement/PetsFilter";
import AppPagination from "../../components/AppPagination";

export default function HomePage() {
	const [pets, setPets] = useState<Pet[]>([]);
	
	useEffect(() => {
		axios
			.get<Pet[]>("https://localhost:44328/test-pets")
			.then((res) => {
				setPets(res.data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<Grid2 container spacing={4}>
			<Grid2 size={3}>
        <PetsFilter/>
		</Grid2>
			<Grid2 size={8.5}>
				<PetsCatalog pets={pets} />
				<AppPagination/>
			</Grid2>
		</Grid2>
	);
}
