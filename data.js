var data = "U2FsdGVkX195DIgtWfEzFBtSmfM7+O0TCLRyS9CTvEslJAwiWPuq/9V8zA5bl+0dQTSr+bnA784xxAmhMAxXaGM6b4JDAXb9dCjoQOYVGFlBvrVKZH0oA3xeH+ML8ZWyM89er6LUr02jSq9XDQ6oodutkTkRjPmUwPoLOv7ijEA=";
function decrypt() {
    var key = document.getElementById("input").value;
    var decrypted = CryptoJS.AES.decrypt(data, key);

    var dec = decrypted.toString(CryptoJS.enc.Utf8);
    dec = dec.replace(/(?:\r\n|\r|\n)/g, '<br>');
    document.getElementById("data").innerHTML = dec;
}