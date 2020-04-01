let projectile: Sprite = null
let flower = sprites.create(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. b b d d b b . 
b 1 1 3 3 1 1 b 
b 1 3 5 5 3 1 b 
b d 3 5 5 3 d b 
c 1 1 d d 1 1 c 
c d 1 d d 1 d c 
. c c 7 6 c c . 
. . 6 7 6 . . . 
. . 6 6 8 8 8 6 
. . 6 8 7 7 7 6 
. . 8 7 7 7 6 . 
. . 8 8 8 6 . . 
`, SpriteKind.Player)
scene.setBackgroundColor(9)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . 9 . 9 9 . 9 . . . . . 
. . . . . f 5 f 5 f 5 . . . . . 
. . . f 5 f 5 f 5 f 5 f 5 . . . 
. . 5 f 5 f 5 f 5 f 5 f 5 f . . 
. f 5 f 5 f 5 f 5 f 5 f 5 f 5 . 
. f 5 f 5 f 5 f 5 f 5 f 5 f 5 . 
. . 5 f 5 f 5 f 5 f 5 f 5 f . . 
. . . f 5 f 5 f 5 f 5 f 5 . . . 
. . . . . f 5 f 5 f 5 . . . . . 
. . . . . 9 . 9 9 . 9 . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
`, flower, Math.randomRange(-25, 25), Math.randomRange(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
