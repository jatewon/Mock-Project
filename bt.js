
1 function convertToF(celsius) {
  let fahrenheit =celsius*(9/5) + 32;
  return fahrenheit;
}
dao nguoc chuoi vd hello thanh olleh
2 function reverseString(str) {
  var daonguoc = "";
  for(let i = str.length-1;i>=0;i-- )
  {
    daonguoc+=str[i];
  }
  return daonguoc;
}
3 giai thua
reverseString("hello");
function factorialize(num) {
  for(var giaithua =1;num>0;num--)
  {
    giaithua*=num;
  }
  return giaithua;

}
10  boo who
function booWho(bool) {
   if(bool === false){
    return true;
  }
  return bool === true;
}

booWho(null);


factorialize(7);

9function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
8
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

4
function findLongestWordLength(str) {
  let a = str.split(' ');// tao mang a moi = rong
  let e = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i].length > e) {
      e = a[i].length;
    }
  }

  return e;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
5
function largestOfFour(arr) {
 let a = [];
  for (let i = 0; i < arr.length; i++) {
    let so = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > so) {
        so = arr[i][j];
      }
    }
    a[i] = so;
  }

  return a;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
6function confirmEnding(str, target) {
  var targetLength = target.length;
var sub = str.slice(-targetLength); 
if(sub === target){
return true;
}
return false;
}

confirmEnding("Bastian", "n");
7
function repeatStringNumTimes(str, num) {
  var a="";
  for (var i = 1; i<=num ; i++){
      a = a.concat(str);// noi chuoi
  }
  return a;
}

repeatStringNumTimes("abc", 3);