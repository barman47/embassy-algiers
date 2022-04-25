import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
	Button,
	ImageList,
	ImageListItem,
	Typography
} from '@material-ui/core';
import { getDownloadURL, list, ref } from 'firebase/storage';
import { storage } from '../../firebase';

import { GALLERY } from '../../routes';

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

const ImageGallery = () => {
  	const classes = useStyles();

	  const [images, setImages] = useState([]);

		useEffect(() => {
			getFiles();
		}, []);

	  const getFiles = async() => {
		const listRef = ref(storage, '');
		let url;
		list(listRef, { maxResults: 4 })
			.then((res) => {
				res.prefixes.forEach((folderRef) => {
				// All the prefixes under listRef.
				// You may call listAll() recursively on them.
				});
				res.items.forEach(async (itemRef) => {
					url = await await getDownloadURL(itemRef);
					setImages((images) => setImages([...images, {
						src: url,
						alt: "Image Thumbnail",
						thumbnail: url,
						thumbnailWidth: 320,
        				thumbnailHeight: 174,
						onClick: () => {},
						onTouchEnd: () => {},
					}]))
				});
			}).catch((error) => {
				// Uh-oh, an error occurred!
			});
	};

	return (
		<section className={classes.root} id={GALLERY}>
			<Typography variant="h4">Gallery</Typography><br/>
			<ImageList rowHeight={180} className={classes.imageList}>
				{images.map((item, index) => (
				<ImageListItem key={index}>
					<img src={item.src} alt={item.alt} />
					{/* <ImageListItemBar
						title={item.title}
						subtitle={<span>by: {item.author}</span>}
						actionIcon={
							<IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
								<Information />
							</IconButton>
						}
					/> */}
				</ImageListItem>
				))}
			</ImageList>
			<Button component={RouterLink} to={GALLERY} variant="contained" color="primary" className={classes.btn}>View Gallery</Button>
		</section>
	);
};

export default ImageGallery;