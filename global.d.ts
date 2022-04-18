export {};

declare global {
	interface Employee {
		id: number;
		name: string;
		salary: number;
	}

	type Personee = {
		name: string;
		age: number;
	};
}
