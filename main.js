var input = document.getElementById("input1");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alert("hello my name is bizimungu pascal")
   
  }
});

console.log("Your have connected")