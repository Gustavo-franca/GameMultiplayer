
export default function createGame(){
    
    const arena = {
        player : {
            x : 1 , y: 1,
            color: '#E25252',
            proprieties:{
                transposable: false,
                life: 100,
                numberLife: 3,
            }
         },
        objects:{
            
        },
        enemies:{

        },
        screen : {
            x: 50,
            y: 25
        }
    }   

    arena.objects = (createGameWalls());
    function createGameWalls(){

        const  wallTemplate =  {
             x : 0 , y: 0,
             color: '#232323',
             proprieties:{
                 transposable: false,
             }
          },
 
         walls = [];

          for(let i = 0; i < arena.screen.x;i++){
              walls.push({wall:{...wallTemplate,x:i,y:0,}});
          }
          for(let i = 0; i < arena.screen.x;i++){
            walls.push({wall:{...wallTemplate,x:i,y:arena.screen.y - 1,}});
        }
          for(let i = 0; i < arena.screen.y;i++){
            walls.push({wall:{...wallTemplate,x:0,y:i}});
        }  
        for(let i = 0; i < arena.screen.y;i++){
            walls.push({wall:{...wallTemplate,x:arena.screen.x - 1,y:i}});
        }    

         return {walls};
     }
 
 
    function movePlayer(command){
        const {keyPressed} = command;
        let player = arena.player;

        const moveIsValid = ({x,y})=>{

            for( const {wall} of arena.objects.walls){
                if(x == wall.x && y == wall.y && !wall.proprieties.transposable){
                    return false;
               }
            }
            return true;

        }
    
        
        const  handleMovePlayer = {
            ArrowUp(){
                return  {y:Math.max(player.y - 1,0)};                    
            },
            ArrowDown(){
                return {y:Math.min(arena.screen.y -1 ,player.y + 1)};                 

            },
            ArrowLeft(){
                return  {x: Math.max(player.x - 1,0)};    
            },
            ArrowRight(){
                return  {x: Math.min(player.x + 1,arena.screen.x -1)};    
            }
        }
        const movePlayerFunction = handleMovePlayer[keyPressed];
        moveIsValid(player.x,player.y);
        if(movePlayerFunction){
            const move = movePlayerFunction();
            if(moveIsValid({x : player.x, y:player.y,...move})){
                arena.player = {...player ,...move};
            }
        }
    }

    return {
        arena,
        movePlayer
    }
}