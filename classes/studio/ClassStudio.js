//Declare a class called CrewCandidate with a constructor that 
//takes three parameters—name, mass, and scores. 
//Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
       this.name = name
       this.mass = mass
       this.scores = scores
    }

    addScore(newScore) {
        this.scores.push(newScore);
    }

    average() {
        let sumScores = 0;
        let ave = 0;
        for(let scores of this.scores) {
            sumScores += scores;
           // console.log(scores);
           // console.log(sumScores);
        }
        ave = Math.round((sumScores/this.scores.length)*10)/10;
        return ave;
    }

    status() {
        let ave = this.average();
        let result = "";
        if(ave >= 90) {
            result = "accepted";  
        } else if(ave >= 80) {
            result = "Reserve";
        } else if(ave >= 70) {
            result = "Probationary";
        } else {
            result = "Rejected";
        }
        
        return result;

    }
 }

 //let objectName = new ClassName(arguments);

 let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85,90]);

 let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);

 let gator = new CrewCandidate("Gator", 225, [75, 78, 62]);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

bubbaBear.addScore(83);
// console.log(bubbaBear.scores);

console.log(merryMaltese.average());

console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()} and has a status of ${bubbaBear.status()}.`);

console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()} and has a status of ${merryMaltese.status()}.`);

console.log(`${gator.name} earned an average test score of ${gator.average()} and has a status of ${gator.status()}.`);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. 
//How many tests will it take to reach Reserve status? 
//How many to reach Accepted? Remember, scores cannot exceed 100%.

while (gator.average() <= 90){
      gator.addScore(100);
      console.log(gator.average());
      console.log(gator.status());
  }