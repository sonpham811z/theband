var courses = [
	{
		id : 0,
		name : "javascript",
		coin: 0
	},

	{
		id : 1,
		name : "php",
		coin:0
	},

	{
		id : 2,
		name : "python",
		coin : 0
	},

	{
		id : 3,
		name : "c++",
		coin : 0
	}
];

function hello(course)
{
	return {
   		id: course.id,
   		name :`Khoa hoc ${course.name}`,
   		coin :course.coin,
   		text: `Gia ${course.coin}`
   };
}
var newCourse = courses.map(hello);

console.log(newCourse);

