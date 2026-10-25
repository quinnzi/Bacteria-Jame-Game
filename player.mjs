let inc = 0
export let screen = 1
const missionsComplete = [    
]
    let linesDone = 0
const items = []
     let board
     const bacteria = [
    {name: "Eli", 
        xPosition: 1200, 
        yPosition: 50, 
        y:0, 
        x: 640,
        dialouge:[
            ["I DON'T WANT SUCH A NAIVE FRAGILE FACE IN MY EYELINE RIGHT NOW. GO AWAY!!",
            "Weapon? Y-zee might have one :D"],
            ["Rosies Rose? Yuh. I know where it is",
            "Sure I'll tell you.",
            "IF YOU PASS THIS TRIVIA QUIZ!!",
            "What type of cell is Stom?",
            "What enables your body to digest lactose?",
            "Which bacteria is NOT found in the human gut?",
            "What bacteris causes consumption",
            "Which of these bacteria live on and help out your skin?"],

            ["Well, you failed. Good luk surviving in that forest",
            "Alright! You passed. Rosies Rose is in the river. Poetic. Right?"]//thenn after this, items.push('rose')

        ],
        neededItem: "Rosie"
    },
    {name: "Ella", 
        xPosition: 700, 
        yPosition: 70, 
        x: 0, 
        y: 640, 
        dialouge:[
            "Have you considered dying your hair? That shade really washes you out...",
            "Your mother was right. Seriously. Hair like that with skin like yours?",
            "Ever try washing your hair?",
            "You look like such a mess lately. I mean--- when's the last time you combed that hair?",
            "Homeless person hair."]
        }

    ,
    {name: "Lace", xPosition: 1600, yPosition: 50, x: 0, y: 320,
        dialouge:[

            [
            {p: "Do you have any weapons?"},
            {n: "Mmm, nmmm, I dmmmt huuv a weapum."},
             {n: "Steph prob wood tho"}],
            [{p: "Can I have that milk?"},
                {n:"Milk? Mmm"},
           {n:"Nmmm"}]

        ],
             neededItem: "Steph"
    },
    {name: "Stom", xPosition: 320, yPosition: 10, x: 0, y: 0,
          dialouge:[
            {n: "Oh hey there! I've never seen you before. Who are you?"},
            {p: "I'm Angel! I was trying to drive to my parent's place for dinner, but a magic star shrank me. Who are you?"},
            {n: "Just a Stoma that grew a bit too large."},
            {n:"They said i was getting to big for my britches... so they kicked me out :("},
            {n:"Say, you're looking to grow?"},
            {p: "Yeah, my parents will rip me to shreds if I'm late."},
            {n: "Well, the weird goo at the end of mushroom forest stretches you up. Though I wouldn't go there without a weapon"},
            {n:"Talk to some bacteria, see if they can help you. Though-- as a warning, not all of them are nice."}
        ]
    },

    {name: "Rosie", xPosition: 1100, yPosition: 10, x: 640, y: 320,
        dialouge:[
            [ {p: "Do you have any weapons?"},
                {n:"Funny way to start a conversation love."},
                
            {n: "But yes. I do."},
            {p: "Great! Can I hav one?"},
            {n: "Hasn't anyone in this world ever told you nothing comes for free?"},
            {p: ":("},
            {n: "Go talk to Eli and get him to tell you where he hid my *red* rose"}], // and after this last line of dialouge {Rosie: false} is pushed to missionsComplete and it enables the player to have a weapon later on 
            [{n: "The pond? Of course he did. Ugh. The insolent gut dwelling thing."},
            {n: "I suppose a promise is a promise. Here. It deals 3 damage."}]
        ],
             neededItem: "Rose"
    },
    {name: "Gon", xPosition: 800, yPosition: 10, x: 0, y: 960,
         dialouge:[
    "You're going to your parent's house in THAT?", 
    "Your parents don't love you",
    "You were always the disappointment",
    "Went and got yourself shrunk. How stupid",
    "I wonder how you could matter; no one on this dirt rock has ever loved you."]
    },
    {name: "Steph", xPosition: 420, yPosition: 10, x: 640, y: 960,
            dialouge:[
     {p: "Do you have a weapon?"},            
    {n: "Weapons! Why of course I do! What do you need them for?"},
      {p: "I'm going to the forest of mushrooms to get goo that can make me tall again."}, 
    {n:"The forest of mushrooms? How thrilling! I'm gonna tell you what all is there now!"},
    {n:"There's ghosts that take 3 damage to kill. Spores take 2. The beast whose name shall not be spoken takes much much more."},
    {n:"Yup! Anyways what were we talking about?"},
      {p: "Weapons...?"}, 
    {n:"Weapons! Right. Weapons. I can only part with this one that deals 1 damage."},
      {p: "Seriously? One?"}, 
    {n:"Hey! I'm being generous! But I guess I could part with my rocket launcher if you did something for me..."},
    {n:"Get me a milk. I want a taste!"},
    ],
             neededItem: "Milk"
    },
    {name: "Steph Friends", xPosition: 120, yPosition: 10, x: 960, y: 960, 
          dialouge:[
    "Ew. Look at that face", 
    "Why are you even talking to us?",
    "Please go choke on a spore",
    "Seriously? I can't believe you're actually trying to talk to us.",
    "Why don't you take the hint and go bugger off, hm?"]
    },

    {name: "Biffii", xPosition: 1650, yPosition: 10, x: 640, y: 640,
          dialouge:[
    [{n:"Oh. Weapon?"},
    {n:"No. Steph bought all of them from me."},
    {n:"All for only a penny"},
    {n:"Now I'm broke and all I have is this milk."}],
    [{n:"Milk? But my family needs it to survive the frost"},
    {n:"If you really need it-- here. Enjoy."}],
   ],
    neededItem: "Steph"
    }

    //needed item is the item you need to have in the array of items in order to unlock the second round of dialouge


]

