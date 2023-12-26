import {Upload} from './upload.js';

const uploadImageBlock = document.querySelector('[data-upload="img"]');
const uploadIFileBlock = document.querySelector('[data-upload="file"]');
const uploadFileDropBlock = document.querySelector('[data-upload="file-drop"]');
const uploadFileDropPreviewBlock = document.querySelector('[data-upload="file-drop-preview"]');

export const uploadImage = () => new Upload(uploadImageBlock, {
	uploadLength: 4,
	dropZone: true,
	preview: true,
	previewImg: true,
	maxFileSize: 1048576,
	accept: ['.png', '.jpg', '.jpeg', '.webp'],
	iconFormat: {
		'png': '/assets/images/file/icon-file-png.png',
		'jpg': '/assets/images/file/icon-file-jpg.png',
		'jpeg': '/assets/images/file/icon-file-jpg.png',
		'webp': '/assets/images/file/icon-file-webp.png',
		'default': '/assets/images/file/icon-file-docs.png',
	},
	fileInfo: {
		fileName: true,
		fileSize: true,
	},
	emptyMessage: 'Добавление файла обязательно',
	errorMessage: 'Выделенные файлы превышают максимальный размер',
});

export const uploadFile = () => new Upload(uploadIFileBlock, {
	uploadLength: 1,
	preview: true,
	maxFullSize: 1048576,
	accept: ['.xls', '.xlsx'],
	iconFormat: {
		'xlsx': '/assets/images/file/icon-file-xlsx.png',
		'xls': '/assets/images/file/icon-file-xlsx.png',
		'docx': '/assets/images/file/icon-file-docx.png',
		'pdf': '/assets/images/file/icon-file-pdf.png',
		'default': '/assets/images/file/icon-file-xlsx.png',
	},
	fileInfo: {
		fileName: true,
		fileSize: true,
	},
	emptyMessage: 'Добавление файла обязательно',
	errorMessage: 'Общий размер файлов слишком большой',
});

export const uploadImageDrop = (selector) => new Upload(selector, {
	uploadLength: 4,
	dropZone: true,
	previewImg: true,
	maxFileSize: 307200,
	accept: ['.png', '.jpg', '.jpeg', '.webp'],
	iconFormat: {
		'png': '/assets/images/file/icon-file-png.png',
		'jpg': '/assets/images/file/icon-file-jpg.png',
		'jpeg': '/assets/images/file/icon-file-jpg.png',
		'webp': '/assets/images/file/icon-file-webp.png',
		'default': '/assets/images/file/icon-file-docs.png',
	},
	fileInfo: {
		fileName: true,
		fileSize: true,
	},
	// emptyMessage: 'Добавление файла обязательно',
	errorMessage: 'Выделенные файлы превышают максимальный размер',
});

export const uploadFileDrop = () => new Upload(uploadFileDropBlock, {
	uploadLength: 4,
	dropZone: true,
	maxFileSize: 1048576,
	accept: ['.pdf', '.docx', '.xlsx'],
	iconFormat: {
		'xlsx': '/assets/images/file/icon-file-xlsx.png',
		'docx': '/assets/images/file/icon-file-docx.png',
		'pdf': '/assets/images/file/icon-file-pdf.png',
		'default': '/assets/images/file/icon-file-docx.png',
	},
	fileInfo: {
		fileName: true,
		fileSize: true,
	},
	emptyMessage: 'Добавление файла обязательно',
	errorMessage: 'Выделенные файлы превышают максимальный размер',
});

export const uploadFileDropPreview = () => new Upload(uploadFileDropPreviewBlock, {
	uploadLength: 4,
	dropZone: true,
	preview: true,
	maxFileSize: 1048576,
	accept: ['.pdf', '.docx', '.xlsx'],
	iconFormat: {
		'xlsx': '/assets/images/file/icon-file-xlsx.png',
		'docx': '/assets/images/file/icon-file-docx.png',
		'pdf': '/assets/images/file/icon-file-pdf.png',
		'default': '/assets/images/file/icon-file-docx.png',
	},
	fileInfo: {
		fileName: true,
		fileSize: true,
	},
	emptyMessage: 'Добавление файла обязательно',
	errorMessage: 'Выделенные файлы превышают максимальный размер',
});
