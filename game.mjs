import {Player} from './player.mjs'
import { Input } from './input.mjs'
import { state } from './State.mjs'
import { StateMachine } from './State.mjs'
window.addEventListener('load', function(){
    let moveTim = 200
    let moveNum = 0
    const gameBoard = canvas1;
    const board = gameBoard.getContext("2d");
    gameBoard.width = window.innerWidth
   gameBoard.height = window.innerHeight


    class Game {
        constructor(width, height) {
            this.width = width
            this.height = height
            this.player = new Player(this)
             this.idle = document.getElementById('witch')
             this.input = new Input()
             this.state = new StateMachine(this)
             this.incre = 0
             
        }
        update(context){
        this.player.update(this.input.keys, context)
        this.state.current()
        }

        
        draw(context, state){
            console.log('state: ' + state)
           if(state === 'idle'){
            if(this.incre % 2 === 0){
           this.player.draw(context)
            this.incre++
        }
           else{
            this.player.drawD(context)
            this.incre++
           }}

           
        }
    }
    
    const game = new Game(gameBoard.width, gameBoard.height)

    function move(){

        board.clearRect(0, 0, gameBoard.width, gameBoard.height)
        game.update(board)
        game.draw(board, state)

        const time = setInterval(function(){
        requestAnimationFrame(move)
        clearInterval(time)
        }, 200)


    }
    move()
    
})
