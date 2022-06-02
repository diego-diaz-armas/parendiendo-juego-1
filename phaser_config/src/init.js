const config={
        width: 600,
        height:300,
        parent: "contenedor",
        type: Phaser.AUTO,
        scene:{
            preload: preload,
            create: create,
            update: update
        }
}
var game =new Phaser.Game(config);

function preload(){
console.log("soy preload 1");
//en preolad se renderizan las imagenes
    this.load.image("bird","/assets/bird.png");
    this.load.image("bird2","/assets/bird_dos.png");
}
function create(){
console.log("soy create");
this .bird = this.add.image(50,50,"bird");
this .bird2 = this.add.image(550,50,"bird2");
   // console.log(this.bird);//para ver las propiedades del pajaro en proto veremos lo que puede hacer  bird
   this.bird.setScale(1);
   this.bird.flipX=true;//lo rota
   this.bird2.setScale(1);
   this.bird2.flipX=false;//lo rota
 
}
function update(time,delta){
    //console.log(delta);
    this.bird.angle++;
    this.bird2.angle--;
}