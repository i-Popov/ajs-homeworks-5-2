import Character from './Character';
// eslint-disable-next-line
console.log('worked');

const bowman = new Character('Mike', 'Bowman', 100, 1, 25, 25);
// eslint-disable-next-line
console.log(bowman);

bowman.levelUp();
// eslint-disable-next-line
console.log(bowman.level);
bowman.damage(20);
// eslint-disable-next-line
console.log(bowman.health);
