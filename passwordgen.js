var length = 0;
var lowerCharset = "abcdefghijklmnopqrstuvwxyz";
var upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numCharset = "0123456789";
var specialCharset = "#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";















function generatePassword() {
    var length = prompt("Choose Password length: ", "8~128");
    var charset = "";
    var retVal = "";
    if(length > 7 && length < 129){
        var lowValid = confirm("Will you be using lowercase?");
        if(lowValid){
         charset = charset.concat(lowerCharset);   
        }    
        var upperValid = confirm("Will you be using uppercase?"); 
         if(upperValid){
         charset = charset.concat(upperCharset);   
           }    
        var numValid = confirm("Will you be using numbers?");
        if(numValid){
            charset = charset.concat(numCharset);   
           }    
        var specValid = confirm("Will you be using special characters?");
        if(specValid){
            charset = charset.concat(specialCharset);   
         }
         for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        console.log(retVal.length);
        document.getElementById("password").value = retVal;    
    }
    else{
        alert("wrong");
    }
        
    
    
 }

function copyclip() {
    /* Get the text field */
    var copyText = document.getElementById("password");
    /* Select the text field */
    copyText.focus ();
    console.log(copyText.value + " is the value");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /For mobile devices/
    /* Copy the text inside the text field */
    document.execCommand("copy");
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }