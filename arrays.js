const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

const inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
    { name: 'bananas',  type: 'fruit', quantity: 0 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 5 },
    { name: 'fish', type: 'meat', quantity: 22 }
  ];
//   const restock  = { restock: true };
// const sufficient = { restock: false };
const result1 = inventory.groupByToMap( ({ quantity }) => quantity < 6 ? restock : sufficient );
 console.log(result.get(restock));

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());

console.log(elements.join(''));

console.log(elements.join('-'));

const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1);
