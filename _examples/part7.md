---
layout: default
title: Part 7
permalink: /examples/7/
next_page: /demos/1/
previous_page: /examples/6/
subtitle: Keeping score
---

While it is fun to grab the stars, it would be great to have some indication that we are succeeding. We can add a point total to get this accross

```js
//  The score
scoreText = game.add.text(
    16, 
    16, 
    'score: 0', 
    { fontSize: '32px', fill: '#000' }
);


function collectStar (player, star) {
    
    // Removes the star from the screen
    star.kill();

    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

}
```