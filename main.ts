function bombing (ms: number) {
    return setInterval(
	    () => {
            if (info.score() >= scoreForHelicopter) {
		        bomb.push(sprites.createProjectileFromSprite(assets.image`Bomb`, plane, randint(0,1)? -15:15,15))
            }
	    },
	    ms
    )
}
info.onCountdownEnd(function () {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    newPlane()
    info.changeLifeBy(-1)
})
function newPlane () {
    info.startCountdown(11)
    music.baDing.play()
    plane.setPosition(randint(0, 120), Thief.y - randint(30, 80))
}
info.onLifeZero(function () {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    if (info.score() >= scoreForHelicopter) {
        Thief.setPosition(150, 4070)
        plane.setVelocity(50, 0)
        clearInterval(bombingInterval)
bombingInterval = bombing(400)
    }
    newPlane()
})
let Thief: Sprite = null
let scoreForHelicopter = 0
let bomb: Sprite[] = []
let plane: Sprite = null
let bombingInterval = 0
let BOMB_EACH_MS = 1000
scoreForHelicopter = 35
info.setLife(3)
Thief = sprites.create(assets.image`PizzaThief`, SpriteKind.Player)
scene.cameraFollowSprite(Thief)
Thief.setPosition(150, 4070)
controller.moveSprite(Thief, 35, 35)
scene.cameraFollowSprite(Thief)
plane = sprites.create(assets.image`Drunk Police officer`, SpriteKind.Food)
plane.setBounceOnWall(true)
tiles.setCurrentTilemap(tilemap`level0`)
bombingInterval = bombing(2000)
newPlane()
game.onUpdate(function () {
    if (info.score() == 3) {
        plane.setImage(assets.image`Drunk bloody police 1`)
    }
    if (info.score() == 5) {
        plane.setImage(assets.image`Drunk bloody police 2`)
    }
    if (info.score() == 7) {
        plane.setImage(assets.image`Drunk bloody police skull broken`)
    }
    if (info.score() == 9) {
        plane.setImage(assets.image`Drunk SWAT member`)
    }
    if (info.score() == 11) {
        plane.setImage(assets.image`Drunk SWAT member0`)
    }
    if (info.score() == 13) {
        plane.setImage(assets.image`Drunk SWAT member1`)
    }
    if (info.score() == 15) {
        plane.setImage(assets.image`Drunk SWAT member2`)
    }
    if (info.score() == 17) {
        plane.setImage(assets.image`Drunk SWAT member0`)
    }
    if (info.score() == 19) {
        plane.setImage(assets.image`Drunk SWAT member3`)
    }
    if (info.score() == 21) {
        plane.setImage(assets.image`Drunk SWAT member4`)
    }
    if (info.score() == 23) {
        plane.setImage(assets.image`Drunk SWAT member5`)
    }
    if (info.score() == 25) {
        plane.setImage(assets.image`Drunk SWAT member5`)
    }
    if (info.score() == 27) {
        plane.setImage(assets.image`Drunk SWAT member6`)
    }
    if (info.score() == 29) {
        plane.setImage(assets.image`Drunk SWAT member7`)
    }
    if (info.score() == 31) {
        plane.setImage(assets.image`Drunk SWAT member8`)
    }
    if (info.score() == 33) {
        plane.setImage(assets.image`Drunk SWAT member9`)
    }
    if (info.score() == scoreForHelicopter) {
        controller.moveSprite(Thief, 50, 0)
        animation.runImageAnimation(
        plane,
        assets.animation`helycopter0`,
        200,
        true
        )
    }
    if (info.score() == scoreForHelicopter + 5) {
        animation.runImageAnimation(
        plane,
        assets.animation`helycopter1`,
        200,
        true
        )
    }
    if (info.score() == scoreForHelicopter + 10) {
        animation.runImageAnimation(
        plane,
        assets.animation`helycopter2`,
        200,
        true
        )
    }
})
game.onUpdate(function () {
    if (info.score() == 120) {
        game.over(true, effects.confetti)
    }
})
forever(function () {
    if (info.score() < scoreForHelicopter) {
        plane.setVelocity(randint(0,1)?30:-30, -15)
    } else {
        plane.setVelocity(randint(0,1)?60:-60, 10)
    }
    pause(2000)
})
forever(function () {
    music.playMelody("D B A G F E F C ", 205)
})
