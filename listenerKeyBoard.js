export default function createListenerKeyBoardInput(){
    
    const observers = [];

    function subscribe(observer){
        observers.push(observer);
    }
    function notifyAll(command){
        for(const observer of observers){
            observer(command);
        }
    }
    
    
    addEventListener('keydown',handleKeyPressed);
    function handleKeyPressed(e){
        const {key} = e;
        notifyAll({keyPressed : key});
    }

    return {
        subscribe
    }
}