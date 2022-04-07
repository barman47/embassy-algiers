import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';

import Home from './pages/home';
import CovidRequirements from './pages/CovidRequirements';
import FourthWave from './pages/FourthWave';
import ViewNigeria from './pages/viewNigeria';

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
				<Route path="/viewNigeria" exact component={ViewNigeria} />
				<Route path="/covidRequirements" exact component={CovidRequirements} />
				<Route path="/fourthWave" exact component={FourthWave} />
			</Router>
		</ThemeProvider>
	);
}

export default App;
