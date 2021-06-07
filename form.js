class Form{
    constructor(){

    }

    display(){
        var title = createElement("h2");
        title.position(130,0);
        title.html("Car Racing Game");

        var name = createInput("name");
        var button = createButton("Play");

        var greating = createElement("h3");

        name.position(130,160);
        button.position(250,200);
        

       button.mousePressed(function(){
           name.hide();
           button.hide();
           var pname = name.value();
           pCount++;
           player.update(pname);
           player.updateCount(pCount);

           greating.position(130,160);
           greating.html("Hello "+pname);
       })
    }
}