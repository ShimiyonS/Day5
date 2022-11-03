//Print the odd number in given array;
//anonymous function
var no1 = function (arr){
    let newno1 =[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 !== 0){
            newno1.push(arr[i]);
        }
    }return newno1;
}
console.log(no1([12,29,3,41,53,72,81,9,2]));;

//IIFE function

(function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 == 0){
            console.log(arr[i])
        }
    }
})
([1,2,3,4,5,6,11,22,212]);

//2.all the string to titles caps in string array

//anonymous function
var no2 = function(arr1){
    arr2 = arr1.toLowerCase().split(" ").map(function(word){
    return word.replace(word[0], word[0].toUpperCase());
    })
    return arr2.join(" ");
}
console.log(no2("i am the tollest boy"));


//iife Function
(function(arr1){ 
    aarr2 = arr1.toLowerCase().split(" ").map(function(word){
    return word.replace(word[0], word[0].toUpperCase())
    })
    let arr3 = aarr2.join(" ");
    console.log(arr3);
})
("i love you");



//3.summ of all the number in the array
//anonymous function

var sum = function(arrys){
    var valus = 0;
    for(let i=0;i<arrys.length;i++){
        valus = valus + arrys[i]
    }
    console.log(`sum of all the number in ${+valus}`);
}
sum([1,2,300,4,5,6]);

//iife function
(function(valu){
    sums = 0;
    for(let i=0;i<valu.length;i++){
        sums = sums + valu[i]
    }
    console.log(`sum of all the number in ${+sums}`);
})
([1,2,30])


//4.return the all the prime number in an array

//anonymous function
var num1 = function(array1){
    let sortArray =[];
    array1.forEach(num => {
        let face = 0;
        for(let i=0;i<=num;i++){    
        if(num%i ===0){
            face++}
        }
    if (face ===2){
        sortArray.push(num)
    }
    })
    console.log(sortArray);
}
num1([2,3,4,5,6,7,8])

//arrow Function
var num2 = (array1)=>{
    let sortArray =[];
    array1.forEach(num => {
        let face = 0;
        for(let i=0;i<=num;i++){    
        if(num%i ===0){
            face++}
        }
    if (face ===2){
        sortArray.push(num)
    }
    })
    console.log(sortArray);
}
num2([2,5,4,11,22,113]);

//IFFE Function
(function(array1){
    let sortArray =[];
    array1.forEach(num => {
        let face = 0;
        for(let i=0;i<=num;i++){    
        if(num%i ===0){
            face++}
        }
    if (face ===2){
        sortArray.push(num)
    }
    })
    console.log(sortArray);
})
([5,2,2,3,2,2]);

//Return all the palindromes in an array
//Annonymous functon:
let arr12=["did","asddsa","dkdd",123321,121,1234];
let reverse=function(num){
    let a=String(num).split("");
    let rev=[];
    let l=a.length;
    for(let i=l-1;i>=0;i--){                                  
        rev.push(a[i]);
    }
    rev=rev.join("");                                         
    return rev;
    }
    result1_arr=[];
    for(let v of arr12){
        v=String(v);                                           
        v==reverse(v)? result1_arr.push(v):false;
    }
console.log(result1_arr);

//IIEF function:
        let arr13=["did","asddsa","dkdd",123321,121,1234];
        console.log(
        (function(arr){
             result=[];
             for(let num of arr){                                    
             let a=String(num).split("")
             let rev=[];
             let l=a.length;
             for(let i=l-1;i>=0;i--){
                 rev.push(a[i]);
             }
             rev=rev.join("");
             a=a.join("")
             rev===a? result.push(rev):false;
        }   return result;
        })(arr13));
// result [ 'did', 'asddsa', '123321', '121' ]

//Median of two sorted arrays of same size:
//annonymous Function:
        let arr121=[2, 3, 5, 8]
        let arr222=[10, 12, 14, 16, 18, 20]
        let median=function(arr1,arr2){
             let arr_com=[...arr1,...arr2];                            
             arr_com.sort((a,b)=>a-b)                                  
             let len=arr_com.length;
             let arr_l=len/2;
             let result=arr_com[arr_l]+arr_com[arr_l-1];
             return result/2;
        }
        console.log(`Median for given two equal arrays are: ${median(arr121,arr222)}`);

//IIFE Function:
        let arr111=[2, 3, 5, 8];
        let arr221=[10, 12, 14, 16, 18, 20];
        console.log(`Median for given two equal arrays are: ${
        (function(arr1,arr2){
             let arr_com=[...arr1,...arr2];
             arr_com.sort((a,b)=>a-b);
             let len=arr_com.length;                                    
             let arr_l=len/2;
             let result=arr_com[arr_l]+arr_com[arr_l-1];
             return result/2;
        })(arr111,arr221)
        }`);
  //result is ====>  Median for given two equal arrays are: 11

//Remove duplicates from a array:
//Annonymous function:
        var arr_s = ["apple", "mango", "apple","orange", "mango", "mango"];
    
        let remove_duplicates=function(arr){
             let a=[];
             console.log([...new Set(arr)])                             
        }
        remove_duplicates(arr_s);

//IIPE Function:
        var arr_s1 = ["apple", "mango", "apple",
                "orange", "mango", "mango"];
        (function(arr){
             let a=[];
             console.log([...new Set(arr)])
        }(arr_s1));                                                 
//result is ====> [ 'apple', 'mango', 'orange' ]

//Rotate an array bye K times:
//Annonymous function:
        let arr10=["santa","monica","colombia","zimbabe","hutson"];
        let k1=5;
        let rotate_array=function(arr1,k){
             let arr=[...arr1];
             arr.push(arr.shift());
             for(let i=1;i<=k;i++){
             }
             return arr;
        };
        console.log(rotate_array(arr10,k1));                   

//IIFE Function:
        let arr100=["santa","monica","colombia","zimbabe","hutson"];
        let k=3;
        (function(arr1,k){
             let arr=[...arr1];                                    
             for(let i=1;i<=k;i++){
             arr.push(arr.shift());
             }
             console.log(arr);
        }(arr100,k));
// result is ====> [ 'zimbabe', 'hutson', 'santa', 'monica', 'colombia' ]