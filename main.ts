enum ActionKind {
    Walking,
    Idle,
    Jumping,
    attak
}
namespace SpriteKind {
    export const Muro = SpriteKind.create()
    export const pipistrellobase = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Navetta_spaziale, 100, 0)
    animation.runImageAnimation(
    Navetta_spaziale,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . 4 4 4 4 . 2 . . . . . 
        . . . . 2 2 2 2 2 f . . . 2 . . 
        . . . . . . 2 . . . . 2 . . . . 
        . . . . . 2 2 2 . . . . . . 2 . 
        . . . . . 2 2 5 . . . . . . . . 
        . . . . . 2 2 2 . . . 2 . . . . 
        . . . . . . 2 . . . . . 2 . 2 . 
        . . . . 2 2 2 2 2 f . . . . . . 
        . . . . . 4 4 4 4 . . 2 . . 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 4 . . . 
        . . . . . 4 4 4 4 . 4 . . . . . 
        . . . . 2 2 2 2 2 f . . . 4 . . 
        . . . . . . 2 . . . . 4 . . . . 
        . . . . . 2 2 2 . . . . 4 . . . 
        . . . . . 2 2 5 . . . . . . . . 
        . . . . . 2 2 2 . . . . . 4 . . 
        . . . . . . 2 . . . . 4 . . . . 
        . . . . 2 2 2 2 2 f 4 . . 4 . . 
        . . . . . 4 4 4 4 . . 4 . . . . 
        . . . . . . . . . . . . . 4 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . 4 4 4 4 . 7 . . . . . 
        . . . . 2 2 2 2 2 f . . 7 . . . 
        . . . . . . 2 . . . . 7 . . . . 
        . . . . . 2 2 2 . . . . . 7 . . 
        . . . . . 2 2 5 . . . . . . . . 
        . . . . . 2 2 2 . . . . . 7 . . 
        . . . . . . 2 . . . . 7 . . . . 
        . . . . 2 2 2 2 2 f . . . 7 . . 
        . . . . . 4 4 4 4 . . . . 7 . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . . . . 7 . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 5 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    asteroide_grande.destroy()
    asteroide.destroy()
    asteroide_grande.startEffect(effects.ashes)
    asteroide.startEffect(effects.ashes)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    asteroide_grande.destroy()
    info.changeLifeBy(-1)
})
let projectile2: Sprite = null
let boss: Sprite = null
let asteroide: Sprite = null
let asteroide_grande: Sprite = null
let projectile: Sprite = null
let Navetta_spaziale: Sprite = null
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888
    8888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888855888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff8888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888ff88888888888ffffcccccffffff8888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888ffffcffff88888fffcccccccccccccccf888888888888888888888888888888888888888888888888
    888888888888588888888888888888888888888888888888888888888888888888888888888fffffccccccccff88ffccccccccccccccccccff8888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888fffcccccccccccccccfffcccccccccccccccccccccf888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888ffffccccccccccccccccccfccccccccccccccccccccccccf88888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888fffcccccccccccccccccccccccccccccccccccccccbbbccccccf8888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888fffffffccccccccccccccccccccccccccccccccccccccccbbbbbbbcccccff88888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888fcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbcccccf8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888ffccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbcccccf888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888fcccccccccccccccccccccccccccccccccccccccfcccccccccccbbbbbbbbbbcccccf88888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888fcccccccccccccccccccccccccccccccccccccfffffcccccccccccbbbbbbbbbbccccff8888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888fcccccccccccccccccccccccccccccccccccccffffffccccccccccccbbbbbbbbbbcccccf888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888fcccbbbbccccccccccccccccccccccccccccccffffffccccccccccccbbbbbbbbbbbcccccf88888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888ffcccbbbbbccccccccccccccccccccccccccccccffffffcccccccccccccbbbbbbbbbbbccccf88888888888888888888888888888888888
    88888888888888888888888888888888588888888888888888fcccbbbbbbccccccccccccccccccccccccccccccffffffccccccccccccccbbbbbbbbbbccccf88888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888fccccbbbbbbbcccccccccccfffcccccccccccccccffffffcccccccccccccccccbbbbbbbbccccf8888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888fcccbbbbbbbbcccccfcfffffffffcccccccccccccfffffccccccccccccccccccbbbbbbbbbccccf888888888888888888888888888888888
    888888888888888888888888888888888888888888888888fcccbbbbbbbbbccccfffffffffffffccccccccccccffffccccccccccccffffccccbbbbbbbbccccf888888888888888888888888888888888
    88888888888888888888888888888888888888888888888fccccbbbbbbbbbcccfffffffffffffffcccccccccccccfcccccccccccfffffffccccbbbbbbbbccccf88888888885888888888888888888888
    88888888888888888888888888888888888888888888888fccccbbbbbbbbbcccffffffffffffffffccccccccccccccccccccccfffffffffccccbbbbbbbbccccf88888888888888888888888888888888
    8888888888888888888888888888888888888888888888fccccbbbbbbbbbbcccfffffffffffffffffccccccccccccccccccccfffffffffffccccbbbbbbbbccccf8888888888888888888888888888888
    8888888888888888888888888888888888888888888888fccccbbbbbbbbbccccfffffffffffffffffccccccccccccccccccccffffffffffffccccbbbbbbbbcccf8888888888888888888888888888888
    8888888888888888888888888888888888888888888888fcccbbbbbbbbbbccccffffffffffffffffffccccccccccccccccccffffffffffffffcccbbbbbbbbccccf888888888888888888888888888888
    888888888888888888888888888888888888888888888fccccbbbbbbbbbbccccffffffffffffffffffcccccccccccccccccffffffffffffffffccbbbbbbbbcccccf88888888888888888888888888888
    888888888888888888888888888888888888888888888fccccbbbbbbbbbbccccffffffffffffffffffccccccccccccccccffffffffffffffffffccbbbbbbbcccccf88888888888888888888888888888
    888888888888888888888888888888888888888888888fcccbbbbbbbbbbbcccccfffffffffffffffffccccccccccccccccfffffffffffffffffffcbbbbbbbbcccccf8888888888888888888888888888
    888888888888888888888888888888888888888888888fcccbbbbbbbbbbccccccfffffffffffffffffccccccccccccccccffffffffffffffffffffcbbbbbbbcccccf8888888888888888888888888888
    888888888888888888888888888888888888888888888fcccbbbbbbbbbbcccccccfffffffffffffffccccccbbbbccccccfffffffffffffffffffffccbbbbbbbccccf8888888888888888888888888888
    888888888888888888888888888888888888888888888fcccbbbbbbbbbcccccccccffffffffffffccccccccbbbbccccccffffffffffffffffffffffcbbbbbbbcccccf888888888888888888888888888
    888888888888888888888888888888888888888888888fcccbbbbbbbbccccccccccfffffffffffcccccccccbbbbcccccfffffffffffffffffffffffccbbbbbbcccccf888888888888888888888888888
    888888888888888888888888888888888888888888888fccccbbbbbbbccccccccccccfffffffccccccccccbbbbccccccffffffffffffffffffffffffcbbbbbbbccccf888888888888888888888888888
    888888888888888888888888888888888888888888888fccccbbbbbbccccccccccccccccccccccccccccccbbbbccccccffffffffffffffffffffffffccbbbbbbccccf888888888888888888888888888
    88888888888888888888888888888888888888888888fccccccbbbbcccccccccccccccccccccccccccccccbbbccccccfffffffffffffffffffffffffccbbbbbbcccccf88888888888888888888888888
    88888888888888888888888888888888888888888888fccccccccccccccccccccccccccccccccccccccccccbbccccccffffffffffffffffffffffffffccbbbbbcccccf88888888888888888888888888
    88888888888888888888858888888888888888888888fcccccccccccccccfffffccccccccccccccccccccccccccccccffffffffffffffffffffffffffccbbbbbcccccf88888888888888888888888888
    88888888888888888888888888888888888888888888fccccccccccccffffffffffffcccccccccccccccccccccccccfffffffffffffffffffffffffffcccbbbbcccccf88888888888888885888888888
    88888888888888888888888888888888888888888888fccccccccccccffffffffffffffcccccccccccccccccccccccfffffffffffffffffffffffffffcccbbbbbccccf88888888888888888888888888
    888888888888888888888888888888888888888888888fcccccccccccfffffffffffffffccccccccccccccccccccccffffffffffffffffffffffffffccccbbbbbcccccf8888888888888888888888888
    888888888885888888888888888888888888888888888fccccccccccfffffffffffffffffcccccccccccccccccccccffffffffffffffffffffffffffcccccbbbbcccccf8888888888888888888888888
    888888888888888888888888888888888888888888888fccccccccccfffffffffffffffffccccccccccccccccccccfffffffffffffffffffffffffffcccccbbbbcccccf8888888888888888888888888
    888888888888888888888888888888888888888888888fccccccccccfffffffffffffffffcccccccccccffcccccccfffffffffffffffffffffffffffccccccbbbcccccf8888888888888888888888888
    8888888888888888888888888888888888888888888888fcccccccccfffffffffffffffffcccccccccfffffccccccfffffffffffffffffffffffffffccccccbbccccccf8888888888888888888888888
    8888888888888888888888888888888888888888888888fcccccccccfffffffffffffffffcccccccccfffffffcccfffffffffffffffffffffffffffcccccccbbcccccf88888888888888888888888888
    8888888888888888888888888888888888888888888888fcccccccccfffffffffffffffffcccccccccfffffffcccfffffffffffffffffffffffffffccccccccccccccf88888888888888888888888888
    88888888888888888888888888888888888888888888888fccccccccffffffffffffffffccccccccccfffffffcccfffffffffffffffffffffffffffcccccccccccccf888888888888888888888888888
    88888888888888888888888888888888888888888888888fccccccccffffffffffffffffccccccccccfffffffcccfffffffffffffffffffffffffffcccccccccccccf888888888888888888888888888
    888888888888888888888888888588888888888888888888fccccccccfffffffffffffffcccccccccccfffffccccffffffffffffffffffffffffffccccccccccccccf888888888888888888888888888
    888888888888888888888888888888888888888888888888fcccccccccfffffffffffffcccccccccccccfffccccccffffffffffffffffffffffffcccccccccccccccf888888888888888888888888888
    888888888888888888888888888888888888888888888888fccccccccccffffffffffcccccccccccccccccccccccccffffffffffffffffffffffcccccccccccccccf8888888888888888888888888888
    888888888888888888888888888888888888888888888888fccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccf8888888888888888888888888888
    8888888888888888888888888888888888888888888888888fccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffccccccccccccccccf8888888888888888888888888888
    8888888888888888888888888888888888888888888888888fcccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffcccccccccccccccccf88888888888888888888888888888
    88888888888888888888888888888888888888888888888888fcccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffccccccccccccccccccf88888888888888888888888888888
    88888888888888888888888888888888888888888888888888fcccccccccccccccccccccccccccccccbbbbbbcccccccccccfffffffffffccccccccccccccccccccf88888888885888888888888888888
    888888888888885888888888888888888888888888888888888fccccccccccccccfffcccccccccccbbbbbbbbbbbccccccccccfffffccccccccccccccccccccccccf88888888888888888888888888888
    8888888888888888888888888888888888888888858858888888fcccccccccccccffffcccccccccbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccf888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888fcccccccccccccfffffcccccccbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccf888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888fcccccccccccccffffffcccccbbbbbbbbbbbbbbbbbbbccccccccccffffcccccccccccccccccccf888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888fccccccccccccfffffffccccbbbbbbbbbbbbbbbbbbbccccccccccfffffcccccccccccccccccf8888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888fccccccccccccfffffffccccbbbbbbbbbbbbbbbbbbbbbccccccccfffffccccccccccccccccf88888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888fcccccccccccccffffffccccbbbbbbbbbbbbbbbbbbbbbbccccccccffffcccccccccccccccf888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888fccccccccccccffffffccccbbbbbbbbbbbbbbbbbbbbbbbccccccccfffcccccccccccccccf888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888fccccccccccccfffffcccccbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccf8888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888fccccccccccccfffccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccf88888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888fcccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccf888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888fcccccccccccccccccccccccccbbbbbbbbbbbbbbbbbcccccccccccccccccccccccf8888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888fccccccccccccccccccccccccccccbbbbbbbbbbbbbcccccccccccccccccccccff88888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888ffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccff8888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888ffcccccccccccccccccccccccccccffffffffffffccccccccccccfff888888888888888888888888888888888888888888
    8888888888888888888858888888888888888888888888888888888888888888fffcccccccccccccccccccccfff888888888888ffffffffffff888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888fccccccccccccccccccff888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888fffffffcccccccccff88888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888fffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888858888888888888888888
    8888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
