let inc = 0


export class Player {
    constructor(game) {
        this.game = game
        this.height = 320
        this.width = 320
        this.x = 0  // across. this is obvious stuff cmon now. use thes to move the player.
        this.y = this.game.height - this.height // this is bc html canvas y is inverted. y starts from  the top of the canvas. say the canvas is 20 cm and the sprite is 6. subtracting gives you 4 which is the amount of units you'd need to travel to get to 6. So y is basically distance from top.
        this.idle = document.getElementById('witch')
        this.sprint = 1.4
    }

        update(keyArray, context){
            if(this.x > this.game.width){
                this.x = 0
                return
            }
            if(keyArray)
          {  this.keyArray = keyArray}
            if(this.keyArray.includes('ArrowRight')){
                if (keyArray.length > 1)
                {
                    context.clearRect(0, 0, this.game.width, this.game.height)
                    this.drawM(context)
                    this.x = this.x + 40
                   
                }
                else
                {this.drawM(context)
                this.x = this.x + 40}
        }
            if(this.keyArray.includes('ArrowLeft')){
            if (keyArray.length > 1){
            context.clearRect(0, 0, this.game.width, this.game.height)
            this.drawM(context)
            this.x = this.x - 40
            console.log("went up")
          
            }
            else
            {this.drawM(context)
              this.x = this.x - 40}
            }
             
        
        if(this.keyArray.includes('ArrowDown')){
        if (keyArray.length > 1){
            
            this.drawM(context)
         
            console.log("went up")
          
            }
            else
            {this.drawM(context)
            }
            }

    if(this.keyArray.includes('ArrowUp')){

        if (keyArray.length > 1){
            context.clearRect(0, 0, this.game.width, this.game.height)
            this.drawM(context)
          
            console.log("went up")
          
            }
            else
            {this.drawM(context)
             }
            }

            if(this.keyArray.includes('Enter') && this.keyArray.includes('ArrowRight'))
                {
                      this.x = (this.x + 40) * this.sprint
                this.drawM(context)}

            if(this.keyArray.includes('Enter') && this.keyArray.includes('ArrowLeft'))
                { this.x = (this.x - 40) * this.sprint
                    this.drawM(context)
                }

        }

        draw(context){ // this is for drawing the sprite!      
         context.drawImage(this.idle, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height)
        }

        
        drawD(context){ // this is for drawing the sprite!        
         context.drawImage(this.idle, 320, 0, this.width, this.height, this.x, this.y, this.width, this.height)  
        }
        
        drawM(context){ // this is for drawing the sprite!      
         if(inc === 0){
            this.x = this.x +20
           context.drawImage(this.idle, 0, 320, this.width, this.height, this.x, this.y, this.width, this.height)
           console.log("sprite 1")

        } 
        if(inc === 1){ // this is for drawing the sprite!        
         context.drawImage(this.idle, 320, 320, this.width, this.height, this.x, this.y, this.width, this.height) 
           console.log("sprite 2")
           inc++ 
        return "stop"
        }
        if(inc === 2){ // this is for drawing the sprite!        
         context.drawImage(this.idle, 0, 640, this.width, this.height, this.x, this.y, this.width, this.height)  
           console.log("sprite 3")
        }
        if(inc === 3){ // this is for drawing the sprite!        
     context.drawImage(this.idle, 0, 640, this.width, this.height, this.x, this.y, this.width, this.height)
         console.log("sprite 4")
         inc = 0
         inc++
         return "stop"
        }
       inc++
    }
}