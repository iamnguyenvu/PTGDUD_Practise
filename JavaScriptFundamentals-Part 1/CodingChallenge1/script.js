const CalculateBMI = (mass, height) => mass / (height ** 2);

const mark = {
    mass: 95,
    height: 188
};

const john = {
    mass: 85,
    height: 176
};

const markHigherBMI = 
    CalculateBMI(mark.mass, mark.height) > CalculateBMI(john.mass, john.height);

console.log(markHigherBMI);

