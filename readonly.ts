function makeReadonly<T>(object: T): Readonly<T> {
	return Object.freeze({ ...object });
}

const editablePoint = {
	x: 10,
	y: 20,
};
editablePoint.x = 20;

const readonlyPoints = makeReadonly(editablePoint);
// readonlyPoints.x = 30  ERROR