game.splash("In una galassia lontana...", "un grande male che ci annida")
game.splash("un mostro colossale dorme", "nel pianeta delle caverne")
game.splash("ma una navicella", "con al suo interno un umano")
game.splash("con grande coraggio", "ce la farà il nostro eroe?")
game.splash("Space Cavern")
let sfondo = sprites.create(img`
    ccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccc
    ccccccccccccccffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccc
    cfffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffcccccccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffcccccccccccccccccccfffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffcccccccffffffffffffffffffffffffffffffffccccccccccccccccccccccffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffcccccccccccccccccccfccccccccccccccccfffffcffffffffcccccccccccccccccccccccccccccccccfffffffffffffffffffffffffccccccccccccccccccccfcccccccccccfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccfff
    ccccccccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffccccccccffffffffcccccccccccccccccccccccffffffffbffffffffccccccccccccccccccfffffffccccffffffcfffffccccccccffffffffffffffffffcccccffffffffffcccccccccccccccccccccccccffffffffffffffcccccccfcccccccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccc
    cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffccccccccccccccccccffffffbbbbbbbffffffcccccccccccccccffffffffffffffffffffcccccccccccccccccccccccccccccccffffffffffffffffffffffccccccccccccccccccccccccccccccccccffffccffccfffcccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccc
    ccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffccccffffffffffffffffffffccccccccccccccccccffffffbbbbbbbbbfffffccccccccccccccfffffffffffffcccccccccccccccccccccccccccccccccfffffccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffcffcccccccccccfffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffcccccccccccccccccccccccccffffffffffffffbbbbfffffffffffffffffffffffffffbbbbbbbbbbbbbffffcccccccccccccffffffbfffffffccccccccccccccccccccccccccfffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffccffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccfffffffbbbbbbbbbbbbbfffffccccccccccccccccfffffbbbbbbbbbbbbfffffccccccccffffffffbbbfcfffffcccccccccccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccffffffbbbbbbbbbbbbbbbfffffccccccccccccccccffffffffffffbbbbbfffffccccffffcccffffbbbbfffffffffccccccccccccccccfffcccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccfffffffccccffffcccccccccffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccfffffffbbbbbbbbbbbbbbbbffffffcccccccccccccccccffffffffffffbbbbbffffcfffccccccffffbbbbbbfbbfffffffffccccccccccffcccccccccfffffffffffffffccccccccccccccccccccccccccccccccccfffffffccccccfffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccffffffffffffccccccccccccffffffbbffffffffffffffffffffcccccccccccccccccccccffffffffffffffffffffffffffbbbbbbbbbbbbbbbbfffffccccccccccccccccccccfffffffffffbbbbbbffffcccccccccffffbbbbbbbbbbfffffffffffcccccfffffffffffffffffffffffffffffffcccccccccccccccccccccccffffffffcccccccccccccfffffbbbbbbbbffffffffffffffffffffffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffccccccccc
    cccffffffffffffcccccccccccccfffffbbbbbbbbffffffbbbbbfffffcccccccccccccfffffffcccccccccccccccccccffffffbbbbbbbbbbbbbbbbffffffccccccccccccccccccccccfffffffffbbbbbbfffcccccccccfffffbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccfffffffccccccccccccccccccccfffffbbbbbbbbbbbbbffffffffffffffffccccffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccfffffffff
    ccffffffffffffffffccccccccfffffbbbbbbbbbbbbbbbbbbbbbbfffffcccccccfffffccccccccccccccccccccccffffffffbbbbbbbbbbbbbbbbbfffffcccccccccccccccccccccccccccccffffbbbbbbfffccccccccfffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffbbbbbbbfffffffffccccccffffffffccccccccccccccccccccccccccfffffbbbbbbbbbbbbbbbbbffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcc
    cfffffbffbbffffffffccccccffffffbbbbbbbbbbbbbbbbbbbbbbbfffffffcfffcccccccccccccccccccccffffffccfffffbbbbbbbbbbbbbbbbbbffffffccccccccccccccccccccccccccccffffbbbbbbffffcccccccffffbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbffffffcffffccccccccccccccccccccccccccffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffcc
    fffffbbbbbbbfffffffffcccffffffbbbbbbbbbbbbbbbbbbbbbbbbbfffffffcccccccccccccccccfffffffcccccccffffffbbbbbbbbbbbbbbbbbffffcccffffccccccccccccccccccccccccfffbbbbbbbffffcccfffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffccccccccccccccccccccccccccfffffccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffc
    ffffbbbbbbbbbfffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffcccccccccfffffffccccccccccccffffffbbbbbbbbbbbbbbbbbbbffffcccccccfffffcccccccccccccccccccfffbbbbbbbbfffcffcccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffccccccccccccccccccccfffffccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccffffcccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffbbbbfffff
    fffbbbbbbbbbbffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffcccccfffcccccccccccccccccccfffffbbbbbbbbbbbbbbbbbbbbfffcccccccccccccffcccccccccccccccccfffbbbbbbbbffffccccfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffcccccccccccccccffffccccccccccccccccfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffccccfffffffffcccccccccccccccccccccccccccccccccccccccccffffffffffffffffbbbbbbbbbffffb
    bbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffccffccccccccccccffccccffffffffbbbbbbbbbbbbbbbbbbbbbfffcccccccccccccccffffffffffffffffffffbbbbbbbbffffcccfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffcccccccccccfffccccccccccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffcccccccccccccccccccccccccccccccccccffffffffffffffffffbbbbbbbbbbbfffbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffcfcccccccccccfffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccccccccccccccccccccccccccfffbbbbbbbbbffffccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffccccccffffccccccccccccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffcccccccccccccfffffffffffffffffffffcffffffffffbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccccccccccccccccccccccccccfffbbbbbbbbbffffccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffccffffcccccccccccccccccccccccccfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbfffffffccccccfffffcccccccccccccccccccccfffffffbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffccccccccccffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbffffccccccccccccccccccccccccccccccffffbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffccccccccccccccccccccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffccccccccccccccccccccccccffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffccccccccfffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffcccccccccccccccccccccccccccccffffbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffcccccccfffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccccccccccccccccccffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffcffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbfffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffcccffffcccccccccccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffcccccccccccccccccccccccccfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ffffffbbbbbbbbbbbbbbbbbbbbbbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffccccccffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffcfcccccccccccccccccccccccccccfffbbbbbbbbbbbbffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffcffcccccccccccccccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    fffffffbbbffffbbbbbbffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbfffffcccccffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccffcccccccccccccccccccccccccfffbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffcccccccccccccccccccccccffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffcccccccccccccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    8fffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbffffffcffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccffffcccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbffffffccccccccccccccccccccffcfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    8888fffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccffffccccccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffbbbbbfffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbfffffcccccccccccccccccfffcccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffccffffcccccccccccccffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    88888fffffffffffffffff888888888888888ffffffffffffffbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccccccffffccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffbfffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccccffccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffcccccfffffffffffffccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    888888888888888888888888888888888888888ffffffffffffbbbbbbbbbbbbbbbbbffffffbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbfffccccccccccccccccfffffffffffffffffbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffff88888888888888888ffffbbbbbbbbbbbbbbbbbbbbbffffffcccccccfffffcccccccffffbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffcccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    88888888888888888888888888888888888888888fffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffbbbbbbbbffffcccccccccccccccccccccccccccffffbbbbbbbbbbbbbbbbbbbffffffffffffffff888fffffffff88888888888888888888ffffbbbbbbbbbbbbbbbbbbbbbffffffccccccfccccccccccccffffbbbbbbbbbbbbfffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    888888888888888888888888888888888888888888888888fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffbbbbbbbffffcccccccccccccccccccccccccccffffbbbbbbbbbbbbbbbbbffffffffffffff88888888ffffff88888888888888888888888ffffbbbbbbbbbbbbbbbbbbbbbbfffffccccffcccccccccccffffbbbbbbbbbffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffccccccccccccccccccfffbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbb
    8888888888888888888888888888888888888888888888888fffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffff888ffffffffffbbbffffcccccccccccccccccccccccccccffffffbbbbbbbffffffffffffffff8888888888888888888888888888888888888888888fffffbbbbbbbbbbbbbbbbbbbbbbfffffccffccccccccccccffffbbbbfffffffffffffffffff88ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffccccccccccccccccffffbbbbbfffffffffffffffffbbbbbbbbbbbfff
    8888888888888888888888888888888888888888888888888fffffffffbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffff88888888ffffffffffbffffcccccccccccccccccccccccccccfffffffffffffffffffffffff888888888888888888888888888888888888888888888888ffffbbbbbbbbbbbbbbbbbbbbbbfffffcfccccccccccccccfffffbfffffffffffffff88888888fffffffffbbbbbbbbbbfffffffffffffbbbbbbbbbbbfffffcccccccccccccffffffffffffffffffffffffffffffffbbbbbbffff
    888888888888888888888888888888888888888888888888888ffffffffbbbbbbbbbffffffffffffffffffffffffffff888888888888ffffffffffffcfcccccccccccccccccccccccccffffffffffffffffffffffff888888888888888888888888888888888888888888888888888ffffbbbbbbbbbbbbbbbbbbbbbbfffffccccccccccccffffffffffffffffff8888888888888888ffffffffffffffffffffffffffffffffbbbbbbbbbbffffccccccfffffffcfffffffffffffffff8888ffffffffffffbfffffff
    88888888888888888888888888888888888888888ff88888888888fffffffbfffffffffffffffffffffffffffff888888888888888888888ffffffffccfccccccccccccccccccccccccffff8ffffffffffff8888888888888888888888888888888888888888888888888888888888fffffbbbbbbbbbffffbbbbbbbbbfffffccccccccfffcccfffffffffff888888888888888888888fffffffffffffffffffffffffffffffffffffbbbbffffffffffcccccccfffffffffffff8888888888888fffffffffffffff8
    888888888888888888888888888888888888888fffff88888888888fffffffffffffffffffffffffff88888888888888888888888888888888ffffffcccfcccccccccccccccccccccccfff888fffffff888888888888888888888888888888888888888888888888888888888888888fffffbbbfffffffffffbbbbbbbffffffcccccffccccccffffffff8888888888888888888888888fffffffffffffffff88888888fffffffffffffbbbfffffccccccccccffffffff88888888888888888888888ffffffffff88
    88888888888888888888885888888888888888fffffff888888888888fffffffffffff8888888888888888888888888888888888888888888888fffcccccfcccccccccccccccccccccffff8888888888888888888888888888888888888888888888888888888888888858888888888fffffffffffffffffffffbbfffffffffffcffccccccccfffff8888888888888888888888888888888fffffff888888888888888888ffffffffffffffffffffffffffffffff88888888888888888888888888888fffff88888
    88888888858888888888888888888888888888fffffff88888888888888fffff8888888888888888888888888888888888888888888888888888ffffcccccfccccccccccccccccccccffff8888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffcccccccccfffff8888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffff8888888888888888888888888888888888888888
    8888888888888888888888888888888888888ffffffff88888888888888888888888888888888888888888888888888888888888888888888888ffffccccccfccccccccccccccccccffff888888888888888888888888888888888888888888888888888888888888888888888888888fffffffff8888888ffffffffffffffffffffcccccccffff888888888888888888888888888888888888888888888888888888888888888888ffffff8fffffffffffffff88888888888888888888888888888888888888888
    88888888888888888888888888888888888888fffffff888888588888888888888888888888888888888888888888888888888888888888888888fffcccccccffccccccccccccccccffff8888888888888888888888888888888888888588888888888888888888888888888888888888ffff888888888888fffffff8888888fffffffcccccfff88888888888888888888888888888888888888888888888888888888888888888888888888888888ffff8888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888ffff8888888888888888888888888888888888888888888888888888888858888888888888888fffcccccccccffffccccccccccccfff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffcccffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffcccccccccccccfffffffffffffff88888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffccfffff8888888888888588888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffccccccccccccccccccccccccffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffcffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888fffccccccccccccccccccccccccfff8888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888885888888888888888888ffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888fffcccccccccccccccccccccccffff88888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffcccccccccccccccccccccccffff888888888888888888888888888888888888888888888888888888888888888888888888888ff888888888888888888888888888888888888ffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888
    888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888fffffcccccccccccccccccccccfff88888888888888888888888888888888888888888888888888888888888888888888888fffffccfffff8888888888888888888888888888888888ffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888
    888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffcffcccccccccccccccccccfff8888888888888888888888888888888888888888888888888888888888888888888ffffcccffffffcccfff888888888888888888888888888888888888888888888888888888888888888888588888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffcccffcccccccccccccccccfff88888888888888888888888888888888888888888888888888888888888888888ffcccccccccccccffcccff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffcccccffffffffcccccccfffff88888888888888888888888888888888888888888888888888888888888888fffcffccccccccccccccfffbbf8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffcccccccccccccffffffffcfff888888888888888888888888888888888888888888885888888888888888ffccccccfffffcccccccccffbbbbf888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffcccccccccccccccccccccfff8888888888888888888888888888888888888888888888888888888888ffffccccccccccffccffffffbbbbbbf888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888885888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffcccccccccccccccccccccfff8888888888888888888888888888888888888888888888888888888888fccffcccccccccffffbbbbbbbbbbbbf888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffcccccccccccccccccccccfff888888888888888888888888888888888888888888888888888888888fcccccfffcccfffbbbbbbbbbbbbbbbbbf88888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffcccccccccccccccccccccfff888888888888888888888888888888fff888888888888888888888888fccccccccfffbbbbbbbbbbbbbbbbbbbbbf8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffccccccccccccccccccccfff88888888888888888888888888888fffff88888888888888888888888fccffffffbbbbbbbbbbbbbbbbbbbbbbbfcf888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888885888888888888888888888888ffffccccccccccccccccccccfff88888888888888588888888888888fffff88888888888888888888888fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccf888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffccccccccccccccccccccfff88888888888888888888888888888fffff88888888888888888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfffcccf888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffcccccccccccccccccccfff88888888888888888888888888888fffff88888888888888888888888fbbbbbbbbbbbbbbbbbbbbbbbffffccccccf888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888ffffcccccccccccccccccccfff88888888888888888888888888888fffff88888888888888888888888fbbbbbbbbbbbbbbbbbbbbbffcccffcccccf888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888fffffff88888888888888888888888888888888888888888888888888888888888888888888888fffcccccccccccccccccccfff88888888888888888888888888888ffffff8888888888888888888888fbbbbbbbbbbbbbbbbbffffcccccccfccccf888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888fffffff88888888888888888888888888888888888888888888888888888888888888888888888ffffccccccccccccccccccfff88888888888888888888888888888ffffff8888888888888888888888fbbbbbbbbbbbbbffffcccccccccccfccccf888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888885888888888888888888888888888888888fffffff88888888888888888888888888888888888888888888888888888888888888888888888ffffffffcccccccccccccffff88888888888888888888888888888fffffff888888888888888888888fbbfffffffffffccffffffccccccccfccff888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888fffcffff88888888888888888888888885888888888888888888888888888888888888888888888fffffccfffffffffffffcfff88888888888888888888888888888fffffff888888888888888888888fbffccccfcccccccccccccfffccccccfcff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888fffcffff888888888888888888888888888888888888888888888888888888888888888888888888ffffccccccccccccccccfff88888888888888888888888888888fffcfff8888888888888888888888fcccccccfcccccccccccccccffcccccfbf888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888fffccfff8888888888888888888888888888888888888888888888888888888888888888888888888ffffcccccccccccccccfff88888888888888888888888888888fffcfff8888888888888888888888fccccccccfccccccccccccccccccfffbbf888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888ffffccfff8888888888888888888888888888888888888888888888888888888888888888888888888ffffcccccccccccccccffff8888888888888888888888888888fffcfff88888888858888888888888fccccccccffffccccccccffffffbbbbbf888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888
    888888888888888888888888888888888888888888ffffccfff88888888888888888888888888888888888888888888888888888888888888888888888888ffffccccccccccccccffff888888888888888888888888888ffffcfff888888888888888888888888fcccccccccccffffcfffbbbbbbbbbbf8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888fffcccfff88888888888888888888888888888888888888888888888888888888888888fffff8888888fffffccccccccccccccffff88888888888888888888888888ffffcfff888888888888888888888888fccccccffffffffffbbbbbbbbbbbbbf8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888fffcfcfff88888888888888888888888888888888888888888888888888888888888888ffffff8888888ffffccccccccccccccfffff8888888888888888888888888fffccfff8888888888888888888888888fcffffbbbbbbbbbbbbbbbbbbbbbbf85888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888ffffcfcfff88888888888888888888888888888888888888888888888888888888888888fffffff8888888fffcccccccccccccccffffff88888888888888888888888fffccfff8888888888888888888888888fffbbbbbbbbbbbbbbbbbbbbbbbfff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888ffffcfcfff88888888888888888888888888888888888888888888888888888888888888fffffff8888888ffffffccccccccccccfffffff8888888888888858888888fffccfff8888888888888888888888888888ffbbbbbbbbbbbbbbbbbffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888858888888888888888888888ffffccffff888888885888888888888888888888888888888888888888888888888888888ffffff8888888fffffcffffffffffffffffffff888888888888888888888fffccffff88888888888888888888888888888ffffffbbbbbbbffff888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888ffff88888888888888888888888888888888888888888888888888888888888858888888888888
    88888888888888888888888888888888888888888fffccccfff88888888888888888888888888888888888888888888888888888888888888888888888888888ffffcccccccccccccccfffffff8888888888888888888fffffcffff88888888888888888888888888888888888fffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff88888888888888888888888888888888888888888888888888888888888888888888888888
    fff88888888888888888888888888888ffffff888fffccccfff888888888888888888888888888888888888888888888888888888888888888888888888888888ffffcccccccccccccccffffff8888888888888888888ffffcfcfff8888888888888ffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888ffffff8888888888888888888888888888888888888888888888888888888888888888888888888
    ffffff88888888888888888888888fffffffffffffffccccfffffffffff888888888888888888888fffffff888888888888888888888888888888888888888888fffffcccccccccccccccfffff8888888888888888888fffccfcfff888888888888ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffff8888888888888888888888588888888888888888888888888888888888888888888888888
    fffffffffff888888888888888fffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888ffffcccccccccccccccfffff8888888888888888888fffccccfff8888888888fffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff88888888888888888888888888888888888888888888888888888888888888888888888888
    bffffffffffff88888888888ffffffffffbbfffffffffcccffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888fffcccccccccccccccccfff8888888888888888888fffccccfff888888888ffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888
    bbbbffffffffffffffffffffffffffffbbbbbbbbffffcfcccfffbbbbbfffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888ffffccccccccccccccccffff88888888888888888ffffccccfff8888888ffffffffbbbfffffff888888ffffffffffffffffffffff8888888888888888888888888888888888888888888888888888fffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbbfffffffffffffffffffffbbbbbbbbbbbfffccffcffffbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbfffffffff88888888888888888888888888888ffffccccccccccccccccffffff88fffff88888888ffffccccfff888888ffffffbbbbbbbffffffffffffffffffffffffffffffffffffff8888888888888ffffffffff888888888888888888888fffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbbbbffffffffffffffffbbbbbbbbbbbbbbfffcccccfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffff888888888fffffffffff888888888ffffccccccccccccccccfffffffffffff8888888fffffcccffffffffffffffbbbfffffffffffffffffffffffffffffffffffffffffffff888888888ffffffffffffff888888888888888888ffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffcccccfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffff88fffffcccccccccccccccffffffffffffffff888ffffccfccffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbffffffffff888888ffffffffffffffffff8888888888888fffffffffbbbfffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888ffffffff888888888
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffcccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffcccccccccccccccfffffffffbfffffffffffffcccffffffffffffffbfffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffff888ffffffbbbbbbfffffffff8888888888ffffffbbbbbbbffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888fffffffffffffff88888
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffcffcccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffbbffffffffffffffffcccccccccccccccffffbbbbbbfffffffffffffcccccfffbbbbbbbbbffffffffffffffffffffbbbbbbbbbbbbbbbbffffbbbbbbbfffffffffffffffbbbbbbbbbffffffff88888888ffffffbbbbbbbbffffccfffbbbbbfffffffff8888888888888fffff8888888888888888888888888888fffffffff8888888ffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffcccffcccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbfffffffffffccccccccccfffcffffbbbbbbbbffffffffffcccccffffbbbbbbbfffffccccccccccfffffffffbbbbbbbbfffffffffffbbbbbbbfffffffffffbbbbbbbbbbbbbbfffffff8888ffffffbbbbbbbbbffffcccffffbbbbbffffffffffffff8888fffffffffff88888888888fffffffffffffffffffffffff88ffffffffffbbbffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccfccfffffbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffccffffffffffccccfffffbbbbbbbbbbbbbbfffcccccfffffbbbbbffffffccccccccccccffffffffbbbbbbffffffffffffffbbbbbbfffffffffbbbbbbbbbbbbbbbbbffffffffffffffbbbbbbbbbbffffcccffffbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbffffffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffcccccccffcfffffbbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffcccccccccccccccccffffbbbbbbbbbbbbbffffccccccfffffbbbfffffccccccccccccccccfffffffffbffffffffffffffffbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbfffffffffffffbbbbbbbbbbfffccccfffffffffbbbbbbfffffffffffffffffbfffffffffffffffffffffffffffffffffbbbffffffffffffbbbbbbbbbbbbbbbbbbff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffcccccccccfcffffffffbbbbfffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbfffffbbbbbbbbbbbbbbbbbbbbffffcccccccccccccccccccffffbbbbbbbbbbbbffffcccccccfffffffffffccccccccccccccccccccffffffffffffcccccccfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbffffcccccffffffffffffffffbbbbffffffffbbbbbbbfffffffffffffffffbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffccccccccccccffffffffffffffffffcccfffffffffbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbffffcccccccccccccccccccffffffbbbbbbbfffffffccccccccfffffffffcfccccccccccccccccccccffffffffffcccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffccccccfffffffffffffffffbbbbbbbbbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffccccccccccccccffffffffffffffffccccccffffffffbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbffffcccccccccccccccccccccffffffffbbbfffffffcffffffffffffffffcccffffffffffffffffffffcfffffffccffccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffcfffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff
    bfffffffffffffbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccccccccffffffffffffccccccccccfffffbbbbbbbbbbbbbbbbbffffffcfffffffbbbbbbbbbbbbbfffffcccccccccccccccccccccfffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffccccccccccccccccccccffffffbbbbbbbbbbbbbbbbbbfffffffbbbbbbbbbbfffbffffbbbbbbbbbbbbbbbbbbbffffffffffffffffff
    ffffffffffffffffffbbbbbbbbbbbbbbbbbffffcccffccccccccccccccccccffffccfffcccccccccccfffffbbbbbbbbbbbbbbbbffffcccccffffffbbbbbbbbbbbbffffcccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffccccccccccccccccccccccfffffbbbbbbbbbbbbbbbbbfffffffffffffbbffffffffffcffbbbbbbbbbbbbbbbffffffffffffffffffff
    fffffcffffffffffffffbbbbbbbbbbbbbbfffffcccccfffccccccccccccccccccccccccccccccccccccffffffbbbbbbbbbbbbbffffcccccccffffffffbbbbbbbfffffccccccccccccccccccccccccccccffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffcccccccccccccccccccccccfffffbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbfffffffffffffffffffff
    fffcccccccccffffffffffbbbbbbbbbbbfffffcccccccccfffccccccccccccccccccccccccccccccccccffffffbbbbbbbbbbbfffffccccccccffffffffbbbbbbfffffcccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffccccccccccccccccccccfffcffffbbbbbbbbbbfffffffffffcfffffffffffffffffffffffbbbbbbbbbbbbffffffcccffffccfccccfc
    ffccccccccccccccfffffffffffbbffffffffcccccccccccccffcccccccccccccccccccccccccccccccccfffffbbbbbbbbbbbffffcccccccccfffffffffbbbbffffffffffcccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffcccccccccccccccffffcccccffffbbbbbbbbfffffffffcccccccccffffffccccccfffffffbbbffbbbbbffffffcccccccccffcccfcc
    fffcccccccccccccccffffffffffffffffffccccccccccccccccffcccccccccccccccccccccccccccccccffffffbbbbbbbbbffffcfffffffffcccffffffffffffffccccccffffffffccccccccccccfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffcccccccccffffbbbbbbbffffffccccccccccccccccccccccccccccfffffffbbbbbffffffccccccccccfccccfccc
    ffcffcccccccccccccccfffffffffffffffcccccccccccccccccccffffffffffffffffffffffffffffffffcfffffbbbbbbbfffffcccccccccccccfffffffffffffcccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccfffffffbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffcccccccccccccccccccccccccfffbbbbbbffffffcfccccccccccccccccccccccccccffffffbbbbbfffffffcccccccccfffccccfccc
    ffcccffccccccccccccccccccffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffbbbbbbfffffcccccccccccccccccffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccccccccffffffffbbbbbfffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffcccccccccccccccccccccccccfffbbbbbffffffcccffccccccccccccccffffffffffccfffffffffffffffcccccccfffccccccfcccc
    cfcccccfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffbbbbfffffccccccccccccccffffffccccfcccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffccccccccccccccccffffbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffccccccccccccccccccccccccfffffbbbbffffffcccccffffffffffffffcccccccccccccffffffffffffcccccccffccccccccfccccc
    cfccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffbfffffcccccccffffffffccccccccccfcccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccccccccffffbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffcccccccccccccccccccffffffcffffbbbbfffffccccccccccccccccccccccccccccccccccfffffffffcccccccffcccccccccfcccccc
    cfcccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffcccccccccccccccccccfccccccccccffffffccccccccccccccccccccccccccccccccfffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccfffffbffffcccfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffccccccccffffbbbfffffcccccccccccccccccccffffffffffffffffffffcccccccccffccccccccccfccccccc
    ccffccccccccccccccccffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffcccccccccccccccccccccccccccccfcccccccccccccccffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffbfffcccccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffcccccccccccccccccccccccccccffffbbfffffffffffffffffffffffffcccccccccccccccccccccccccccffcccccccccccfcccccccc
    ccccffccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccfffffcccccffcccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccffffccccccccccccfccccccccc
    cfffccfffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccffccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccfffffffccccccfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccccccccccccccccccfffccffffffffcccccccccccccccccccccccccccccccccccccccccffffcccccccccccccfffcccccccccc
    ccccffffcccccccffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcffffcccccccccccccccccccccccccccccfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccccccfffffffcccccccffffffffffffffbbbbbbbbbbbbbbbbbbfffcfffffffffffffffffffffffcccccffffffffccccccccccccccccccccccccccccccccccccfffffcccccccccccccffffccccccccccccc
    ccccccccffffcccccccccccccfffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccffffccccccccccccccccccccccccccccfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffcccccccccccffffffcccccccfffffffffffffffffffffffffffbbbbffffcccccccccccccccccccccccccccccffffffccccccccccccccccccccccccccccccffffffffccccccccccccccffffccccccccccccccccc
    ccccccccccccfffffcccccccccccccccffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccffffccccccccccffffcccccccccccccccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffcccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffbfffffcccccccccccccccccccccccccccccfffccccccccccccccfffffffffffffffffffcccccccccccccccccfffffcccccccccccccccfffffc
    cccccccccccccccccfffffffccccccccccccccccccffffffffffccccccccccccccccccccccccccccccccfffffffffcccccccccccccccccfffffffffffcccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffccccccccccccccccccccccccccccccccccffffccccccccccffffccfcfffffffffffffffffffffffccccccccccccccccccccccccccffffccfffffffffffffffcccccccccccccccccccccccccccccfffffffccccccccccccffffffffcccccc
    ccccccccccccccccccccccccfffffffffffffffcccccccccccccffffffffffffffffffffffffffffffffcccccffccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccfffffffffffccccffffffffcccccccccccccccccccccffffffccccccfcccfffcccccccccccccccccccccccccccccccffffffccccccccccccfffffffcccccccccccccc
    cccccccccccccccccccccccccccccccccccccccffffffffccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccffffcccccccccccccccffffffccccccccccccccfffffffccccccccccccfccccccfcccccccccccccccccccccccccccfffccccccccccccccffffccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccffffffffcccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccffccccfffccccccccccccccffcccfffffffffffffccccccccccccccccccccffcccccffcccccccccccccccccccffffffccccccccccccfffffccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffccccccccccccccccccccccccffffffffccccfffccccccccfffffffffffffffffffffffcfffffffccccccccccccccccccccccccfffccccffcccccccccffffffffccccccccccccccffffcccccccccccccccccccccccccccccc
    cccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccccccffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffcccccccccfffcccccccccccccccccccffffcccccccccccccccccccfffffccccccccccccccccccccccfffffffffffffffccccccccccccccccccffffcccccffffffffffffffffffffffffffffc
    ccccccfffffffffffffffcccccccccccccccccccccfffffffffcccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccccccccccccccccccccffccccccccccccccccccccccccccccffffcccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccc
    ffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffccccccccccccccccccccccffccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `, SpriteKind.Food)
