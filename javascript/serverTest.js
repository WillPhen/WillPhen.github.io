var encrypt = document.getElementById("encrypt");
var plaintext = document.getElementById("plaintext");
var cipherkey = document.getElementById("shift");
var ciphertext = document.getElementById("ciphertext");
var plaintext = document.getElementById("plaintext");

// http://localhost:8080/caesar-encrypt?plain-text=STEMDay&shift-key=5

encrypt.addEventListener("click", async function() {

    let request = "http://localhost:8080/caesar-encrypt?plaint-text=" + plaintext.value + "&shift-key=" + cipherkey.value;

    console.log("Processing encryption...");

    const response = await fetch(request);
    const someJson = await response.json();

    console.log(someJson)
    ciphertext.value = someJson;
    plaintext.value = someJson;

});

decrypt.addEventListener("click", async function() {

    let request = "http://localhost:8080/caesar-decrypt?cipher-text=" + ciphertext.value + "&shift-key=" + cipherkey.value; 

    console.log("Processing decryption...");

    const response = await fetch(request);
    const someJson = await response.json();

    console.log(someJson)
    plaintext.value = someJson;

});