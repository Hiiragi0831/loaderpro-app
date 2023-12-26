import {uploadFile, uploadImageDrop} from './js/init-upload';

const init = () => {
	// uploadImage();
	uploadFile();
	document.querySelectorAll('[data-upload="img-drop"]').forEach((i) => {
		uploadImageDrop(i);
	});
	// uploadFileDrop();
	// uploadFileDropPreview();
};

export default {
	init,
};
