
export class Input {
        constructor() {
            this.keys = []
            console.log(this.keys)
            window.addEventListener('keydown', (ev) =>{
                console.log(ev.key)
                switch (ev.key) {
                    case 'ArrowDown':
                        if(this.keys.indexOf(ev.key) === -1){
                            this.keys.push(ev.key)
                        }
                        break;

                        case 'ArrowUp':
                        if(this.keys.indexOf(ev.key) === -1){
                            this.keys.push(ev.key)
                        }
                        break;

                        case 'ArrowRight':
                        if(this.keys.indexOf(ev.key) === -1){
                            this.keys.push(ev.key)
                        }
                        break;

                        case 'ArrowLeft':
                        if(this.keys.indexOf(ev.key) === -1){
                            this.keys.push(ev.key)
                        }
                        break;

                        case 'Enter':
                        if(this.keys.indexOf(ev.key) === -1){
                            this.keys.push(ev.key)
                        }

                        break;

                        
                
                    default:
                      console.log(this.keys)  
                        break;
                }

                console.log(this.keys)
            })




                window.addEventListener('keyup', (ev) =>{
                if(this.keys.indexOf(ev.key) != -1){
                    this.keys.splice(this.keys.indexOf(ev.key), 1)
                }

                console.log(this.keys)
            })
        }

   
    }

