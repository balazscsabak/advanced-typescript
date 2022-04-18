type Person = {
	name: string;
	age: number;
	location: string;
};

type PersonKeys = keyof Person;

const personKey1: PersonKeys = 'location';
const personKey2: PersonKeys = 'age';
const personKey3: PersonKeys = 'name';

function logPersonAccess(object: Person, key: keyof Person): Person {
	return {
		name: `${object.name}-001`,
		age: object.age,
		location: `${object.location}-HU`,
	};
}

const personOne: Person = logPersonAccess(
	{
		name: 'John Doe',
		age: 23,
		location: 'King street 8.',
	},
	'age'
);

console.log(personOne);

function logAccess<T>(object: T, key: keyof T): T {
	console.log(object[key]);

	return object;
}

const personTwo = logAccess(
	{
		firstName: 'John',
		lastName: 'Doe',
		age: 20,
	},
	'age'
);

personTwo.firstName = 'Johnny';

console.log(personTwo);
