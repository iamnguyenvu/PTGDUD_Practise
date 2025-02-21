const CalculateBMI = (mass, height) => mass / (height ** 2);

const mark = {
    mass: 95,
    height: 188
};

const john = {
    mass: 85,
    height: 176
};

console.log(CalculateBMI(mark.mass, mark.height) > CalculateBMI(john.mass, john.height) ? 
    "John's BMI is higher than Mark's!" : "Mark's BMI is higher than John's!");
