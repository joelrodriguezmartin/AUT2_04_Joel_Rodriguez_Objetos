/*1.- BOLAS

 Queremos crear un objeto llamado bola que guarde: 

    Coordenadas x  e  y: las coordenadas horizontal y vertical donde comienza la bola en la pantalla. 
    Esto puede oscilar entre 0 (esquina superior izquierda) y el ancho y alto de la ventana del navegador (esquina inferior derecha)- 600.

    velocidad horizontal y vertical (velX y velY): a cada bola se le asigna una velocidad horizontal y vertical; en términos 
    reales, estos valores se agregan regularmente a los valores de las coordenadas x / y cuando animamos las bolas, para moverlas tanto en cada cuadro.

    color: cada bola tiene un color.

    tamaño: cada bola tiene un tamaño: este es su radio, en píxeles.

Esta 'bola' tendrá un método 'dibuja' donde vamos a mostrar las coordenadas de la bola, y otro método 'mover', 
donde la bola va ha avanzar y tomará la nueva posición ( x e y ) de x+velX.*/

function bolas(x, y, velX, velY, color, tamaño){
    //Parametros
    this.x = x; //Coordenadas eje X
    this.y = y;  //Coordenadas eje Y
    this.velX = velX; //Velocidad eje X
    this.velY = velY;  //Velocidad eje Y
    this.color = color; //Color identificado por codigo de color
    this.tamaño = tamaño; //Tamaño de la bola
    //Funciones
    this.dibuja = function(){//Devuelve las coordenadas de la bola para su dibujado
        console.log(`Las coordenadas son ${this.x} de x ${this.y} de y`)
    };
    this.mover = function(){//Modifica los valores de la posicion usando la velocidad
        this.x += this.velX;
        this.y += this.velY;
    }
}

function actividad1(){
    console.log("Hacemos pruebas con bolas");
    console.log("Creamos una bola con los valores x = 0, y = 0, velX = 2, velY = 2, color = #FFFFFF y tamaño = 2");
    var bola = new bolas(0, 0, 2, 2, "#FFFFFF", 2);
    console.log("Dibujamos la bola");
    bola.dibuja();
    console.log("Movemos la bola y la volvemos a dibujar");
    bola.mover();
    bola.dibuja();
    console.log("Repetimos");
    bola.mover();
    bola.dibuja();
}