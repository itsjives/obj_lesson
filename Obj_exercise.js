function findUniq(arr){
  var counterObj = {};

  for (var i = 0; i < arr.length; i++){
    if (counterObj[arr[i]]){
      counterObj[arr[i]] += 1;
      console.log(counterObj);

    } else {
      counterObj[arr[i]] = 1;
    }
  }
  for (var num in counterObj){
    if (counterObj[num] === 1){
      return num;
    }
  }
}

console.log(findUniq([1,1,1,3,4,4]))

var stuff = {
  thing : {
    thing1 : "snowboard",
    thing2 : "computer",
    thing3 : "mic"
  },
  food : {
    food1 : "tacos",
    food2 : "pizza",
    food3 : "pasta"
  }
}
console.log(stuff.thing.thing1)

var random = {
  stuff: [{
    name: "stuffed animal",
    isSoft: true
  }, {
    name: "smartphone",
    isSoft: false,
    ownedBy: {
      name: "David",
      age: 26,
      address: "123 Sesame Street"
    }
  }],
  blue: null,
  undefined: "I've got myself a lovely bunch of coconuts"
}

// for (var i = 0; i < 5; i++){
//   console.log(i);
// }
var smartphone = random["stuff"][1];
for (var key in smartphone){
  console.log(smartphone["name"]);
}

var places = {
    northAmerica : [{
      countryOne : "Canada",
      countryTwo : "USA",
      countryThree : "Mexico"
    }, {
    europe : {
          countryOne : "Italy",
          countryTwo : "Poland",
          countryThree : "Netherlands"
        }

    }]

}
var country = places["northAmerica"][0];

console.log(country["countryOne"])

var classrooms = [{
    teacher: {
      name: "John Keating",
      subject: "Literature",
      age: 57
    },
    students: [{
      name: "John",
      age: 32
    },
    {
      name: "Suzy",
      age: 29
    },
    {
      name: "Jill",
      age: 44
    },
    {
      name: "Joe",
      age: 20
    }]
  },{
    teacher: {
      name: "Lillian Beauregard",
      subject: "Math",
      age: 74
    },
    students: [{
      name: "Johnny",
      age: 14
    },
    {
      name: "Suzie",
      age: 18
    },
    {
      name: "Jo",
      age: 22
    }]
  },{
    teacher: {
      name: "Mr. Schmidt",
      subject: "Literature",
      age: 50
    },
    students: [{
      name: "Bob",
      age: 32
    },
    {
      name: "George",
      age: 46
    }]
  }]

//Average student age
//CHANGE TO LOOP

function studentAge(myObj){
  var ageArr = []
  for (var i = 0; i < myObj.length; i++){
    for (var key in myObj[i]['students']){
      ageArr.push(myObj[i]['students'][key]['age'])
    }
  }

  var ageSum = 0;
  for (var j = 0; j < ageArr.length; j++){
    // console.log(ageArr[j])
    ageSum += ageArr[j]

  }

  return ageSum / ageArr.length
}
console.log(studentAge(classrooms))


var students = []
var teachers = []
var litStudents = []
for (var i = 0; i < classrooms.length; i++){
  students = students.concat(classrooms[i].students)
  teachers.push(classrooms[i].teacher)
  if (classrooms[i].teacher.subject ==="Literature") litStudents = litStudents.concat(classrooms[i].students)
}

console.log(students.reduce(function(total, curr){return total + curr.age}, 0)/students.length);
console.log(teachers.reduce(function(total, curr){return total + curr.age}, 0)/teachers.length);
console.log(litStudents.length)
