import { Box, Typography, useTheme} from '@material-ui/core';

import Layout from '../../components/layout';

const Gallery = () => {
	const theme = useTheme();

	return (
		<Layout title="Gallery">
			<Box component="section">
				<Typography variant="h4" align="center" style={{ marginTop: theme.spacing(10) }}>Gallery Page</Typography>
			</Box>
		</Layout>
	);
};

export default Gallery;