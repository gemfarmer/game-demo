
<script type="text/javascript">

var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('sky', '{{ site.baseurl }}/img/sky.png');
    game.load.image('ground', '{{ site.baseurl }}/img/platform.png');
    game.load.image('star', '{{ site.baseurl }}/img/star.png');
    game.load.spritesheet('dude', '{{ site.baseurl }}/img/dude.png', 32, 48);


}

function create() {
    game.add.sprite(0, 0, 'star');
}

function update() {
}

</script>