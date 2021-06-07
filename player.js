class Player{
    constructor(){

    }

    getCount(){
        var pref = database.ref("playerCount");
        pref.on("value",function(data){
            pCount = data.val();
        });
    }

    update(pname){
        var pindex = "player"+pCount;
        database.ref(pindex).set({

            name:pname
        });
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        });
    }

}