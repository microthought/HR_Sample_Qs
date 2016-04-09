/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes 
cannot contain anything but exactly 4 digits or exactly 6 digits.
hint: be warned about zeros up front, or non-number inputs
*/

function validatePIN (pin) {
 if(pin.length === 4 || pin.length === 6){
   var length = pin.length;
   for( var i = 0; i < length; i++){
     switch(pin.charAt(i)) {
       case "0":
       case "1":
       case "2":
       case "3":
       case "4":
       case "5":
       case "6":
       case "7":
       case "8":
       case "9":
         break;
       default:
         return false;
     }
   }
   return true;
 }else{
   return false;
 }
}
