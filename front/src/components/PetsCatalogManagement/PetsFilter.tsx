import {
	Box,
	Button,
	Checkbox,
	FormControl,
	MenuItem,
	Paper,
	Select,
	Typography,
} from "@mui/material";
import RangeSlider from "./AgeRangeSlider";

export default function PetsFilter() {
	return (
		<Box
			display="flex"
			flexDirection="column"
			gap={3}
			sx={{
				width: 450,
				borderRadius: 3,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				marginY: 2,
				marginX: 2,
			}}
		>
			<Paper>
				<Typography fontWeight="fontWeightBold" variant="h6" textAlign="center">
					Поиск и сортировка
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						gap: 1,
						marginY: 1,
						marginX: 2,
					}}
				>
					<Typography fontWeight="fontWeightBold">Вид</Typography>
					<FormControl fullWidth size="small">
						<Select>
							<MenuItem value={"Any"}>Любая</MenuItem>
							<MenuItem value={"Cat"}>Кошка</MenuItem>
							<MenuItem value={"Dog"}>Собака</MenuItem>
						</Select>
					</FormControl>
					<Typography fontWeight="fontWeightBold">Пол</Typography>
					<FormControl fullWidth size="small">
						<Select>
							<MenuItem value={"Male"}>Мальчик</MenuItem>
							<MenuItem value={"Female"}>Девочка</MenuItem>
						</Select>
					</FormControl>
					<Typography fontWeight="fontWeightBold">Возраст</Typography>
					<RangeSlider/>
					<Typography fontWeight="fontWeightBold">Порода</Typography>
					<FormControl fullWidth size="small">
						<Select>
							<MenuItem value={"Any"}>Любая</MenuItem>
						</Select>
					</FormControl>
					<Typography fontWeight="fontWeightBold">Окрас</Typography>
					<FormControl fullWidth size="small">
						<Select>
							<MenuItem value={"Any"}>Любой</MenuItem>
						</Select>
					</FormControl>
					<Typography fontWeight="fontWeightBold">Статус</Typography>
					<FormControl fullWidth size="small">
						<Select>
							<MenuItem value={"Any"}>Любой</MenuItem>
						</Select>
					</FormControl>
					
					<Box sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center"
					}}>
						<Typography fontWeight="fontWeightBold">Привит</Typography>
						<Checkbox  defaultChecked />
					</Box>

					<Box sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center"
					}}>
						<Typography fontWeight="fontWeightBold">Вакцининация</Typography>
						<Checkbox  defaultChecked />
					</Box>
					<Box sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center"
					}}>
						<Typography fontWeight="fontWeightBold">Кастрация/стериализация</Typography>
						<Checkbox  defaultChecked />
					</Box>
					<Button variant="contained">Применить фильтры</Button>
				</Box>
			</Paper>
		</Box>
	);
}
