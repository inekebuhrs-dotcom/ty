namespace SpriteKind {
    export const Lava = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    sprites.destroy(Obstacle_1)
    music.stopAllSounds()
    info.changeScoreBy(1)
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(Hero, sprites.dungeon.doorClosedWest)
    scene.cameraFollowSprite(Hero)
    info.startCountdown(40)
    music.play(music.stringPlayable("A C5 A B C5 B A B ", 120), music.PlaybackMode.LoopingInBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    music.stopAllSounds()
    info.changeScoreBy(1)
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(Hero, sprites.dungeon.doorLockedSouth)
    scene.cameraFollowSprite(Hero)
    info.startCountdown(30)
    music.play(music.stringPlayable("E G C5 G B G A F ", 120), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    music.stopAllSounds()
    info.changeScoreBy(1)
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(Hero, sprites.dungeon.doorOpenNorth)
    scene.cameraFollowSprite(Hero)
    info.startCountdown(20)
    music.play(music.stringPlayable("C D F E C D F E ", 120), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Lava, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(Hero, sprites.dungeon.stairEast)
    music.wawawawaa.play()
    info.changeScoreBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    music.stopAllSounds()
    info.changeScoreBy(1)
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(Hero, sprites.dungeon.doorLockedWest)
    scene.cameraFollowSprite(Hero)
    music.play(music.stringPlayable("C5 B A B C5 B A B ", 150), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    music.stopAllSounds()
    game.gameOver(true)
})
let Obstacle_1: Sprite = null
let Hero: Sprite = null
Hero = sprites.create(img`
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . 8 . . 8 d 8 8 8 8 8 . . . . 
    . . . . . 8 d d 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 1 8 8 8 8 . . . 
    . . 8 8 8 8 8 1 1 1 8 8 1 1 . . 
    . 8 . . . . 8 1 1 f 1 1 f 1 . . 
    . . . . . 8 8 8 1 f d f f 1 . . 
    . . . . 8 8 8 d d d d d 8 . . . 
    . . . 8 . 8 8 8 8 d d 8 . . . . 
    . . . . 8 8 8 8 d d d 8 . . . . 
    . . . 8 . . 1 8 d d d 8 1 . . . 
    . . . . . . 1 1 8 d 8 1 1 . . . 
    . . . . . . . . 8 8 8 . . . . . 
    . . . . . . . . 8 . 8 . . . . . 
    . . . . . . . . 8 . 8 . . . . . 
    . . . . . . . 1 2 2 1 2 2 . . . 
    `, SpriteKind.Player)
Obstacle_1 = sprites.create(img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 4 
    4 4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 
    4 5 4 4 4 4 4 4 4 5 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 5 4 5 4 
    4 4 4 4 4 5 4 4 4 4 5 4 4 4 5 4 
    4 4 5 4 4 4 4 4 4 5 4 4 4 5 5 4 
    5 4 5 5 4 4 4 5 4 5 5 4 4 5 4 4 
    5 5 5 4 4 4 5 2 5 5 4 4 5 5 4 4 
    5 4 4 4 4 4 5 2 5 4 4 4 5 2 5 4 
    5 4 4 4 4 4 5 2 5 4 4 4 5 2 5 4 
    2 5 4 4 4 5 2 2 5 4 4 4 5 2 2 5 
    2 2 5 4 5 2 2 2 5 4 4 5 2 2 2 2 
    2 2 2 5 2 2 5 2 2 5 4 5 2 2 2 4 
    2 4 2 2 2 2 4 2 2 2 5 2 2 2 2 5 
    2 5 2 2 2 2 2 2 2 2 2 2 2 4 2 2 
    2 2 2 2 2 4 5 2 2 2 2 2 2 5 2 2 
    `, SpriteKind.Lava)
controller.moveSprite(Hero)
Obstacle_1.setPosition(120, 55)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(Hero, sprites.dungeon.stairEast)
scene.cameraFollowSprite(Hero)
info.startCountdown(60)
info.setScore(0)
music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.LoopingInBackground)
