export interface Point2D {
	x: number;
	y: number;
}

export interface Point3D extends Point2D {
	z: number;
}

export const point: Point3D = {
	x: 1,
	y: 2,
	z: 3,
};

export class Example implements Point3D {
	x = 1;
	y = 2;
	z = 3;
}

const example = new Example();
example.y = 10;

/////////////
/////////////
/////////////

export type TPoint2D = {
	x: number;
	y: number;
};

export type TPoint3D = TPoint2D & {
	z: number;
};

export const point2: TPoint3D = {
	x: 1,
	y: 2,
	z: 3,
};

export class Example2 implements Point3D {
	x = 1;
	y = 2;
	z = 3;
}

const example2 = new Example2();

/////////////
/////////////
/////////////

export interface Request {
	body: any;
}

export interface Request {
	json: any;
}

function handleRequest(req: Request) {
	console.log(req.body);
	console.log(req.json);
}
