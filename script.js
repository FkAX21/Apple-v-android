var androidButton = document.getElementById("android");
var appleButton = document.getElementById("apple");
// Android button
androidButton.addEventListener("click", androidBtn);
function androidBtn() {
  document.getElementById("pic").src = "images/Android-Logo.jpg";
  document.getElementById("explore").innerHTML = `Android Home`;
  document.getElementById("explore").style.backgroundColor = `#a4c93b`;
  document.getElementById("explore").href = "https://www.android.com/";
  document.getElementById("HTML").style.backgroundColor = `#a4c93b`;
  document.getElementById("HTML").style.fontFamily = `'Roboto', sans-serif`;
  document.getElementById("android").classList.remove("active");
}
appleButton.addEventListener("click", appleBtn);
function appleBtn() {
  document.getElementById("pic").src = "images/Apple-Logo.jpg";
  document.getElementById("explore").innerHTML = `Apple Home`;
  document.getElementById("explore").style.backgroundColor = `#a4c93b`;
  document.getElementById("explore").href = "https://www.android.com/";
  document.getElementById("HTML").style.backgroundColor = `#b6bcca`;
  document.getElementById("HTML").style.fontFamily = `'Brygada 1918', serif`;
  document.getElementById("android").classList.remove("active");
}
