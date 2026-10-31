<h1># Bacteria-Jame-Game</h1>
Hi there! This is my first time making a game! I briefly started one once, but the farthest I got was making the player move. This is my first finished one! 
<br>
<br>
<h2>How did I make it?></h2>
<br>
  I did not use a game engine, as I didn't have time in my schedule to learn one before the jam. I'm most comfortable with javascript and HTML, so I decided to go with the option of HTML canvas and vanilla JS, even though the rendering and the coding and the entire experience caused me so much pain.
<br>
<br>
All of the game visuals were displayed handled by HTML canvas with the assistance of the requestAnimationframe function, clearRect function, and drawImage function. The requestAnimation function calls your clearRect functions and the drawImage functions continously, so the game draws the images smoothly in real time rather than being slow and not immediately reactant to the controls. 
<br>
I used clearRect() to clear the whole canvas before I drew something--like the player or an enemy. I used the drawimage to draw the sprites and enemies. The code is a mess, because I did not want to leave the comfort of player.mjs. 
<br>
<br>
- Game.mjs is responsible for the creation of the game and is linked to index.html directly. It basically connects all of the JS modules together.
<br>
- Player.mjs deals with basically everything--like player and enemy movement, dialogue, player inventory, player health, etc. 
<br>
- State.mjs deals with if the player is idle or moving.If its idle, then the drawImage function in Player.mjs will alternate between the idle images in the player's sprite sheet. If the player is moving, it will signal for the draw functions to draw the moving sprites.  
<br>
- Input.mjs is what detects the keys that a player is using and pushes them to an array that the other modules can use.  

<h2>How to play!</h2>
<br>
First off, here are the controls:
<br>
<br>
- Arrow Keys: moving left & right
<br>
- E: interact
<br>
- R: rocket launcher
<br>
- S: launch pebble/stone
<br>
- D: launch knife/dagger

<h3>Where to play</h3>
If you don't want to play by clicking on this link: https://qweeez.itch.io/get-bact-home, you should be able to open the html file and play it, provided you downloaded every file in the repo.
<br>
<br>
Get Bact Home is a simple game, where a girl is shrunk by an evil magic star while trying to get to her parent's dinner. She now has to try to survive on a leaf's surface, being about the size of a leaf cell. 
<br>
<br>
Every time she gets hurt (physically or emotionally), she finds that she shrinks. (The game was meant to be a metaphor about how words can make you feel small, but that was tall ask for my first game--I know that now.) She needs to get to the end of mushroom forest to grow large again, but she has to acquire a weapon (or three!) to safely pass through. Your goal is to acquire weapons from the bacteria & make it safely through mushroom forest. 
<br>
<br>
<b>To beat the game, you have to kill all of the enemies in mushroom forest without dying/shrinking completely. You can do this by obtaining weapons from different bacteria and using them on enemies with the keys in the controls. The weapon with the highest damage is the rocket launcher (10 damage) and Steph has it.</b> 
<br>
<br>
Steph and Rosie have weapons to give the player
<br>
Biffii and Eli have items to give the player
<br>
Stom can give information of how to play the game.
<br>
<br>
<br>
PS: All but one of the characters are based on an actual type of bacteria :D
<br>
<br>
<br>
<b>Character Inspos (if you want hints on who not to talk to):</b>
<br>
<br>
Eli: E coli
<br>
Rosie: Roseburia bacteria
<br>
Stom: Stoma cells in plants
<br>
Gon: Neisseria gonorrhoeae
<br>
Steph: S. sanguinis
<br>
Steph Friends: Streptococcus pyogenes
<br>
Biffii: Bifidobacterium
<br>
Ella:  S. enterica and S. bongori
<br>
Lace: Lactobacillus bacteria
<br>
<br>
I apologize in advance for the many many MANY bugs you may encounter. This is my first game & I made it w/o an engine, 0 organization skills, HTML Canvas, duct tape, and hope-- so it may be a bit (a lot) glitchy. I may fix them in the future, but for now, I put my blood sweat & bacteria laden tears into this, so I hope you enjoy!
<br>
<br>
<h2>Credits:</h2>

Graphics: Made by me :D with piskel templates

Sound: non-existent bc time constraints </3



