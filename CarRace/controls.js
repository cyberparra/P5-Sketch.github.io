class Controls{
    constructor(){
        this.forward=false;
        this.back=false;
        this.left=false;
        this.rigt=false;

        

        this.#addkeyboardListeners(); // #emeans private method
    }

    //add method for keyboard listeners inside Controls class
    #addkeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                    
                case "ArrowUp":
                    this.forward=true;
                    break;
                    
                case "ArrowDown":
                    this.back=true;
                    break;
                        
            }
            
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                    
                case "ArrowUp":
                    this.forward=false;
                    break;
                    
                case "ArrowDown":
                    this.back=false;
                    break;    
            }
            
        }
        


    }
}