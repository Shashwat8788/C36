class Game{
    constructor(){
        
    }

    getState(){
       var gref = database.ref("gameState");
       gref.on("value",function(data){
           gState = data.val();
       });
    }
    
    update(state){
       database.ref("/").update({
           gameState:state
       });
    }

    start(){
       if(gState===0){
           player = new Player();
           player.getCount();
           form = new Form();
           form.display();
       }
    }

}