const enemies =[
    {   type: "ghost",
        points: 3,
        xPosition: board, 
        yPosition: 400, 
        x: 0, 
        y:0, 
    },
    {   type: "spore",
        points: 1,
        xPosition: board, 
        yPosition: 300, 
        x: 0, 
        y: 320, 
    }

]
const weapons = []
let spawned = []
let shot = []
let shrinkFac = 1
export class Player {
    constructor(game) {
    
        this.game = game
        this.height = 320 
        this.width = 320 
        this.pheight = this.height * shrinkFac
        this.char = bacteria[0]
        this.x = 0  // across. this is obvious stuff cmon now. use thes to move the player.
        this.y = this.game.height - this.pheight -150  // this is bc html canvas y is inverted. y starts from  the top of the canvas. say the canvas is 20 cm and the sprite is 6. subtracting gives you 4 which is the amount of units you'd need to travel to get to 6. So y is basically distance from top.
        this.idle = document.getElementById('witch')
         this.bacteria = document.getElementById('bac')
        this.sprint = 1.4
         this.floor = document.getElementById('floor')
         this.enemies = document.getElementById('e')
        
         this.mf = document.getElementById('forest')
    }
shoot(){
if(items.includes("rocket"))
{
    context.drawImage(this.enemies, 320, 320, this.width, this.height, e.xPosition, e.y - e.yPosition, 350, 350)
    weapons.push({ points: 10,
        xPosition: this.x, 
        yPosition: this.y - 200, })
}
else{
document.getElementById('int').textContent = "You don't have the rocket launcher :("
}
if(items.includes("Knife"))
{
    context.drawImage(this.enemies, 0, 640, this.width, this.height, e.xPosition, e.y - e.yPosition, 350, 350)
        weapons.push({ points: 5,
        xPosition: this.x, 
        yPosition: this.y - 200, })
}
else{
document.getElementById('int').textContent = "You don't have the throwing knife :("
}
if(items.includes("stone"))
{
    context.drawImage(this.enemies, 320, 640, this.width, this.height, e.xPosition, e.y - e.yPosition, 350, 350)
        weapons.push({ points: 1,
        xPosition: this.x, 
        yPosition: this.y - 200, })
}
else{
document.getElementById('int').textContent = "You don't have the pebble :("
}
}


spawnEnemies(){

    if(screen === 3){
    const inc = 0
    console.log(enemies[inc])
    console.log(this.game.width)
enemies[inc].xPosition = this.game.width
    spawned.push(enemies[inc])
    }
    }

drawEnemies(context){
    if(spawned.length === 0){
    this.spawnEnemies()
}
    const ghostS = 10
     spawned.forEach(e => {
            console.log(spawned)
    console.log(e)
        if(e.xPosition === this.x || Math.abs(e.xPosition - this.x) < 100){
           shrinkFac = shrinkFac / 2
          e.xPosition = this.x
          context.clearRect(0, 0, this.game.width, this.game.height)
          context.drawImage(this.enemies, e.x, e.y, this.width, this.height, e.xPosition, e.y + e.yPosition, 300, 300)
        }
        if(e.xPosition - this.x < 0){
            e.xPosition = e.xPosition + 10
            context.clearRect(0, 0, this.game.width, this.game.height)
            context.drawImage(this.enemies, e.x, e.y, this.width, this.height, e.xPosition, e.y + e.yPosition, 300, 300)
        }
        if(e.xPosition - this.x > 0){
            e.xPosition = e.xPosition - 10
            context.clearRect(0, 0, this.game.width, this.game.height)
            context.drawImage(this.enemies, e.x, e.y, this.width, this.height, e.xPosition, e.y + e.yPosition, 300, 300)
        }

        
        
     });
}
dialouge(character){

    document.getElementById("dia").style.display = "flex"
    document.getElementById("log").style.display = "block"
    document.getElementById('int').textContent = "Space to continue"
    let linesNeeded = 1
    let lines

if (character.name === "Rosie"){
    items.push("Rosie")
}
if (character.name === "Steph"){
    items.push("Steph")
}

if(character.neededItem){
        if(items.includes(character.neededItem)){
           linesNeeded = character.dialouge[1]
           lines = character.dialouge[1]

           if(linesDone <= linesNeeded){
            document.getElementById('log').textContent = lines[linesDone]
           }
            else{
                linesDone = 0
                linesNeeded = 0
            }
           if (character.name === "Biffi"){
           items.push("Milk")
}
        }

    }

else{

lines = character.dialouge
linesNeeded = lines.length
const person = lines[linesDone]
let lineProp 
let name

if(linesDone === linesNeeded){
            linesNeeded = 0
            linesDone = 0
             document.getElementById("dia").style.display = "none"
            return
        }

if (person.n){
 name = character.name
 lineProp = "n"
}
else{
    name = "You"
    lineProp = "p"
    console.log(lines)
    }
    if(character.name === "Ella"){
                 linesNeeded = 1
        if (linesDone === 0)

        {
                           linesNeeded =1
                 linesDone = 0
            document.getElementById('log').textContent = lines[Math.floor(Math.random() * 5)]
            document.getElementById('char').textContent = "Ella"
            shrinkFac = shrinkFac/2}
            return
    }
        if(character.name === "Steph Friends"){
                 linesNeeded =1
                 linesDone = 0
        if (linesDone === 0)
        {document.getElementById('log').textContent = lines[Math.floor(Math.random() * 5)]
            document.getElementById('char').textContent = "Stephs"
            shrinkFac = shrinkFac/2
        
        }
            return
    }
        if(character.name === "Gon"){
                           linesNeeded =1
                 linesDone = 0
                 linesNeeded = 1
        if (linesDone === 0)
        {document.getElementById('log').textContent = lines[Math.floor(Math.random() * 5)]
            document.getElementById('char').textContent = "Gon"
            shrinkFac = shrinkFac/2

        }
            return
    }

document.getElementById('log').textContent = lines[linesDone][lineProp]
            document.getElementById('char').textContent = name
        }
 linesDone++ 
}
    
interact(context){
if (screen === 1){
for(let i = 0; i < 4; i++){
    const bacterium = bacteria[i]
    if(Math.abs(bacterium.xPosition - this.x) < 150){
    this.char = bacterium
       document.getElementById("int").style.display = "block"
document.getElementById('int').textContent = "Interact with " + bacterium.name + "(e)"
}

}
}
if (screen === 2){
for(let i = 4; i < 9; i++){
    const bacterium = bacteria[i]
    if(Math.abs(bacterium.xPosition - this.x) < 150){
document.getElementById('int').textContent = "Interact with " + bacterium.name + "(e)"
                console.log("Interact with " + bacterium.name)
}
}
        }
       
        }

update(keyArray, context){
if(shot.length != 0){weapons.forEach(weapon => {
   weapon.xPosition = weapon.xPosition + 10
})}

if( shrinkFac === 0.125){
 document.getElementById("dead").style.display = "flex";
 screen = 3
 spawned = []
weapons.forEach(weapon => {
   weapon.xPosition = this.x
})
}
if(keyArray){  this.keyArray = keyArray};
       if(this.keyArray.includes("KeyE")){
        console.log("It was our fault!!")
                    this.dialouge(this.char)
            
       }
        if(this.keyArray.includes("Space") && linesDone){
       
        this.dialouge(this.char)
             
       }
       
       
            this.interact(context)
            context.drawImage(this.floor, 0, this.game.height - 1000, this.game.bw, 1000)
            if(screen === 1 || screen === 2){
this.drawBac(context)
            }
            if(screen === 3){
            context.drawImage(this.mf, 0, this.game.height - 1000, this.game.bw, 1000)
            this.drawEnemies(context)
            }
            
              if(this.x < 0){
                this.x = this.game.width - 320
                screen--}
            if(this.x > this.game.width){
                this.x = 0
                screen++

            if(screen === 4){
                this.x = this.x
            }
                
            }
  
             

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
         context.drawImage(this.idle, 0, 0, this.width, this.height, this.x, this.y, this.width *  shrinkFac, this.height *  shrinkFac)
        }
        
drawBac(context){
        context.clearRect(0, 0, this.game.width, this.game.height)
         context.drawImage(this.floor, 0, this.game.height - 1000, this.game.bw, 1000)
    if (screen === 1){
     for(let i = 0; i < 4; i++){
          context.drawImage(this.bacteria, bacteria[i].x, bacteria[i].y, this.width, this.height, bacteria[i].xPosition, this.y - bacteria[i].yPosition, 200, 200)
     }
     
    }
        if (screen === 2){
                     
     for(let i = 4; i < 9; i++){

          context.drawImage(this.bacteria, bacteria[i].x, bacteria[i].y, this.width, this.height, bacteria[i].xPosition, this.y - bacteria[i].yPosition, 200, 200)
     }
     
    }
     if (screen === 3){
                     
     for(let i = 4; i < 9; i++){

          context.drawImage(this.bacteria, bacteria[i].x, bacteria[i].y, this.width, this.height, bacteria[i].xPosition, this.y - bacteria[i].yPosition, 200, 200)
     }
     
    }
}
        
