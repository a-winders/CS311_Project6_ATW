function onButtonClick(){
    document.getElementById('textInput').className="show";
  }

function showPoem (name){
    const poem = document.getElementById(name);
    poem.style.display = 'block';
}

function calculatePosition() {
    var x = document.getElementById("input").value;
    document.getElementById("demo").innerHTML = x;
}

function addAssetTotals() {
    // (A) GET THE VALUE FROM THE TEXT BOXES
    // NOTE - WE PARSE THEM AS INTEGER
    let a = parseInt(document.getElementById("varA").value);
    let b = parseInt(document.getElementById("varB").value);
    let c = parseInt(document.getElementById("varC").value);
    let d = parseInt(document.getElementById("varD").value);
  
    // (B) ADDITION
    // NOW THEY ADD PROPLERLY, NOT CONCATENATE
    console.log(typeof x); // number
    console.log(typeof y); // number
    let result = a + b + c + d;
  
    // (C) OUPUT RESULT
    document.getElementById("varResult").value = result;
    return false; // Stop form submit
  }
  

  function addInvestment() {
    // (A) GET THE VALUE FROM THE TEXT BOXES
    // NOTE - WE PARSE THEM AS INTEGER
    let a = parseInt(document.getElementById("varA").value);
    let b = parseInt(document.getElementById("varB").value);
    let c = parseInt(document.getElementById("varC").value);
    let d = parseInt(document.getElementById("varD").value);
  
    // (B) ADDITION
    // NOW THEY ADD PROPLERLY, NOT CONCATENATE
    console.log(typeof x); // number
    console.log(typeof y); // number
    let result = a + b + c + d;
  
    // (C) OUPUT RESULT
    document.getElementById("varResult").value = result;
    return false; // Stop form submit
  }
