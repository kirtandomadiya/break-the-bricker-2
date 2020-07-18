class Form{
    constructor(){
        this.input=createInput("name");
        this.title = loadImage('IMAGES/titleImage.jpg');
        this.button=createButton("play");
        

    }

    display(){
     image(this.title,0,0,displayWidth,displayHeight);
     this.button.position(displayWidth/2-50,displayHeight/2+100);
     
     this.button.mousePressed(()=>{
         gameState=1;
         this.button.hide();
     })

    }
}