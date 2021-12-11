var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	city: 'Istanbul',
	introduce: function () {
		console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
	},
};

var p = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	introduce: (p) => {
		return `My name is ${p.name} ${p.surname}, I'm ${p.age} yo.`;
	},
};
person.introduce()
console.log(person1.introduce());