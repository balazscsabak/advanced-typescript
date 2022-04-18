export type Point = {
	x: number;
	y: number;
};

export type ReadOnlyPoints = {
	readonly // readonly [Key in '_x' | '_y']: number;
	[Key in keyof Point]: Point[Key];
};

export type ReadOnly<T> = {
	readonly [Key in keyof T]: T[Key];
};

export const readonlyField: ReadOnlyPoints = {
	// _y: 1,
	// _x: 2,
	x: 10,
	y: 11,
};

const readonlyField2: ReadOnly<Point> = {
	x: 1,
	y: 2,
};

const test: Readonly<Point> = {
	x: 1,
	y: 2,
};
