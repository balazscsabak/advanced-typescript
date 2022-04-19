import {
	Project,
	TextLayer,
	ImageLayer,
	LayerType,
	Size,
	TextMeta,
	ImageMeta,
} from './types';
import { render } from './render';

const projectSize: Size = {
	width: 512,
	height: 250,
};

const textLayer: TextLayer = {
	type: LayerType.Text,
	maxWidth: 1000,
	position: { x: 128, y: 208 },
	color: '#e8166d',
	id: '10',
	rotation: 0,
	text: 'Advanced TypeScript',
	fontSize: '20px',
};

const imageLayer: ImageLayer = {
	type: LayerType.Image,

	position: { x: 0, y: 0 },
	id: '20',
	rotation: 0,
	src: 'ps-dark.png',
	maxBounds: { width: projectSize.width },
};

const project: Project = {
	layers: [imageLayer, textLayer],
	size: projectSize,
};

function setMeta(layer: ImageLayer, meta: ImageMeta): void;
function setMeta(layer: TextLayer, meta: TextMeta): void;
function setMeta(layer: ImageLayer | TextLayer, meta: TextMeta | ImageMeta) {
	layer.meta = meta;
}

// setMeta(imageLayer, {
//   fontFoundry: 'TEDXT',
//   licenseExpiration: '2021'
// });

setMeta(imageLayer, {
	origin: 'download',
	format: 'jpg',
});

render(project);
