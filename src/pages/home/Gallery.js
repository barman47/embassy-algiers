import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
	Button,
	ImageList,
	ImageListItem,
	IconButton,
	ImageListItemBar,
	Typography
} from '@material-ui/core';
import { Information } from 'mdi-material-ui';

import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';
import slide4 from '../../images/slide4.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
		padding: [[theme.spacing(2), theme.spacing(4)]],

		'& h4': {
			textAlign: 'center'
		}
	},

	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},

  	btn: {
		alignSelf: 'center',
		marginTop: theme.spacing(3)
	}
}));

const itemData = [
    {
        img: slide1,
        title: 'Image',
        author: 'author',
    },

    {
        img: slide2,
        title: 'Image',
        author: 'author',
    },

    {
        img: slide3,
        title: 'Image',
        author: 'author',
    },

    {
        img: slide4,
        title: 'Image',
        author: 'author',
    },
];

const Gallery = () => {
  	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Typography variant="h4">Gallery</Typography><br/>
			<ImageList rowHeight={180} className={classes.imageList}>
				{itemData.map((item) => (
				<ImageListItem key={item.img}>
					<img src={item.img} alt={item.title} />
					<ImageListItemBar
						title={item.title}
						subtitle={<span>by: {item.author}</span>}
						actionIcon={
							<IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
								<Information />
							</IconButton>
						}
					/>
				</ImageListItem>
				))}
			</ImageList>
			<Button component={RouterLink} variant="contained" color="primary" className={classes.btn}>View Gallery</Button>
		</section>
	);
};

export default Gallery;