class Form{
constructor(){

}

display(){
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(430,86);

    var input = createInput("Name");
    var button = createButton('Play');
    var greeting = createElement('h3');

    input.position(420,220);
    button.position(420,280);

    button.mousePressed(function(){
    input.hide();
    button.hide();
    
    var name = input.value();

    playerCount+=1;
    player.update(name);
    player.updateCount(playerCount);

    greeting.html("hello"+name);
    greeting.position(130,160);
    });
}
}