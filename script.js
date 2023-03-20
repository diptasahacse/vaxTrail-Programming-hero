let peopleArray = [
  {
    name: "A Saha",
    age: 21,
    temperature: 98,
  },
  {
    name: "B Saha",
    age: 24,
    temperature: 102,
  },
  {
    name: "C Saha",
    age: 20,
    temperature: 97,
  },
  {
    name: "D Saha",
    age: 45,
    temperature: 80,
  },
  {
    name: "E Saha",
    age: 45,
    temperature: 101,
  },
  {
    name: "F Saha",
    age: 56,
    temperature: 96,
  },
  {
    name: "G Saha",
    age: 30,
    temperature: 99,
  },
  {
    name: "H Saha",
    age: 20,
    temperature: 99,
  },
  {
    name: "I Saha",
    age: 34,
    temperature: 100,
  },
  {
    name: "J Saha",
    age: 36,
    temperature: 104,
  },
  {
    name: "K Saha",
    age: 25,
    temperature: 78,
  },
  {
    name: "L Saha",
    age: 46,
    temperature: 80,
  },
  {
    name: "M Saha",
    age: 40,
    temperature: 90,
  },
  {
    name: "N Saha",
    age: 35,
    temperature: 78,
  },
];

const vaxTrail = (personList) => {
  const initialState = [
    {
      A: [],
    },
    {
      B: [],
    },
    {
      C: [],
    },
    {
      D: [],
    },
  ];
  personList.forEach((person) => {
    // For A
    if (person.age >= 20 && person.age <= 30 && person.temperature < 100) {
      initialState.forEach((element) => {
        if (element.A) {
          element.A.push(person);
        }
      });
    }
    // For B
    if (person.age >= 31 && person.age <= 40 && person.temperature < 100) {
      initialState.forEach((element) => {
        if (element.B) {
          element.B.push(person);
        }
      });
    }
    // For C
    if (person.age >= 41 && person.age <= 50 && person.temperature < 100) {
      initialState.forEach((element) => {
        if (element.C) {
          element.C.push(person);
        }
      });
    }
    // For D
    if (person.temperature >= 100) {
      initialState.forEach((element) => {
        if (element.D) {
          element.D.push(person);
        }
      });
    }
  });

  // Let's sort according to even to odd number
  const getEvenSortedArray = (unsorted) => {
    const sortedEvenArray = unsorted.sort((a, b) => {
      if (a.age % 2 === 0 && b.age % 2 !== 0) {
        return -1;
      }
      if (a.age % 2 !== 0 && b.age % 2 === 0) {
        return 1;
      }
      return a.age - b.age;
    });

    return sortedEvenArray;
  };

  initialState.forEach((item) => {
    if (item.A) {
      item.A = getEvenSortedArray(item.A);
    }
    if (item.B) {
      item.B = getEvenSortedArray(item.B);
    }
    if (item.C) {
      item.C = getEvenSortedArray(item.C);
    }
    if (item.D) {
      item.D = getEvenSortedArray(item.D);
    }
  });

  return initialState;
};

console.log(vaxTrail(peopleArray));
