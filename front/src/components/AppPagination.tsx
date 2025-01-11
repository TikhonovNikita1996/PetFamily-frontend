import { Box, Pagination, Typography } from "@mui/material";

export default function AppPagination() {
	return (
		<Box display="flex" justifyContent='space-between' alignItems='center' marginTop={3}>
			<Typography>
				Показываются X элементов из Y
			</Typography>
			<Pagination color="secondary" size="large" count={10} />
		</Box>
	);
}
