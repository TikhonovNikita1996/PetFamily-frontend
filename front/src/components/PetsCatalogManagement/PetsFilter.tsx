import { Box, Paper, TextField } from "@mui/material";

export default function PetsFilter() {
	return (
	  <Box display='flex' flexDirection='column' gap={3}>
		<Paper>
			<TextField
				label='Поиск и сортировка'
				variant="outlined"
				fullWidth
			></TextField>
		</Paper>
	  </Box>
	);
  }