Navetta_spaziale = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . 2 2 5 . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Navetta_spaziale, 100, 100)
Navetta_spaziale.setStayInScreen(true)
info.setLife(5)
info.setScore(0)
game.onUpdateInterval(randint(400, 700), function () {
    asteroide = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . c a f b c . . . . . . . 
        . . . . b f f 9 c c . . . . . . 
        . . . a a f b a b a c . . . . . 
        . . . c a 9 b b f f b . . . . . 
        . . . . b f f b f a b . . . . . 
        . . . . a f f b 9 b a . . . . . 
        . . . . . a b b c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    asteroide.setPosition(160, randint(0, 120))
    asteroide.setVelocity(randint(-50, -100), 0)
    if (info.score() > 24) {
        boss = sprites.create(img`
            ................................................................................
            ..............................fffffffffffffff...................................
            ...........................fff222222222222222ff.................................
            ........................fff22222222222222222222ff...............................
            .....................fff2222222222222222222222222ffff...........................
            ...................ff2222222222222222222222222222222fff.........................
            .................ff22222222222222222222222222222222222ff........................
            ...............fff2222222222222222222222222222222222222ff.......................
            ...............f22222222222222222222222222222222222222222ff.....................
            .............ff22222222222222222222222222222222222222222222f....................
            ............f2222222222222222222222222222222222222222222222f....................
            ...........f2222222222f22222222222222222222222f2222222222222ff..................
            ..........f22222222222ff222ff22222222222222222f22ffffff2222222f.................
            .........f222222ffff222ff2222ff22222222222f222f22f1111fff22222ff................
            ........ff22222ff11f2222f22222f222222222ff222f222f111111f2222222f...............
            ........f222222f111f2222ff2222222222222f2222ff222f111111ff2222222f..............
            .......f2222222f111f22222ff2222222222222222ff2222f1111111f2222222ff.............
            .......f2222222f111ff222222ffff2222222222fff2222f11111111f22222222f.............
            ......f2222222ff1111ff22222222ff2222222fff222222f11111111f222222222f............
            ......f2222222f111111fff2222222222222ff22222222ff11111111f2222222222f...........
            .....f22222222f11111ff5ff222222222222222222222ffff111111ff2222222222ff..........
            .....f22222222f111ff5555fff2222222222222ffff2ff555ff1111f222222222222f..........
            .....f222222222f11f555f5f1ffffff2222222f1ffffff5555f111ff222222222222f..........
            .....f222222222f11f55f55f111111f222222ff11111f55f55f111f2222222222222f..........
            .....f222222222ff1f5f555f111111f222222f111111f55f55ff1ff2222ff22222222f.........
            .....f2222222222fff5555ff111111f222222f111111f55f555fff22222fff2222222f.........
            .....f22222222222fffffff1111111f222222f111111f555555ff22222f11f2222222f.........
            .....f22222fff222222ff11111111f2222222ff11111ff5555ff22222ff11f2222222f.........
            .....f22222f11f2222222fffffffff22222222fff1111fffffff2222ff111f2222222f.........
            .....f22222f11fff222222222222222222222222fff11fffff22222ffff1ff222222ff.........
            .....f22222f11f1fff222222222222222222222222ffff222222222ff1ffff22222ff..........
            .....f22222ff1f111fffffffff222222f222222222222222222222f1f11ff22222ff...........
            .....f222222f1f11fff11111f1fffffffff2222222222f222222fff1f11ff2222ff............
            .....ff222222fffff1f1111ff111111ff11ffffffffffffffffffff1f1ff9222ff.............
            ......ff2222299f111ff11ffff1111ff1f1111ff1111f1ff1111f1fffff2922ff..............
            ........ff229922f111fff111f111ff11f111fff1111f11f111ff1ffff2299ff...............
            ........ffff9222ff11ff11111f11f111f11ff1ff11f1111ff1f111ff22f99.................
            .........ff992222ffff111111f1ff111ff1f111f1ff11111fff1ff222ff...................
            ..........99f222222ff111111fff11111f1f1111ff111111ffff2222ff....................
            .............ff222222fff1111ff11111ff11111ff11111ffff2222f......................
            ...............fff222222fff9ffffffffffffffffffffff22222ff.......................
            ..................ffff2222292222222222222222222229222ff....................f....
            ......................f222292222222222222222222229222f.....................ff...
            .....................ff222292222222222222222222299222f....................fff...
            ....................ff222229222222222222222222ff9f222ff.................fff2f...
            ...................ff222ff92222fff22222ff222222f9ff2222fff..........fffff222f...
            .................fff222ff992222ff222222fff222222f.f2222222ffffffffff22222222f...
            ................ff2222fff9f2222fff22222ffff22222fffff22222222222222222222222f...
            ............ffff222222ff..f2222fff22222ffffff2222f.fff2222222222222222222222f...
            ...........ff22222222ff...f2222fff22222ffffff22222f.ffff2222222222222222222ff...
            ......fffff222222222fff...f2222fff22222ffffff22222ff..ffff22222222222222222f....
            ...ffff222222222222fff....f2222fff222222ff.fff22222ff..fffff222222222222ffff....
            ..ff2222222222222ffff.....ff222ffff22222ff..ff22222ff....ffffffffffffffffff.....
            ..f222222222222ffff........f222f.ff22222ff..fff22222f.......ffffffffffffff......
            .ff222222222ffffff........f2222ff.ff2222fff.fff222222f.......ffffffffffff.......
            .f2222222fffffff..........f2222ff.ff22222ff..ff222222f..........................
            .f222ffffffffff...........f2222ff.ff22222ff..fff222222f.........................
            .ff2ffffffff.............ff2222ff.ff22222ff...ff222222f.........................
            ..ffffff.................f22222ff.ff22222ff...fff22222ff........................
            .........................f22222ff.fff2222ff...fff222222f........................
            .........................f22222ff.fff2222fff..fff222222f........................
            .........................f2222fff..ff22222ff...ff222222f........................
            ........................f22222fff..ff22222ff...fff22222f........................
            ........................f22222ff...ff222222f...ffff2222f........................
            .......................ff2222fff...fff22222f....fff2222f........................
            .......................f2222fff.....fff2222ff....fff222f........................
            ......................ff2222ff.......ff2222ff.....fff22f........................
            ......................f2222fff.......fff222ff.....ffff2f........................
            ......................f2222ff.........ff222ff.......ffff........................
            ......................f222fff.........fff22ff...................................
            .....................ff2222f...........ffffff...................................
            .....................f2222ff.............ffff...................................
            .....................fffff......................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            `, SpriteKind.Player)
        boss.setPosition(129, 60)
        asteroide.destroy()
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . f . . . . 2 . . f . . . . 
            . . . . f . . 2 2 . f . . 2 . . 
            . 2 2 . 2 . 2 2 . 2 . 2 2 2 . f 
            . . 2 2 2 2 2 2 2 2 2 2 2 . f . 
            . f . 2 2 2 4 2 4 2 4 2 2 2 . . 
            f . 2 2 4 5 2 5 1 5 2 4 4 2 2 . 
            . 2 2 4 2 1 5 5 5 5 5 2 2 2 . 2 
            2 . 2 2 4 1 5 5 5 5 1 5 4 2 . . 
            . . 2 4 5 5 1 5 5 1 5 5 2 2 . . 
            . . 2 2 2 5 5 5 5 5 5 4 2 2 2 2 
            . 2 2 2 4 2 2 5 1 5 4 2 2 2 2 . 
            . 2 . 2 2 4 4 4 2 4 2 2 2 . . . 
            2 . . 2 2 2 2 2 2 2 2 2 2 . f . 
            . . 2 . f . . . 2 . f . 2 2 . f 
            . . . f . f . 2 . . f . . . 2 . 
            . . f . . . 2 . . . . f . . . . 
            `, boss, -100, -25)
        pause(5000)
    }
})
game.onUpdateInterval(randint(700, 1000), function () {
    asteroide_grande = sprites.create(img`
        . . . . . . . . c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . c f c c a 9 a a c a c . . 
        . . c c f f f f a a a c a a 9 . 
        . . c c a f f c a a f f f a a c 
        . . c c a a a a b c f f f a a c 
        . c c c c a c c b a f c a a c c 
        c a f f c 9 c a b b 6 b b b c c 
        c a f f f f c c c 6 b 9 b a a c 
        c a a c f f c a 6 6 b b b a a c 
        c c b a a a a b 6 b b a b b 9 . 
        . c c b b b b b b b a c c b a . 
        . . c c c b c c c b a a b c . . 
        . . . . c 9 a c c b b b c . . . 
        . . . . c b b a a 6 b c . . . . 
        . . . . . . b 6 6 c c . . . . . 
        `, SpriteKind.Enemy)
    asteroide_grande.setPosition(160, randint(0, 120))
    asteroide_grande.setVelocity(randint(-50, -100), 0)
    if (info.score() > 24) {
        asteroide_grande.destroy()
    }
})
