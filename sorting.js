// function bubbleSort(array) {
//   let n = array.length;
//   //   for (let j = 0; j < n; j++) {
//   //     for (let index in array) {
//   //       let temp = 0;
//   //       if (array[i] > array[i + 1]) {
//   //         temp = array[i + 1];
//   //         array[i + 1] = array[i];
//   //         array[i] = temp;
//   //       }
//   //     }
//   //   }

// //   for (let i = 0; i < n; i++) {
// //     let minIndex = i;
// //     for (let j = i; j < n; j++) {
// //       minIndex = (array[minIndex] > array[j]) ? j : minIndex;
// //     }
// //     if (minIndex != i) {
// //       let temp = array[i];
// //       array[i] = array[minIndex];
// //       array[minIndex] = temp;
// //     }
// //   }

//     // let a = array.splice(3,1)
//     // console.log(a);

//     for(let i = 0; i < n-1; i++) {
//         let temp = array.splice(i+1,1)
//         for(let j = 0;j < n-1; j++) {
//             if(array[j] > temp[0]) {
//                 // console.log(j);
//                 array.splice(j,0,temp[0])
//                 break;
//             } 
//             // array.splice(j+1,0,temp[0])
//         }
//         // console.log(i,temp);
//         // console.log(array);
//         if(array.length < n) {
//             array.splice(i+1,0,temp[0])
//         }
//         console.log(array);
//     }
//   console.log(array);
//   return array;
// }

// const ARRAY = [4, 2, 3, 1, 9, 6, 8, 7];

// bubbleSort(ARRAY);