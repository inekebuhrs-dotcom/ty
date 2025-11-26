namespace SpriteKind {
    export const Lava = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    sprites.destroy(Obstacle_1)
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(Hero, sprites.dungeon.doorClosedWest)
    scene.cameraFollowSprite(Hero)
    info.startCountdown(40)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(Hero, sprites.dungeon.doorLockedSouth)
    scene.cameraFollowSprite(Hero)
    info.startCountdown(30)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Lava, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(Hero, sprites.dungeon.stairEast)
    music.wawawawaa.play()
})
let Obstacle_1: Sprite = null
let Hero: Sprite = null
color.setColor(13, color.rgb(255, 255, 255))
Hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
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
