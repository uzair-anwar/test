// // function multiply(multiplier, ...theArgs) {
// //     return theArgs.map(x => multiplier * x);
// //   }
  
// //   var arr = multiply(2, 1, 2, 3);
// //   console.log(arr); // [2, 4, 6]
  
// //   let sym1 = Symbol()
// // let sym2 = Symbol('foo')
// // let sym3 = Symbol('foo')
// // console.log(sym2)

// // const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
// //  const newArr = numbers.map((num)=>Math.sqrt(num));
// //  console.log(newArr)
// // console.log(numbers.map((num)=>Math.sqrt(num)));

// const obj= [{ key:1,value:10},
// {key:2,value:20},
// {key:3,value:30}]

// const reform=obj.map(({key,value})=>({[key]:value}))
// console.log(reform)

// const map=Array.prototype.map;
// const charCodes = map.call('Hello World',(x)=>x.charCodeAt(0));
// console.log(charCodes)


// let cus1={name:"uzair",email:"uzairch688@gmail.com"};

// let cus2={name:"umair",email:"uzairch688@gmail.com"};

// function greeting(text){
//   console.log(`${text} ${this.name}`);
// }

// function greeting1(text,text1){
//   console.log(`${text} ${this.name} ${text1}`);
// }

// console.log(greeting.call(cus1,'Heloo'))
// console.log(greeting.call(cus2,'Heloo'))

// console.log(greeting1.call(cus1,['Heloo','How are you']))
// console.log(greeting1.call(cus2,'Heloo'))


// console.log('A');

// setTimeout(() => {
// 	console.log('B');
// }, 0);
	
// console.log('C');


// function a(){
//   let ab = 10;
//   {
//     let ac = 20;
//   }
//   console.log(ab)
// }
// //console.log(ab)
// a();

const getMax=(a,b)=>Math.max(a,b);
console.log([1,100].reduce(getMax));