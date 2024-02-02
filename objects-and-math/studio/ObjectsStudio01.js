// Code your selectRandomEntry function here:

function randomSelection(arr) {
let index = Math.floor(Math.random()*arr.length);
  
return arr[index];
};
// function selectRandomEntry (arr) {
//   let newIdNumbers = [];
//   let index = Math.floor(Math.random() * arr.length);
//   newIdNumbers.push(arr[index]);
//   return arr.splice(index,1);
// }

let idNumbers = [291, 414, 503, 599, 796, 890];

// for (i=0; i < 3; i++){
//   console.log(selectRandomEntry(idNumbers));
// };

function randomUniqueNum(outputCount)
 {
   let result = [];
   while(result.length !== outputCount)
   {
      let random =randomSelection(idNumbers);
      if (result.length===0)
        result.push(random);
      else
        if (!result.includes(random))
          result.push(random);
   }
   return result;
 }

 console.log(randomUniqueNum(3));


// Code your buildCrewArray function here:


// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];


// Code your template literal and console.log statements:


for(let i = 0; i < 3; i++) {
  
}
//
