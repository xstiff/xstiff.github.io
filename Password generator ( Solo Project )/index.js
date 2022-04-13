let alphabet = true;
let numbers = true;
let caps = false;
let special = false;

let az_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] // .length - 1
let caps_array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let num_array = ['0', '1' ,'2' ,'3' ,'4' ,'5','6','7','8','9']
let special_array =['!','@','#','$','%','^','&','*','(',')','-','=','+','_']
let lenn = 10;


function generate() {
  // ceil(Math.random() * 9)
  if (lenn < 4) { lenn=4 }
  if (lenn > 32) { lenn=32 }


  let using = []
  if (alphabet===true){using.push('alphabet')}
  if (numbers===true){using.push('numbers')}
  if (caps===true){using.push('caps')}
  if (special===true){using.push('special')}


  document.querySelector("#pass-1").textContent = generation(using);
  document.querySelector("#pass-2").textContent = generation(using);
  document.querySelector("#pass-3").textContent = generation(using);
  document.querySelector("#pass-4").textContent = generation(using);
  document.querySelector("#pass-5").textContent = generation(using);
  document.querySelector("#pass-6").textContent = generation(using);



}


function generation(using) {

  password = '';
  for (i=1;i<lenn+1;i++) {
    x = (Math.floor(Math.random()*using.length) +1) // choose character
    chosen = using[x-1]
    if (chosen==='alphabet'){
      q =  Math.floor(Math.random()*(az_array.length-1) )
      password = password + az_array[q]
    }
    if (chosen==='numbers'){
      q =  Math.floor(Math.random()*(num_array.length-1) )
      password = password + num_array[q]
    }
    if (chosen==='caps'){
      q =  Math.floor(Math.random()*(caps_array.length-1) )
      password = password + caps_array[q]
    }
    if (chosen==='special'){
      q =  Math.floor(Math.random()*(special_array.length-1) )
      password = password + special_array[q]
    }

  }
  return(password);
}

function Save() {
  val_az = document.getElementById('value-az').checked;
  val_caps = document.getElementById('value-caps').checked;
  val_09 = document.getElementById('value-09').checked;
  val_special = document.getElementById('value-special').checked;
  lenn = document.getElementById('value-len').value;
  

  if (val_az == true) {alphabet = true} else{alphabet=false}
  if (val_caps == true) {caps = true} else{caps=false}
  if (val_09 == true) {numbers = true} else{numbers=false}
  if (val_special == true) {special = true} else{special=false}

  lenn = parseInt(lenn);
  if( lenn > 32) {
    document.getElementById('value-len').value = '32';
    lenn = 32;
  }
  if( lenn < 4) {
    document.getElementById('value-len').value = '4';
    lenn = 4;
  }

  let form = document.getElementById("formbox");
  form.style.display = 'None';
}

function Close() {
  let form = document.getElementById("formbox");
  form.style.display = 'None';
}

function Open() {
  let form = document.getElementById("formbox");
  form.style.display = 'block';
}


function copy(num) {

  var copyText;

  if (num == 1) {
    var copyText = document.getElementById("pass-1");
    navigator.clipboard.writeText(copyText.textContent)
    console.log('copied')
  }
  if (num == 2) {
    var copyText = document.getElementById("pass-2");
    navigator.clipboard.writeText(copyText.textContent)
    console.log('copied')
  }
  if (num == 3) {
    var copyText = document.getElementById("pass-3");
    navigator.clipboard.writeText(copyText.textContent)
    console.log('copied')
  }
  if (num == 4) {
    var copyText = document.getElementById("pass-4");
    navigator.clipboard.writeText(copyText.textContent)
    console.log('copied')
  }
  if (num == 5) {
    var copyText = document.getElementById("pass-5");
    navigator.clipboard.writeText(copyText.textContent)
    console.log('copied')
  }
  if (num == 6) {
    var copyText = document.getElementById("pass-6");
    navigator.clipboard.writeText(copyText.textContent)
    console.log('copied')
  }



  

}

generate();