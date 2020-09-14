
export default function createGame(){
    const arena = {
        player : {
            x : 1 , y: 1
         },
        screen : {
            x: 10,
            y: 10
        }
    }   
    function movePlayer(command){
        const {keyPressed} = command;
        const player = arena.player;
        
        const  handleMovePlayer = {
            ArrowUp(){
                return  player.y = Math.max(player.y - 1,0);                    
            },
            ArrowDown(){
                console.log( Math.min(arena.screen.y,player.y + 1))
                return  player.y = Math.min(arena.screen.y -1 ,player.y + 1);                 

            },
            ArrowLeft(){
                return  player.x = Math.max(player.x - 1,0);    
            },
            ArrowRight(){
                return  player.x = Math.min(player.x + 1,arena.screen.x -1);    
            }
        }
        const moveFunction = handleMovePlayer[keyPressed];
        if(moveFunction){
            moveFunction();
        }
    }

    return {
        arena,
        movePlayer
    }
}