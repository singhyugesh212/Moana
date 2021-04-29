class Game{
    constructor(){
        
    }
    play(){
        form.hide();
        gameState = 1;
        console.log(gameState);
        bgInst = createSprite(displayWidth/2, displayHeight/2);
        bgInst.addImage("moanaInst", background1);
    }
}