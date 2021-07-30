// // // // function dec2bin(number) {
// // // //     let cociente = 0;
// // // //     let resto = [];
// // // //     let resultado = [];

// // // //     while (number) {
// // // //         cociente = parseInt(number / 2);
// // // //         resto.push(number % 2);
// // // //         number = cociente;
// // // //     }
// // // //     for (let i = resto.length - 1; i >= 0; i--) {
// // // //         resultado.push(resto[i]); 
// // // //     }
// // // //     return Number(resultado[resultado.length - 4])
// // // // }

// // // // console.log(dec2bin(77))

// // // // // function convertToBinary(number){
// // // // //     if (number > 0) {
// // // // //         return convertToBinary( parseInt(number / 2) ) + (number % 2)
// // // // //     };
// // // // //     return '';
// // // // // }
// // // // // console.log(convertToBinary(32))

// // // function gerarSenha(string1, string2){
// // //     let maior
// // //     if(string1.length > string2.length){
// // //         maior = string1
// // //     }else{
// // //         maior = string2
// // //     }
// // //     const newPassword = []
// // //     for(var c = 0; c < maior.length; c++){
// // //         newPassword.push(string1.split('')[c])
// // //         newPassword.push(string2.split('')[c])
// // //     }
// // //     return newPassword.join('')
// // // }
// // // console.log(gerarSenha('abc', 'def'))

// // function removeNodes(listHead, x) {
// //     // Write your code here
// //     let currentNode = listHead;

// //   while(currentNode !== null && currentNode.next !== null) {
// //     let next = currentNode.next;
// //     while (next !== null && next.value > x) {
// //       next = next.next
// //     }
// //     currentNode.next = next
// //     if(currentNode.next === null) {
// //       break;
// //     }
// //   }
// //   return currentNode
// // }
// // console.log(removeNodes(1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, 6))

// // let currentNode = listHead;

// //   while(currentNode !== null && currentNode.next !== null) {
// //     let next = currentNode.next;
// //     while (next !== null && next.value > x) {
// //       next = next.next
// //     }
// //     currentNode.next = next
// //     if(currentNode.next === null) {
// //       break;
// //     }
// //   }
// //   return currentNode





// //   if (listHead == null)
// //             return null;
// //         if (listHead.data > x && listHead.next == null)
// //             return null;
// //         SinglyLinkedListNode curr = listHead;
// //         SinglyLinkedListNode prev = null;
// //         while (curr !=null && curr.data > x) {
// //             prev = curr;
// //             curr = curr.next;
// //         }

// //         if (prev !=null) {
// //             prev.next = null;
// //         }
// //         SinglyLinkedListNode newHead = curr;

// //         while (curr.next !=null) {
// //             if (curr.next.data > x) {
// //                 curr.next = curr.next.next;
// //             } else {
// //                 curr = curr.next;
// //             }
// //         }
// //         return newHead;

// function braces(values) {
//     let tickets = []
//     let result
//     values.split('').map(value => {
//         if(value.length%2 == 0){
//             tickets.push(true)
//         }
//     })
//     for(var c = 0; c < tickets.length; c++){
//         if(tickets[c] == true){
//             result = 'YES'
//         } else {
//             result = 'NO'
//         }
//     }
//     return result
// }
// console.log(braces('{}[]()'))