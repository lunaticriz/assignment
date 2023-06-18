/**
 * 3. Please write the code for below question:-
 */
// Sample Input

function groupObjects(inputArr) {
  let uniqueCategObj = {};
  inputArr.forEach((obj) => {
    let key = `${obj.category}_${obj.year}`;
    if (typeof uniqueCategObj[key] === "object") {
      uniqueCategObj[key].push(obj);
    } else {
      uniqueCategObj[key] = [obj];
    }
  });
  let resArr = [];
  for (let uniqueKeyArr in uniqueCategObj) {
    let categoryYearArr = uniqueKeyArr.split("_");
    let category = categoryYearArr[0];
    let year = categoryYearArr[1];
    let tempObj = {};
    tempObj["category"] = category;
    tempObj["year"] = year;
    tempObj["winners"] = [];
    let researchFreq = {};
    uniqueCategObj[uniqueKeyArr].forEach((person) => {
      researchFreq[person.research] = researchFreq[person.research]
        ? researchFreq[person.research] + 1
        : 1;
    });
    let equalPercentage = 1 / Object.keys(researchFreq).length;
    tempObj["winners"] = uniqueCategObj[uniqueKeyArr].map((person) => {
      let obj = {};
      obj["name"] = person.name;
      obj["share"] =
        researchFreq[person.research] == 1
          ? equalPercentage
          : equalPercentage / researchFreq[person.research];
      return obj;
    });
    resArr.push(tempObj);
  }
  return resArr;
}
const awards = [
  {
    name: "James Peebles",
    category: "Physics",
    research: "Theoretical discoveries in physical cosmology",
    year: 2019,
  },
  {
    name: "Michel Mayor",
    category: "Physics",
    research: "Discovery of an exoplanet orbiting a solar-type star",
    year: 2019,
  },
  {
    name: "Didier Queloz",
    category: "Physics",
    research: "Discovery of an exoplanet orbiting a solar-type star",
    year: 2019,
  },
  {
    name: "John B. Goodenough",
    category: "Chemistry",
    research: "Development of lithium-ion batteries",
    year: 2019,
  },
  {
    name: "M. Stanley Whittingham",
    category: "Chemistry",
    research: "Development of lithium-ion batteries",
    year: 2019,
  },
  {
    name: "Akira Yoshino",
    category: "Chemistry",
    research: "Development of lithium-ion batteries",
    year: 2019,
  },
  {
    name: "Arthur Ashkin",
    category: "Physics",
    research: "Optical tweezers and their application to biological systems",
    year: 2018,
  },
  {
    name: "Gerard Mourou",
    category: "Physics",
    research: "Method of generating high-intensity, ultra-short optical pulses",
    year: 2018,
  },
  {
    name: "Donna Strickland",
    category: "Physics",
    research: "Method of generating high-intensity, ultra-short optical pulses",
    year: 2018,
  },
  {
    name: "Frances H. Arnold",
    category: "Chemistry",
    research: "Directed evolution of enzymes",
    year: 2018,
  },
  {
    name: "George P. Smith",
    category: "Chemistry",
    research: "Phage display of peptides and antibodies.",
    year: 2018,
  },

  {
    name: "Sir Gregory P. Winter",
    category: "Chemistry",
    research: "Phage display of peptides and antibodies.",
    year: 2018,
  },
];
console.log(groupObjects(awards));

//Output
/*
[
  {
    category: "Physics",
    year: "2019",
    winners: [
      {
        name: "James Peebles",
        share: 0.5,
      },
      {
        name: "Michel Mayor",
        share: 0.25,
      },
      {
        name: "Didier Queloz",
        share: 0.25,
      },
    ],
  },
  {
    category: "Chemistry",
    year: "2019",
    winners: [
      {
        name: "John B. Goodenough",
        share: 0.3333333333333333,
      },
      {
        name: "M. Stanley Whittingham",
        share: 0.3333333333333333,
      },
      {
        name: "Akira Yoshino",
        share: 0.3333333333333333,
      },
    ],
  },
  {
    category: "Physics",
    year: "2018",
    winners: [
      {
        name: "Arthur Ashkin",
        share: 0.5,
      },
      {
        name: "Gerard Mourou",
        share: 0.25,
      },
      {
        name: "Donna Strickland",
        share: 0.25,
      },
    ],
  },
  {
    category: "Chemistry",
    year: "2018",
    winners: [
      {
        name: "Frances H. Arnold",
        share: 0.5,
      },
      {
        name: "George P. Smith",
        share: 0.25,
      },
      {
        name: "Sir Gregory P. Winter",
        share: 0.25,
      },
    ],
  },
];
*/
