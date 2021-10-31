function palindrome(str) {
  let reverseStr;
  let regExp = /[^a-z0-9]/ig;

  str = str.replace(regExp, "").toLowerCase();
  reverseStr = str.split('').reverse().join('');
  
  return reverseStr === str ? true : false;
}

palindrome("eye");