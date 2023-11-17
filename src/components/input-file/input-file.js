import {uploadFile, uploadFileDrop, uploadFileDropPreview, uploadImage, uploadImageDrop} from './js/init-upload';

const init = () => {
	uploadImage();
	uploadFile();
	uploadImageDrop();
	uploadFileDrop();
	uploadFileDropPreview();
};

export default {
	init,
};
