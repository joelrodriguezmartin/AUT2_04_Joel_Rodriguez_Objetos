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

var bolas = {
    //Parametros
    coordenadas = { //Objeto que contiene las coordenadas
        x: 0, //Coordenadas eje X
        y: 0  //Coordenadas eje Y
    },
    velocidad = {
        velX: 0, //Velocidad eje X
        velY: 0  //Velocidad eje Y
    },
    color: "#FFFFFF", //Color identificado por codigo de color
    tamaño: 5, //Tamaño de la bola
    //Funciones
    dibuja(){//Devuelve las coordenadas de la bola para su dibujado
        return this.coordenadas;
    },
    mover(){//Modifica los valores de la posicion usando la velocidad
        this.coordenadas.x += this.velocidad.velX;
        this.coordenadas.y += this.velocidad.velY;
    }
}