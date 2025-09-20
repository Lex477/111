const arr1 = [5 , 10, 2, 3, 12, 3, 3];
const target = 8;
let p = [];
let arr2 = [];
let tmp = 0;
const getTargetInd = (arr, target) => {
    for ( let i= 0 ; i < arr.length; i++) { 
        let j = target-arr[i];
        arr2 = arr;
        tmp = arr[i];
        arr2[i] = null; 
       // console.log(arr2);
       // console.log(arr);
        if (arr2.includes(j) ) { 

            p.push(i)    
            }
        arr2[i] = tmp;    
        } 
    return p
    } 

console.log(getTargetInd(arr1, target));