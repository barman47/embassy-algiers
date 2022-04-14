import { Box, Typography, useTheme} from '@material-ui/core';

import Layout from '../../components/layout';

const ConsulerServices = () => {
	const theme = useTheme();

	return (
		<Layout title="Consuler Services">
			<Box component="section">
				<Typography variant="h4" align="center" style={{ marginTop: theme.spacing(10) }}>Consuler Services Page</Typography>
			</Box>
		</Layout>
	);
};

export default ConsulerServices;