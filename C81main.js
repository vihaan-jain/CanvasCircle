canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="grey";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=6; 
ctx.rect(150, 143, 430, 200)                                                                       
ctx.stroke();

color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(250, 210, 40 ,0 , 2 *Math.PI);
ctx.stroke();

color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(350,210,40,0 ,2 *Math.PI);
ctx.stroke();

color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(450,210,40,0 ,2 *Math.PI);
ctx.stroke();

color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(300,250,40,0 ,2 *Math.PI);
ctx.stroke();

color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(400,250,40,0 ,2 *Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;

    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x, mouse_y,radius,0,2*Math.PI);
    ctx.stroke();
}