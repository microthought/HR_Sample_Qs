//This code is buggy. Can you fix it?
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return 
  {
    status: msg
  }
}


//Fixed return object with status

function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available"
  return {status: msg};
}



//Fixed return message only

function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available"
  return msg;
}