const calcAverage = (...scores) => 
    scores.reduce((total, score) => total + score, 0) / scores.length;

const avgDolhins = calcAverage([44, 23, 71]);
    
const avgKoalas = calcAverage([65, 54, 49]);

const checkWinner = (avgDolhins, avgKoalas) => {
    console.log(avgDolhins > avgKoalas ? 'Dolphins win' : 'Koalas win');
};

checkWinner(avgDolhins, avgKoalas);