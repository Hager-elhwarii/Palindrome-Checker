function palindrome(str) {

    // removing all of non-alphanumeric characters using replace() method
    let newStr = str.replace(/ |[_,./)(:-]/g,'').toLowerCase();
  
    // changing the string to an array using split() method
    let firstArr = newStr.split('') 
    
    // reversing the arr using unshift() method 
    let reversedArr = []
     firstArr.map(ele=> {
     return  reversedArr.unshift(ele)
     })
  
     // comparing the two arrays using the strict opreator and
     // join() method to convert them to string
     // then the function will return a Boolean
  
     if(firstArr.join('') === reversedArr.join('')){
       console.log('true')
       return true;
     }
       return false;
  }
  
  palindrome("0_0 (: /-\ :) 0-0");