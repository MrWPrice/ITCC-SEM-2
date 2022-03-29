function Ship() {
    this.x = width/2; // will place the ship in the centre of the canvas

    this.show =function() {

        Rect(this.x, height-20, 20, 20);
    }
    
}



/*
class Ship {

    constructor(){
        this.x = width/2; // will place the ship in the centre of the canvas
    }
    
    show(){


        rect(this.x, height-20, 20, 20);
    }

}
*/