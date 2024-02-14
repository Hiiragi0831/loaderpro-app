import {uploadFile, uploadImageDrop, uploadImage, uploadFileImg} from './js/init-upload';

const init = () => {
	uploadImage();
	uploadFile();
	document.querySelectorAll('[data-upload="img-drop"]').forEach((i) => {
		uploadImageDrop(i);
	});
	document.querySelectorAll('[data-upload="file-img"]').forEach((i) => {
		uploadFileImg(i);
	});
	// uploadFileDrop();
	// uploadFileDropPreview();
};

export default {
	init,
};
