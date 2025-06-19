// for(let i=0; i<10; i++){
//     const variable=i;
//     console.log(i);
// }

// for(let i=0; i<=10; i++){
//     const v=i;
//     if(i==5){
//         console.log('this no is five');

//     }
//     console.log(i);
// }

// for(let i=0; i<=100; i++){
//     if(i==20){
//         console.log('20 is best');
//     }
//     if(i==40){
//         console.log('40 is best');
//     }
//     if(i==60){
//         console.log('60 is best');
//     }
//     console.log(i);
// }

for(let i=0; i<=10;i++){
    console.log(`outer loop value:${i}`);
    for(let j=0; j<10; j++){
        console.log(`inner loop value:${j} and inner loop:${i}`);
    }
}