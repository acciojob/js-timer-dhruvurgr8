// write js code here if required
const para = document.getElementById('timer');
let date =  new Date();
para.innerText = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`