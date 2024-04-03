document.addEventListener('DOMContentLoaded', function() {
var form = document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var user = document.getElementById('User').value;
    var age = document.getElementById('Age').value;
    var key = document.getElementById('Key').value; 
    localStorage.setItem('User', user);
    localStorage.setItem('Age', age);
    localStorage.setItem('Key', key);

    console.log("User:", user);
    console.log("Age:", age);
    console.log("Key:", key);
  });

});
  
  function displayinfo() {
    var user = localStorage.getItem('User');
    var age = localStorage.getItem('Age');
    var key = localStorage.getItem('Key');
    var ekey = document.getElementById('EKey').value;
    console.log("User:", user);
    console.log("Age:", age);
    console.log("Key from storage:", key);
    console.log("Key from input:", ekey);

    if (ekey === key) {
        var infoList = document.querySelector('.info');
        infoList.textContent = `Username: ${user}, Age: ${age}`;
    } else {
        var infoList = document.querySelector('.info');
        infoList.textContent = 'Key does not match'; 
    }
}

function deleteUser() {
    var key = localStorage.getItem('Key');
    var dkey = document.getElementById('DKey').value.trim(); 

    if (dkey === key) {
        localStorage.removeItem('User');
        localStorage.removeItem('Age');
        localStorage.removeItem('Key');

        var infoList = document.querySelector('.info');
        infoList.textContent = "User Deleted";
    } else {
        var infoList = document.querySelector('.info');
        infoList.textContent = "Key does not match"; 
    }
}


  function deleteAllUsers() {
    localStorage.clear();
    var infoList = document.querySelector('.info');
    infoList.textContent = 'All users deleted';
}
  