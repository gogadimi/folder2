/*let osnoven = document.querySelector(".osnoven");

let site = document.querySelectorAll("section");

site.forEach(div => div.addEventListener("click", display));

function display(e) {
  osnoven.innerHTML = e.target.innerHTML;
  osnoven.style.background= e.target.style.background;
}*/

var modal = document.getElementById("myModal");
var img = document.querySelectorAll("#myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.forEach(div => div.addEventListener("click", display));

function display(e) {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//c.fillRect(100, 100, 100, 100);


/*c.beginPath();
c.moveTo(50 , 300);
c.lineTo(300, 100);
c.strokeStyle = 'green';
c.stroke();
c.fillStyle = 'rgb(255,0,0,0.5)';

for(var j = 0; j<500; j++){
  
  x = Math.random() * window.innerWidth;
  y = Math.random() * window.innerHeight;
  c.beginPath();
c.arc(x, y, 40, 0, Math.PI * 2,false);
c.fill();}*/

var mouse = {
  x: undefined,
  y: undefined
}
var maxRadius = 40;
//var minRadius = 10;

var colorArray = [
  '#8A867F',
  '#FFE8B7',
  '#FFBE87',
  '#E38A74',
  '#BF5967'
]
window.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});


function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray [Math.floor( Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    
    c.fillStyle = this.color;
    c.fill();
  }
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    if (mouse.x - this.x < 100 && mouse.x - this.x > -100 &&
      mouse.y - this.y < 100 && mouse.y - this.y > -100) {
      if (this.radius < maxRadius) {
        this.radius += 1
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}
var circleArray = [];

for (k = 0; k < 1500; k++) {
  var radius = Math.random() * 3 + 1;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 6;
  var dy = (Math.random() - 0.5) * 8;

  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerWidth);

  for (k = 0; k < circleArray.length; k++) {
    circleArray[k].update();
  }
}
animate();