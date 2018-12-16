sessionStorage.setItem('Ferrari', 'F430');
console.log(sessionStorage.getItem('Ferrari'));

localStorage.setItem('Ford', 'Focus');
console.log(localStorage.getItem('Ford'));

localStorage.setItem('Chevy', 'Sonic');
console.log(localStorage.getItem('Chevy'));

function Car() {
  document.getElementById("Car").innerHTML = document.write(localStorage.getItem('Chevy'));
}