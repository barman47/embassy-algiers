import { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import Gallery from 'react-grid-gallery';

import Layout from '../../components/layout';
import { storage } from '../../firebase';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(8, 0)
	}
}));

const ImageGallery = () => {
	const classes = useStyles();

	const theme = useTheme();
	const [images, setImages] = useState([]);

	useEffect(() => {
		getFiles();
	}, []);

	const getFiles = async() => {
		const listRef = ref(storage, '');
		let url;
		listAll(listRef)
			.then((res) => {
				res.prefixes.forEach((folderRef) => {
				// All the prefixes under listRef.
				// You may call listAll() recursively on them.
				});
				res.items.forEach(async (itemRef) => {
					url = await await getDownloadURL(itemRef);
					setImages((images) => setImages([...images, {
						src: url,
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
		<Layout title="Gallery">
			<Box component="section" className={classes.root}>
				<Typography variant="h4" align="center" style={{ marginTop: theme.spacing(10) }}>Photo Gallery</Typography>
				<Gallery images={images} />
				{/* {images.map((image, key) => (
					<img key={key} src={image} alt="Gallery" style={{ width: '100%' }} />
				))} */}
			</Box>
		</Layout>
	);
};

export default ImageGallery;