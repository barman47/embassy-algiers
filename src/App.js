import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';

import Home from './pages/home';
import ViewNigeria from './pages/viewNigeria';
import Gallery from './pages/gallery';
import News from './pages/news';
import ConsulerServices from './pages/services';

import { GALLERY, NEWS, SERVICES, VIEW_NIGERIA } from './routes';

const App = () => {
	const theme = createTheme({
		overrides: {
			MuiButton: {
				  root: {
					borderRadius: '5px',
					boxShadow: 'none !important',
					paddingBottom: '14px',
					paddingTop: '14px',
					textTransform: 'capitalize'
				  },
			},
		},
		
		palette: {
			primary: {
				// light: '#df3c3a',
				main: '#228C22',
				// dark: '#990300'
			},
	
			text: {
				// primary: '#f8f8f8',
				// secondary: '#f8f8f8'
			}
		},
	
		breakpoints: {
			values: {
				xs: 0,
				sm: 480,
				md: 768,
				lg: 1024,
				xl: 1920
			}
		},
	
		typography: {
			fontFamily: "'Kumbh Sans', sans-serif",
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
			fontWeightBold: 600
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Route path="/" exact component={Home} />
				<Route path={VIEW_NIGERIA} exact component={ViewNigeria} />
				<Route path={GALLERY} exact component={Gallery} />
				<Route path={NEWS} exact component={News} />
				<Route path={SERVICES} exact component={ConsulerServices} />
			</Router>
		</ThemeProvider>
	);
}

export default App;
