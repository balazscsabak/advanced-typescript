export type Point = {
	readonly x: number;
	y?: number;
};

// [P in keyof T]: T[P];
// +readonly [P in keyof T]: T[P];
// +readonly [P in keyof T]?: T[P];
// +readonly [P in keyof T]-?: T[P];
export type Mapped<T> = {
	+readonly [P in keyof T]-?: T[P];
};

export type Result = Mapped<Point>;

/////////////
/////////////
/////////////

export class State<T> {
	constructor(public current: T) {}
	update(next: Partial<T>) {
		this.current = { ...this.current, ...next };
	}
}

const state = new State({ x: 1, y: 2 });
state.update({ x: 2, y: 3 });
state.update({ y: 3 });
state.update({ x: 3 });
