const config={
        width: 600,
        height:300,
        parent: "contenedor",
        type: Phaser.AUTO,
        scene:{
            preload: preload,
            create: create,
            update: update
        },
        physics:{
            default: "arcade",
            arcade: {
                gravity:{
                    y:500
                }
            }
        }
}
var game =new Phaser.Game(config);

function preload(){
console.log("soy preload 1");
//en preolad se renderizan las imagenes
    this.load.image("bird","/assets/bird.png");
    this.load.image("bird2","/assets/bird_dos.png");
    this.load.image("bird3","/assets/bird.png");
    this.load.image("bird4","/assets/bird_dos.png");
}
function create(){
console.log("soy create");
this.bird=this.physics.add.image(275,50,"bird");//este es el pajaro quese cae 
this.bird.setCollideWorldBounds (true);

this.bird2=this.physics.add.image(350,50,"bird2");//este es el pajaro quese cae 
this.bird2.setCollideWorldBounds (true);
this.bird2.flipX=true;


this.bird4 = this.add.image(50,50,"bird3");
this.bird4.setScale(1);
   this.bird4.flipX=false;
   
  

this.bird3 = this.add.image(550,50,"bird4");
this.bird3.setScale(1);
   this.bird3.flipX=true;
  

   // console.log(this.bird);//para ver las propiedades del pajaro en proto veremos lo que puede hacer  bird
   this.bird.setScale(1);
   this.bird.flipX=true;//lo rota
   this.bird2.setScale(1);
   this.bird2.flipX=false;//lo rota para el otro lado
   //con esto elegimos el punto de rotacion en laimagen
   this.bird2.setOrigin(0.5,0.5);//en el parentecis se pasan los parametro de la img x,y y van hasta 1
   //(1,1)seria la esquina naranja de el pajaro
   //(0,0)seria la esquia azul
   //(0.5,0.5)seria el centro
   //(0,1)rota en el punto verde
   //(1,0)rota en el puto rojo
 
}
function update(time,delta){
    //console.log(delta);
    this.bird.angle++;
    this.bird2.angle--;
    
    this.bird4.x++;
    this.bird3.x--;
   
}