        drawD(context){ // this is for drawing the sprite!        
         context.drawImage(this.idle, 320, 0, this.width, this.height, this.x, this.y, this.width *  shrinkFac, this.height *  shrinkFac)  
        }
        
        drawM(context){ // this is for drawing the sprite!      
         if(inc === 0){
            this.x = this.x +20
           context.drawImage(this.idle, 0, 320, this.width, this.height, this.x, this.y, this.width *  shrinkFac, this.height *  shrinkFac)
           console.log("sprite 1")

        } 
        if(inc === 1){ // this is for drawing the sprite!        
         context.drawImage(this.idle, 320, 320, this.width, this.height, this.x, this.y, this.width *  shrinkFac, this.height *  shrinkFac) 
           console.log("sprite 2")
           inc++ 
        return "stop"
        }
        if(inc === 2){ // this is for drawing the sprite!        
         context.drawImage(this.idle, 0, 640, this.width, this.height, this.x, this.y, this.width *  shrinkFac, this.height *  shrinkFac)  
           console.log("sprite 3")
        }
        if(inc === 3){ // this is for drawing the sprite!        
     context.drawImage(this.idle, 0, 640, this.width, this.height, this.x, this.y, this.width *  shrinkFac, this.height *  shrinkFac)
         console.log("sprite 4")
         inc = 0
         inc++
         return "stop"
        }
       inc++
    }
}