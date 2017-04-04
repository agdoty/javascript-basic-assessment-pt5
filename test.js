/////////////
// Num. 9  //////////////////////////////////////////////////////////
// Create a function called isDivisibleByThree that takes in an    //
// array as a parameter. The function will return the array of all //
// numbers divisible by three.                                     //
/////////////////////////////////////////////////////////////////////

function isDivisibleByThree(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 3 === 0){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

/////////////
// Num. 10 //////////////////////////////////////////////////////////
// Create a function called lollipopFactory                        //
// it will take in three parameters, wrapperStatus(string),        //
// Flavor(number), and roundness(boolean), in that order.          //
//                                                                 //
    function lollipopFactory(str, num, bool){
// flavor 9 or above, roundness true, and wrapperStatus of 'good'  //
// return "a perfect lolli!"                                       //
      if(num >= 9 && bool === true && str === "good"){
        return "a perfect lolli!";
      }
// flavor 9 or above, roundness false, and wrapperStatus of 'loose'//
// return "eh.. passable"                                          //
      if(num >= 9 && bool === false && str === "loose"){
        return "eh.. passable";
      }
// flavor 5-8, roundess, true, and wrapperStatus of 'good'         //
// return "good enough"                                            //
      if(num >= 5 && num <= 8 && bool === true && str === "good"){
        return "good enough";
      }
//                                                                 //
// flavor 1-4, roundness false, and wrapperStatus of 'none'        //
// return "i wouldn't even give this to my dog"                    //
      if(num <= 4 && bool === false && str === "none"){
        return "i wouldn't even give this to my dog";
      }
   }
//                                                                 //
/////////////////////////////////////////////////////////////////////
