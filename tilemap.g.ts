// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100006060606060606060606060606060606060606060606060601040405060606060606060606060606040606040606060606060606010401060406060406060606060606060406040604060604060606060606010405060406040606040606060606060406060604060406060406060606020405060601050604060604060606060606060601050606040606040606060606060101050606060406060406060606060601060606060604060604060104040606010606060104050606010405060406010506010405060606060606060604060406060406060601040404040404050601040405060606010606060606060606060606060606060104040404040403`, img`
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
`, [myTiles.transparency16,sprites.builtin.forestTiles1,sprites.dungeon.stairEast,sprites.dungeon.chestClosed,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.dungeon.floorLight0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
