var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	city: 'Istanbul',
	introduce: function () {
		console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
	},
};

var pee = {
	name: 'Rumeysa a',
	surname: 'Turgut',
	age: 23,
	introduce: () => {
		return `My name is ${person.name} ${person.surname}, I'm ${person.age} yo.`;
	},
};
person.introduce()
console.log(pee.introduce());