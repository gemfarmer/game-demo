--- 
layout: default
title: Part 1
permalink: /demos/1/
next_page: /demos/2/
previous_page: /examples/9/
subtitle: Motion
---


Let's make things move!


```js

function toEndAndBack(child) {
    var incriment = 5;
    var childWidth = child.x + child.width
    
    var movingRight = child.deltaX > 0;
    if (child.deltaX > 0) {
        var notAtRightEdge = child.body.right < game.world.bounds.width;
        if (notAtRightEdge) {
          child.x += incriment
        } else {
          child.x -= incriment
        }
    } else {
        var notAtLeftEdge = child.body.x > game.world.bounds.x;
        if (notAtLeftEdge) {
          child.x -= incriment
        } else {
          child.x += incriment
        }
    }  
}

function update() {
    platforms.children.forEach(function(child) {
        toEndAndBack(child)
    })
};
```

I also updated the physics a bit so that the avatar can more quickly jump off the ground and platforms.


```js

//  Player physics properties. Give the little guy a slight bounce.
player.body.bounce.y = 0.2;
player.body.gravity.y = 300;
player.body.collideWorldBounds = true;

//  Allow the player to jump if they are touching the ground.
if (cursors.up.isDown && player.body.touching.down) {
    player.body.velocity.y = 0;
}

if (cursors.down.isDown && !player.body.touching.down) {
    player.body.velocity.y = 500;
}
```