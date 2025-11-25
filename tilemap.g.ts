// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`100010000a06060809090809090606060a0606060e01030602010306060a09090201030606070d0601080106080909080109010a0101050a01060109020c030901090106010606060109010801090108010901060401010105060109010601090108010907090908080604010509010901090b0806060201030609060a08010901090109090a010701010101010105090109010806060b060809090806060a06010901090802010902010309020c0c0c05080109060109090107010901060606060601090604010105060d08010602010101050906090609080601090106010706060a06060a06060a060401050904010101010d0906060a06090806060606060908090f`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . 2 . . . 2 2 2 2 2 . . . 2 
2 2 . 2 . 2 . 2 2 2 2 2 . 2 . 2 
. . . 2 . 2 . 2 . . . 2 . 2 . 2 
. 2 2 2 . 2 . 2 . 2 . 2 . 2 . 2 
. . . . . 2 . 2 . 2 . 2 . 2 . 2 
2 2 2 2 2 2 . . . 2 . 2 . 2 . 2 
2 2 . . . 2 2 2 2 2 . 2 . 2 . 2 
2 2 . 2 . . . . . . . 2 . 2 . 2 
2 2 . 2 2 2 2 2 2 2 2 2 . 2 . 2 
2 . . 2 . . . 2 . . . . . 2 . 2 
2 . 2 2 . 2 . 2 . 2 2 2 2 2 . 2 
2 . . . . 2 . 2 . 2 . . . . . 2 
2 2 2 2 2 2 . 2 . 2 . 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark3,sprites.dungeon.floorDark1,sprites.dungeon.floorDark0,sprites.dungeon.floorDark5,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.doorClosedWest,myTiles.tile1], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100005050505050505050505050505050505050505050505050501030304050505050505050505050505030505030505050505050505010301050305050305050505050505050305030503050503050505050505010304050305030505030505050505050305050503050305050305050505020304050501040503050503050505050505050501040505030505030505050505050101040505050305050305050505050501050505050503050503050103030505010505050103040505010304050305010405010304050505050505050503050305050305050501030303030303040501030304050505010505050505050505050505050505050103030303030306`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . 2 2 2 2 
2 2 2 2 2 2 2 2 . 2 2 . 2 2 2 2 
2 2 2 2 . . . 2 . 2 2 . 2 2 2 2 
2 2 2 2 . 2 . 2 . 2 2 . 2 2 2 2 
2 2 . . . 2 . 2 . 2 2 . 2 2 2 2 
2 2 . 2 2 2 . 2 . 2 2 . 2 2 2 2 
. . . 2 2 . . 2 . 2 2 . 2 2 2 2 
2 2 2 2 . . 2 2 . 2 2 . 2 2 2 2 
2 2 . . . 2 2 2 . 2 2 . 2 2 2 2 
2 2 . 2 2 2 2 2 . 2 2 . 2 . . . 
2 2 . 2 2 2 . . . 2 2 . . . 2 . 
2 . . 2 . . . 2 2 2 2 2 2 2 2 . 
2 . 2 2 . 2 2 2 . . . . . . . . 
2 . . . . 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles1,sprites.dungeon.stairEast,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.dungeon.floorLight0,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
