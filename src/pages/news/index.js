import { Box, Typography, useTheme} from '@material-ui/core';

import Layout from '../../components/layout';

const News = () => {
	const theme = useTheme();

	return (
		<Layout title="News">
			<Box component="section">
				<Typography variant="h4" align="center" style={{ marginTop: theme.spacing(10) }}>News Page</Typography>
			</Box>
		</Layout>
	);
};

export default News;