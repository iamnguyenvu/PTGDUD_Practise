const avgScore = (...scores) => 
    scores.reduce((total, score) => total + score, 0) / scores.length;

const Dolphins = [97, 112, 101];
    
const Koalas = [109, 95, 106];

console.log(avgScore(...Dolphins) > avgScore(...Koalas) ? 'Dolphins are the winning team'
    : (avgScore(...Dolphins) < avgScore(...Koalas)) ? 'Koalas are the winning team' : 'Draw');
