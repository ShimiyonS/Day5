//Print the odd number in given array;
//arrow function

var oodnum = (arr) =>{
    let valu1 =[];
    for (let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            valu1.push(arr[i]);
        }
    }return valu1;
}
console.log(oodnum([107,22,32,38,44,55,65]));


//2.all the string to titles caps in string array

//arrow function
var no2 = (arr1)=>{
    arr2 = arr1.toLowerCase().split(" ").map(function(word){
    return word.replace(word[0], word[0].toUpperCase());
    })
    return arr2.join(" ");
}
console.log(no2("i am the tollest boy"));



//3.summ of all the number in the array
//arrow function
var sum = (arrys)=>{
    let shi =[];
    let result = arrys.reduce(function(x,y) {return x+y;        
    });
    shi.push(result)
    console.log(shi);
}
sum([2,3,4,5,6]);


// Return all prime numbers in an array:
let arr3=[1,2,3,4,5,6,7,8,9,10];
let prime_number=(array)=>{                       
    let result=[];
    for(let v of array){
        let flag=true;
        if(v>1){
            for(let i=2;i<v;i++){
                if(v%2===0){
                    flag=false;
                    break;
                }
            }
        }(flag)? result.push(v):false;      
      }return result;
}
let resultvbl=prime_number(arr3);
console.log(`Prime numbers in an array : [${resultvbl}]`); 


//Return all palindromes in an array:
let arr4=["did","asddsa","dkdd",123321,121,1234];
let palindrome=(array)=>{                                
    let res1=[];
    for(let v of array){                             
        v=String(v);
        let l=v.length;
        let tem="";
        for(i=l-1;i>=0;i--){                              
            tem+=v[i]
            // console.log(tem);
        }v===tem? res1.push(v):false;
    }
   return res1;
};
let z=palindrome(arr4);                              
console.log(`Palindrome array is ; [${z}]`);
//Palindrome array is ; [did,asddsa,123321,121]