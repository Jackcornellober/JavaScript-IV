// CODE here for your Lambda Classes

class Person {
    constructor (attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`)
    }
}

const robertDowneyJunior = new Person({
    name: 'Robert Downey Junior',
    age: 50,
    location: 'Hollywood'
}
)

class Instructor extends Person {
    constructor (instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    
    demo(subject) {
        console.log(`Today we are learning about ${subject}. Bet you didn't see that coming.`)
    }

    grade(student,subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }

    fateSeal(student) {
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }
        student.grade = student.grade + getRandomArbitrary(-5,5)
    }
}

const dLevy = new Instructor({
    name: 'Dan Levy',
    age: 25,
    location: 'Zoom',
    specialty: 'Cat Pictures',
    favLanguage: 'Javascript',
    catchPhrase: 'Lets make it a tight five'
}
)

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.grade = 50;
    }

    listSubjects() {
        let commArray = this.favSubjects.map(x => x + ',')
        commArray[commArray.length-1] = 'and ' + this.favSubjects[commArray.length-1] + '.'
        console.log(...commArray)
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }

    graduate() {
        if (this.grade >= 70) {
            console.log(`${this.name} graduated with a %${this.grade}!`)
        }
        else {
            console.log(`Keep studying ${this.name}, a %${this.grade} isn't good enough to graduate!}`)
        }
    }
}

const henry = new Student({
    name: 'Henry Leverette',
    age: 35,
    location: 'idk',
    previousBackground: 'Bounty Hunter',
    className: 'WEB20',
    favSubjects: ['Calculus','Quantam Physics','Reading Books']
}
)



class ProjectManager extends Instructor {
    constructor(PMAttr) {
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    }
    
    standUp(channel) {
        console.log(`${this.name} announces to ${channel} @channel standy times!`)
    }

    debugsCode(student,subject,message) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.${message}`)
    }
}

const aman = new ProjectManager ({
    name: 'Aman Singh',
    age: 28,
    location: 'Joisey',
    specialty: 'Beard Growing',
    favLanguage: 'Portugese',
    catchPhrase: `Wow that's awesome, great work.`,
    gradClassName: 'WEB20',
    favInstructor: 'Josh Knell'
})

robertDowneyJunior.speak();

dLevy.demo('calculus')

dLevy.grade(henry,'his calculus exam')

henry.listSubjects();

henry.PRAssignment(henry.favSubjects[2])

henry.sprintChallenge(henry.favSubjects[1])

aman.standUp('an empty channel')

aman.debugsCode(henry,henry.favSubjects[2],' (The book was upside down)')

console.log(henry.favSubjects)

console.log(henry.grade)

dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)
dLevy.fateSeal(henry)



henry.graduate();