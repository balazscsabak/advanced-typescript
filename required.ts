// export type Required<T> = {
// 	[P in keyof T]-?: T[P];
// };

type PartialPoint = {
	x?: number;
	y?: number;
};

type Point = Required<PartialPoint>;

const points: Point = {
	x: 10,
	y: 20,
};

///////////////
///////////////
///////////////

type CircleConfig = {
	color?: string;
	radius?: number;
};

class Circle {
	private config: Required<CircleConfig>;

	constructor(config: CircleConfig) {
		this.config = {
			color: config.color || 'red',
			radius: config.radius || 10,
		};
	}

	draw() {
		console.log(this.config.color);
		console.log(this.config.radius);
	}
}
