---
layout: default
title: Part 6
permalink: /examples/6/
next_page: /examples/7/
previous_page: /examples/5/
subtitle: Something to do
---

Let's give the player something to do. Something simple that we can do is let our avatar collect stars ![]({{ site.baseurl }}/img/star.png).

```js

// Checks to see if the player overlaps with any 
// of the stars, if he does call the collectStar 
// function
game.physics.arcade.overlap(
    player, 
    stars, 
    collectStar, 
    null, 
    this
);

function collectStar (player, star) {
    
    // Removes the star from the screen
    star.kill();

}
```