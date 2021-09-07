class Game{
    constructor(){}
    getState(){
        var gameStateRef= database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
        }
        update(state){
            database.ref("/").update({
                gameState:state
            })
        }
    start(){
        form=new Form()
        form.display()
        player=new Player()
        playerCount=player.getCount()

        bike1=createSprite(width/2-50,height-100)
        bike1.addImage("bike1")
        bike1.scale=0.3

        bike2=createSprite(width/2+100,height-100)
        bike2.addImage("bike2")
    }

}