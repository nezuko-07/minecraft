
var canvas = new fabric.Canvas('myCanvas');//se crea una variable con la libreria de fabric y se lo esta asignando a un id que se llama my canvas

player_x = 10;// se crea una variable para la posicion de nuestro jugador en el eje x
player_y = 10;// se crea una variable para la posicion de nuestro jugador en el eje y

block_image_width = 30;// se crea una variable para el ancho del bloque
block_image_height = 30;// se crea una variable para el alto del bloque 

var player_object= "";//se crea una variable
var block_image_object= "";// se crea una variable

function player_update()//se esta definiendo la funcion para actualizar nuestro jugador
{
	fabric.Image.fromURL("player.png", function(Img) {// manda a llamar una funcion de fabric que se llama image.fromURL 
	player_object = Img;// asignacion de la imagen 

	player_object.scaleToWidth(150);//asigna una escala de 150 de ancho
	player_object.scaleToHeight(140);//asigna una escala de 140 de alto
	player_object.set({//posiciona al jugador en los valores de x y y
	top:player_y,//
	left:player_x//
	});
	canvas.add(player_object);//coloca la imagen de el jugador en el canvas

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {//estamos mandando a llamar de nuestra libreria fabric la propiedad de imagen
	block_image_object = Img;//mi variable de bloque va a ser igual a img

	block_image_object.scaleToWidth(block_image_width);//le damos un tamaño escala al bloque
	block_image_object.scaleToHeight(block_image_height);//le damos uun tamaño al bloque
	block_image_object.set({//
	top:player_y,// le estamos asignando la posicion en el eje y
	left:player_x// le estamos asignando la posicion en el eje x
	});
	canvas.add(block_image_object);//añade la imagen del bloque

	});

}

window.addEventListener("keydown", my_keydown);//evento tecla presionada

function my_keydown(e)//estamos creando nuestra funcion que se llama my_keydown y le estamos enviando el parametro e
{
keyPressed = e.keyCode;//se le asigna el codigo ascii a la variable keyPressed
console.log(keyPressed);// muestra en consola el valor de keyPressed
if(e.shiftKey == true && keyPressed == '80')// condicion booleana, se deben cumplir las dos condiciones el shift mas la letra p
{
	console.log("Se presiona p y shift al mismo tiempo");//muestra el mensaje en consola
	block_image_width = block_image_width + 10;// se aumenta el ancho en 10
	block_image_height = block_image_height + 10;// se aumenta el alto en 10
	document.getElementById("current_width").innerHTML = block_image_width;//se actualiza en nuestra pagina el valor del ancho
	document.getElementById("current_height").innerHTML = block_image_height;//se actualiza en nuestra pagina el valor del del alto 
}
if(e.shiftKey && keyPressed == '77') // si se cumple la condicion de shift y m presionadas 
{
	console.log("Se presiona m y shift al mismo tiempo");
	block_image_width = block_image_width - 10;// se disminuye el ancho el 10
	block_image_height = block_image_height - 10;// se disminuye el alto el 10 
	document.getElementById("current_width").innerHTML = block_image_width;//se actualiza en nuestra pagina el valor del ancho
	document.getElementById("current_height").innerHTML = block_image_height;//se actualiza en nuestra pagina el valor del alto
}

	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	if(keyPressed == '87')
	{
		new_image('wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '65'){

       new_image('agua falsa.jpg');
	   console.log("A");

	}
	if(keyPressed == '101'){
        new_image('PUERTA.png');
		console.log("e");
	}
	if(keyPressed == '71')
	{
		new_image('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		new_image('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		new_image('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		new_image('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		new_image('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		new_image('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		new_image('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		new_image('cloud.jpg'); 
		console.log("c");
	}
	
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha izquierda, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha derecha, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
