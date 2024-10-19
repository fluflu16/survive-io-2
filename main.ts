namespace SpriteKind {
    export const Projectile2 = SpriteKind.create()
    export const Gun = SpriteKind.create()
    export const Map = SpriteKind.create()
    export const rendering = SpriteKind.create()
    export const guibutton = SpriteKind.create()
    export const gun2 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    right = false
    DOWN = false
    UP = true
    LEFT = false
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start == 1) {
        if (AMMO_BRRRRRRRR > 0) {
            if (loaded == 1) {
                if (gun_type == 1) {
                    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    pause(2000)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    pause(1000)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    pause(100)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    AMMO_BRRRRRRRR = 10
                }
                if (gun_type == 2) {
                    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    pause(2000)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    pause(1000)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    pause(100)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    AMMO_BRRRRRRRR = 5
                }
                if (gun_type == 3) {
                    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    pause(2000)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    pause(1000)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    pause(100)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    AMMO_BRRRRRRRR = 32
                }
                if (gun_type == 4) {
                    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    pause(2000)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    pause(1000)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    pause(100)
                    music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    AMMO_BRRRRRRRR = 16
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gun, function (sprite, otherSprite) {
    if (otherSprite == revolver) {
        gun_type = 4
        AMMO_BRRRRRRRR = 6
        sprites.destroyAllSpritesOfKind(SpriteKind.Gun)
        max_mag_cap = 6
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("revolver aquired", 1000, false)
    }
    if (otherSprite == magnum) {
        gun_type = 1
        AMMO_BRRRRRRRR = 10
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("magnum aquired", 1000, false)
        sprites.destroyAllSpritesOfKind(SpriteKind.Gun)
        max_mag_cap = 10
    }
    if (otherSprite == shotgun) {
        gun_type = 2
        AMMO_BRRRRRRRR = 5
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("shotgun aquired", 1000, false)
        sprites.destroyAllSpritesOfKind(SpriteKind.Gun)
        max_mag_cap = 5
    }
    if (otherSprite == assault_rifle) {
        gun_type = 3
        AMMO_BRRRRRRRR = 32
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("assault rifle aquired", 1000, false)
        sprites.destroyAllSpritesOfKind(SpriteKind.Gun)
        max_mag_cap = 32
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shoot_true == 1) {
        if (loaded == 1) {
            if (gun_type == 4) {
                if (0 < AMMO_BRRRRRRRR) {
                    if (right == true) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            5 5 5 5 . . . . . . . . . . . . 
                            4 4 4 4 5 . . . . . . . . . . . 
                            e e e e . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 200, 0)
                    } else if (LEFT == true) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . e e e e 
                            . . . . . . . . . . . 5 4 4 4 4 
                            . . . . . . . . . . . . 5 5 5 5 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -200, 0)
                    } else if (UP == true) {
                        projectile = sprites.createProjectileFromSprite(img`
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
                            . . . . . . . 5 . . . . . . . . 
                            . . . . . . 5 4 e . . . . . . . 
                            . . . . . . 5 4 e . . . . . . . 
                            . . . . . . 5 4 e . . . . . . . 
                            . . . . . . 5 4 e . . . . . . . 
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -200)
                    } else if (DOWN == true) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . e 4 5 . . . . . . 
                            . . . . . . . e 4 5 . . . . . . 
                            . . . . . . . e 4 5 . . . . . . 
                            . . . . . . . e 4 5 . . . . . . 
                            . . . . . . . . 5 . . . . . . . 
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 200)
                    } else {
                    	
                    }
                    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    pause(500)
                    AMMO_BRRRRRRRR += -1
                }
            }
            if (gun_type == 1) {
                if (0 < AMMO_BRRRRRRRR) {
                    if (right == true) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            5 5 5 5 . . . . . . . . . . . . 
                            4 4 4 4 5 . . . . . . . . . . . 
                            e e e e . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 200, 0)
                    } else if (LEFT == true) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . e e e e 
                            . . . . . . . . . . . 5 4 4 4 4 
                            . . . . . . . . . . . . 5 5 5 5 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -200, 0)
                    } else if (UP == true) {
                        projectile = sprites.createProjectileFromSprite(img`
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
                            . . . . . . . 5 . . . . . . . . 
                            . . . . . . 5 4 e . . . . . . . 
                            . . . . . . 5 4 e . . . . . . . 
                            . . . . . . 5 4 e . . . . . . . 
                            . . . . . . 5 4 e . . . . . . . 
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -200)
                    } else if (DOWN == true) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . e 4 5 . . . . . . 
                            . . . . . . . e 4 5 . . . . . . 
                            . . . . . . . e 4 5 . . . . . . 
                            . . . . . . . e 4 5 . . . . . . 
                            . . . . . . . . 5 . . . . . . . 
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 200)
                    } else {
                    	
                    }
                    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    AMMO_BRRRRRRRR += -1
                }
            }
            if (gun_type == 2) {
                if (0 < AMMO_BRRRRRRRR) {
                    AMMO_BRRRRRRRR += -1
                    if (right == true) {
                        projectile = sprites.createProjectileFromSprite(img`
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
                            . . . 5 4 . . . . . . . . . . . 
                            . . 5 4 e . . . . . . . . . . . 
                            . 5 4 e . . . . . . . . . . . . 
                            5 4 e . . . . . . . . . . . . . 
                            . e . . . . . . . . . . . . . . 
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, -100)
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            5 5 5 5 . . . . . . . . . . . . 
                            4 4 4 4 5 . . . . . . . . . . . 
                            e e e e . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
                        projectile = sprites.createProjectileFromSprite(img`
                            . 5 . . . . . . . . . . . . . . 
                            e 4 5 . . . . . . . . . . . . . 
                            . e 4 5 . . . . . . . . . . . . 
                            . . e 4 5 . . . . . . . . . . . 
                            . . . e 4 . . . . . . . . . . . 
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 100)
                    } else if (LEFT == true) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . e . 
                            . . . . . . . . . . . . . e 4 5 
                            . . . . . . . . . . . . e 4 5 . 
                            . . . . . . . . . . . e 4 5 . . 
                            . . . . . . . . . . . 4 5 . . . 
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 100)
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . e e e e 
                            . . . . . . . . . . . 5 4 4 4 4 
                            . . . . . . . . . . . . 5 5 5 5 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 0)
                        projectile = sprites.createProjectileFromSprite(img`
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
                            . . . . . . . . . . . 4 e . . . 
                            . . . . . . . . . . . 5 4 e . . 
                            . . . . . . . . . . . . 5 4 e . 
                            . . . . . . . . . . . . . 5 4 e 
                            . . . . . . . . . . . . . . 5 . 
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, -100)
                    } else if (UP == true) {
                        projectile = sprites.createProjectileFromSprite(img`
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
                            . . . . . . . . . . . 4 e . . . 
                            . . . . . . . . . . . 5 4 e . . 
                            . . . . . . . . . . . . 5 4 e . 
                            . . . . . . . . . . . . . 5 4 e 
                            . . . . . . . . . . . . . . 5 . 
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, -100)
                        projectile = sprites.createProjectileFromSprite(img`
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
                            . . . . . . . 5 . . . . . . . . 
                            . . . . . . 5 4 e . . . . . . . 
                            . . . . . . 5 4 e . . . . . . . 
                            . . . . . . 5 4 e . . . . . . . 
                            . . . . . . 5 4 e . . . . . . . 
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                        projectile = sprites.createProjectileFromSprite(img`
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
                            . . . 5 4 . . . . . . . . . . . 
                            . . 5 4 e . . . . . . . . . . . 
                            . 5 4 e . . . . . . . . . . . . 
                            5 4 e . . . . . . . . . . . . . 
                            . e . . . . . . . . . . . . . . 
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, -100)
                    } else if (DOWN == true) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . 5 . . . . . . . . . . . . . . 
                            e 4 5 . . . . . . . . . . . . . 
                            . e 4 5 . . . . . . . . . . . . 
                            . . e 4 5 . . . . . . . . . . . 
                            . . . e 4 . . . . . . . . . . . 
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 100)
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . e 4 5 . . . . . . 
                            . . . . . . . e 4 5 . . . . . . 
                            . . . . . . . e 4 5 . . . . . . 
                            . . . . . . . e 4 5 . . . . . . 
                            . . . . . . . . 5 . . . . . . . 
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 100)
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . e . 
                            . . . . . . . . . . . . . e 4 5 
                            . . . . . . . . . . . . e 4 5 . 
                            . . . . . . . . . . . e 4 5 . . 
                            . . . . . . . . . . . 4 5 . . . 
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 100)
                    } else {
                    	
                    }
                    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
                    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
                    pause(1000)
                }
            }
            if (gun_type == 3) {
                if (right == true) {
                    if (AMMO_BRRRRRRRR >= 5) {
                        for (let index = 0; index < 5; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                5 5 5 5 . . . . . . . . . . . . 
                                4 4 4 4 5 . . . . . . . . . . . 
                                e e e e . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                        if (AMMO_BRRRRRRRR == 4) {
                            for (let index = 0; index < 4; index++) {
                                projectile = sprites.createProjectileFromSprite(img`
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    5 5 5 5 . . . . . . . . . . . . 
                                    4 4 4 4 5 . . . . . . . . . . . 
                                    e e e e . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
                                AMMO_BRRRRRRRR += -1
                                music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                            }
                        }
                        if (AMMO_BRRRRRRRR == 3) {
                            for (let index = 0; index < 3; index++) {
                                projectile = sprites.createProjectileFromSprite(img`
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    5 5 5 5 . . . . . . . . . . . . 
                                    4 4 4 4 5 . . . . . . . . . . . 
                                    e e e e . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
                                AMMO_BRRRRRRRR += -1
                                AMMO_BRRRRRRRR += -1
                                music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                            }
                        }
                        if (AMMO_BRRRRRRRR == 2) {
                            for (let index = 0; index < 2; index++) {
                                projectile = sprites.createProjectileFromSprite(img`
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    5 5 5 5 . . . . . . . . . . . . 
                                    4 4 4 4 5 . . . . . . . . . . . 
                                    e e e e . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
                                AMMO_BRRRRRRRR += -1
                                music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                            }
                        }
                        if (AMMO_BRRRRRRRR == 1) {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                5 5 5 5 . . . . . . . . . . . . 
                                4 4 4 4 5 . . . . . . . . . . . 
                                e e e e . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                } else if (LEFT == true) {
                    if (AMMO_BRRRRRRRR >= 5) {
                        for (let index = 0; index < 5; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . e e e e 
                                . . . . . . . . . . . 5 4 4 4 4 
                                . . . . . . . . . . . . 5 5 5 5 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 0)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 4) {
                        for (let index = 0; index < 4; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . e e e e 
                                . . . . . . . . . . . 5 4 4 4 4 
                                . . . . . . . . . . . . 5 5 5 5 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 0)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 3) {
                        for (let index = 0; index < 3; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . e e e e 
                                . . . . . . . . . . . 5 4 4 4 4 
                                . . . . . . . . . . . . 5 5 5 5 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 0)
                            AMMO_BRRRRRRRR += -1
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 2) {
                        for (let index = 0; index < 2; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . e e e e 
                                . . . . . . . . . . . 5 4 4 4 4 
                                . . . . . . . . . . . . 5 5 5 5 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 0)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 1) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . e e e e 
                            . . . . . . . . . . . 5 4 4 4 4 
                            . . . . . . . . . . . . 5 5 5 5 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 0)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                } else if (UP == true) {
                    if (AMMO_BRRRRRRRR >= 5) {
                        for (let index = 0; index < 5; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
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
                                . . . . . . . 5 . . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 4) {
                        for (let index = 0; index < 4; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
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
                                . . . . . . . 5 . . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 3) {
                        for (let index = 0; index < 3; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
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
                                . . . . . . . 5 . . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 2) {
                        for (let index = 0; index < 2; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
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
                                . . . . . . . 5 . . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 1) {
                        for (let index = 0; index < 1; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
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
                                . . . . . . . 5 . . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                . . . . . . 5 4 e . . . . . . . 
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                } else if (DOWN == true) {
                    if (AMMO_BRRRRRRRR >= 5) {
                        for (let index = 0; index < 5; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . . 5 . . . . . . . 
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
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 100)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 4) {
                        for (let index = 0; index < 4; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . . 5 . . . . . . . 
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
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 3) {
                        for (let index = 0; index < 3; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . . 5 . . . . . . . 
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
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                            AMMO_BRRRRRRRR += -1
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 2) {
                        for (let index = 0; index < 2; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . . 5 . . . . . . . 
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
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 1) {
                        for (let index = 0; index < 1; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . . 5 . . . . . . . 
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
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 1) {
                        for (let index = 0; index < 1; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . . 5 . . . . . . . 
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
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 100)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 2) {
                        for (let index = 0; index < 2; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . . 5 . . . . . . . 
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
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 100)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 3) {
                        for (let index = 0; index < 3; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . . 5 . . . . . . . 
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
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 100)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 3) {
                        for (let index = 0; index < 3; index++) {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . e 4 5 . . . . . . 
                                . . . . . . . . 5 . . . . . . . 
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
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 100)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                } else {
                	
                }
            }
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    right = false
    DOWN = false
    UP = false
    LEFT = true
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gun2, function (sprite, otherSprite) {
    if (otherSprite == revolver_2) {
        gun_type = 4
        AMMO_BRRRRRRRR = 6
        sprites.destroyAllSpritesOfKind(SpriteKind.gun2)
        max_mag_cap = 6
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("revolver aquired", 1000, false)
    }
    if (otherSprite == magnum_2) {
        gun_type = 1
        AMMO_BRRRRRRRR = 10
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("magnum aquired", 1000, false)
        sprites.destroyAllSpritesOfKind(SpriteKind.gun2)
        max_mag_cap = 10
    }
    if (otherSprite == shotgun2) {
        gun_type = 2
        AMMO_BRRRRRRRR = 5
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("shotgun aquired", 1000, false)
        sprites.destroyAllSpritesOfKind(SpriteKind.gun2)
        max_mag_cap = 5
    }
    if (otherSprite == ak2) {
        gun_type = 3
        AMMO_BRRRRRRRR = 32
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("assault rifle aquired", 1000, false)
        sprites.destroyAllSpritesOfKind(SpriteKind.gun2)
        max_mag_cap = 32
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    right = true
    DOWN = false
    UP = false
    LEFT = false
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(-1)
        pause(2000)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    right = false
    DOWN = true
    UP = false
    LEFT = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    let easter_powerup: Sprite = null
    let halloween_powerup: Sprite = null
    let summer_powerup: Sprite = null
    let christmas_powerup: Sprite = null
    if (otherSprite == health_pack) {
        sprites.destroy(otherSprite, effects.halo, 1000)
        if (!(info.life() > max_life)) {
            if (armor_status == 0) {
                info.setLife(5)
            }
            if (armor_status == 1) {
                info.setLife(8)
            }
            if (armor_status == 2) {
                info.setLife(11)
            }
            if (armor_status == 3) {
                info.setLife(14)
            }
            if (armor_status == 4) {
                info.setLife(17)
            }
            if (armor_status == 4) {
                info.setLife(20)
            }
        }
    }
    if (otherSprite == Armor_upgrade) {
        sprites.destroy(otherSprite, effects.blizzard, 1000)
        if (armor_status < 5) {
            info.changeLifeBy(3)
            armor_status += 1
            max_life += 3
        } else {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("armor level maxed out", 1000, false)
        }
    }
    if (otherSprite == ammopack) {
        sprites.destroy(otherSprite, effects.warmRadial, 1000)
        AMMO_BRRRRRRRR = max_mag_cap
    }
    if (otherSprite == christmas_powerup) {
        sprites.destroy(otherSprite, effects.blizzard, 1000)
        AMMO_BRRRRRRRR = 30
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("HOHOHO XMAS BOOST!")
    }
    if (otherSprite == summer_powerup) {
        sprites.destroy(otherSprite, effects.coolRadial, 1000)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        info.changeLifeBy(3)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("slurp")
    }
    if (otherSprite == halloween_powerup) {
        sprites.destroy(otherSprite, effects.disintegrate, 1000)
        music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
        armor_status += 1
        info.changeLifeBy(3)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("MUAHAHAHAHA!!!")
    }
    if (otherSprite == easter_powerup) {
        sprites.destroy(otherSprite, effects.coolRadial, 1000)
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("SUPRiSE!")
        info.changeLifeBy(5)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (gun_type != 4) {
        sprites.destroy(sprite, effects.spray, 500)
    }
    sprites.destroy(otherSprite, effects.disintegrate, 1000)
})
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (gun_type == 1 || gun_type == 3) {
        sprites.destroy(sprite, effects.ashes, 500)
    }
})
let tipnum = 0
let waiting = 0
let next_gun_spawn = 0
let map_rotation = 0
let ammo2: Sprite = null
let armor_2: Sprite = null
let medkit_2: Sprite = null
let foodies_2 = 0
let nextgunspqn2 = 0
let ammopack: Sprite = null
let Armor_upgrade: Sprite = null
let health_pack: Sprite = null
let ak2: Sprite = null
let shotgun2: Sprite = null
let magnum_2: Sprite = null
let revolver_2: Sprite = null
let assault_rifle: Sprite = null
let shotgun: Sprite = null
let magnum: Sprite = null
let max_mag_cap = 0
let revolver: Sprite = null
let LEFT = false
let UP = false
let DOWN = false
let right = false
let armor_status = 0
let AMMO_BRRRRRRRR = 0
let gun_type = 0
let projectile: Sprite = null
let loaded = 0
let max_life = 0
let shoot_true = 0
let start = 0
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
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
    `, SpriteKind.Player))
start = 0
let tipson = 0
shoot_true = 0
spriteutils.setLifeImage(img`
    2 . . . . . 2 
    . 2 . . . 2 . 
    . . 2 . 2 . . 
    . . . 2 . . . 
    . . 2 . 2 . . 
    . 2 . . . 2 . 
    2 . . . . . 2 
    . . . . . . . 
    `)
max_life = 5
info.setScore(0)
loaded = 0
tiles.setCurrentTilemap(tilemap`level4`)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666699969999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999969999999999999999999999999966999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999999999999996666669
    99999999999999fffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999969999999999999999999999996669
    999999999999fffffffff99999999999fffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
    99999999fffffffffffff99999999999fffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffff96999
    99999999fffffffffffff99999999999fffff999dd99999fffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff9999
    9999999ffffffffffffff99999999999fffff999dcb9999fffff99999999999999999ffffffff9999999999999999999999999999999999999999999999999999999999999999999999ffffffffff999
    9999999fffffffffff99999999999999fffff99ddcb9999fffff999999999ffffffffffffffff999fffff999999999999999999999999999999999999999999999999999999999999ffffffffffff999
    9999999fffffff999999999999999999fffff99dbcbb99ffffff999999999ffffffffffffffff999ffffff9999999999999999999999999999999999999999999999999996999999fffffffffffff996
    9999999ffffff9999999999966699999fffff99dcccc99ffffff999699999ffffffffffffffff999ffffff99969999ffffff999999999999999999999999999999999999999999fffffffffffffff999
    9999999ffffff999999999999669999ffffff9dbccccb9ffffff999999999ffffffffffffffff999ffffff999999ffffffff999999999999999999999999999999999ffffff99ffffff999fffffff999
    9999999fffffff99999999999669969fffff99dbbccbb9ffffff699999999ffffffffffff9999999ffffff9999ffffffffff99999fffff999999999699999999999ffffffff99fffff99999ffffff966
    9999999fffffffffff6999996699999fffff9ddcbcccbffffff699999999fffffffff699999999999fffff999fffffffffff99999fffff9999fffff99999699999fffffffff9ffffff99999ffffff969
    9999999ffffffffffff999999999999fffff9dbcccccbffffff999999999ffffffff9999969996999ffffff9ffffffffffff99999fffff9999fffff999999999fffffffffff9ffffff99966fffff9966
    69996999fffffffffffff9999999996fffffcdccbcbccffffff99ddddd99fffffffbb999999969999ffffff9ffffffffff9999999fffff9999fffff99999999ffffffffffffffffffff966ffffff9996
    999999999ffffffffffff9999999996ffffffcbbbcbbbffffff99dbbdb99fffffffbb999999999999fffffffffffffff999999999fffff9999ffffff99696ffffffffffff9fffffffffffffffff99999
    6969999999fffffffffff9999996999ffffffccccccccfffff969dcccb9dfffffffcb669699999969fffffffffffff99999699999fffff9999ffffff9666fffffffffff999ffffffffffffffff699999
    69999699999999ffffffff999999999fffffffccbbbbcfffff966dbcbb9dfffffffbb6699999999999fffffffffff999999999999fffff9996ffffff669fffffffffff999ffffffffffffffff6669996
    699999999999999fffffff969999999ffffffffbbbbfffffff966dbccb9dfffffffcc6699999999966fffffffffff999999999699fffff6996ffffff99ffffffffff99999fffffffffffffff66666666
    9999999999999999ffffff9999999999ffffffffcfffffffff666dcccbbdffffffccc6669669669966ffffffffff9999969999699fffff99966fffff9ffffffffff999966fffffffffffff6666666666
    99ffffff99999999ffffff9999999999ffffffffffffffffff6666bcbbccffffffcbb66666699996666ffffffff99666999969999fffff99999ffffffffffffff99666999ffffff66666666666666666
    99ffffffff999996ffffff69999999999fffffffffffffffff6666bccbccffffffcbb66966666996666ffffffff99669699969999fffff99999fffffffffffff669ff6999fffff666666666666666666
    99fffffffff99fffffffff999999999999fffffffffffffff66666cccbbbffffffccc66966999996996fffffff999999999669969fffff99996ffffffffffff6999f96996fffff666666ffffff666666
    99ffffffffffffffffffff9669999999999ffffffffffffb6666666bbbcbffffffbb666666669966699fffffff966999996669966fffff99966fffffffffff9966ff96666ffffff6666fffffff666666
    99ffffffffffffffffffff99969999999999fffffffffbbb66666666bcccffffffb6666666666669669fffffff666966696669669fffff996696fffffffff66666f666666fffffffffffffffff666666
    6669fffffffffffffffff999999699999999bbbbcccbbbbb66666666dcccffffff66666666666666666ffffff6666666666666666fffff666696ffffffff666666f666666fffffffffffffffff666666
    666666ffffffffffffff6699999966999999bccccccccccb66666666dccbffffff66666666666666666ffffff6666666666669666fffff6666666ffffff6666666f6666666fffffffffffff666666666
    6666666ffffffffff66669699969999999999cccccccccc966666666dcbbfffffc666666666666666666fffff6666666666666666fffff66666666fffff6666666f66666666ffffffffff66666666666
    66666666666666666666b9699999969999b696bcccccccb6f6666666ccbbbbcccc666666666666ff6666666666666666666666666666666666666666666666ff66ff66666666fffffff6666666666666
    666666666666666666dddbbb9dddd699ddb9bb9ccbbbbbfbbddddb666bbccbbbbcbb66666666666f66666666666666666666666666666666666666666666666ff66f666666f666666666666666666666
    666666666666666666dbbbbfdbbdbbbbbbbb64bccbbbbccdddbbbbbbbcbbbbbbbcc66bbbbbb6666f69666666666666666666666666666666666666666666666fff6ff66666f6666666666666666666ff
    b6666666b6b6b66666dbbbbfbbbbbbb6bbbb64bbbbbbbccbbcbbcbbcccbbbccbbccbb6b44466666f66666666666666666666666666666f6666666666666666666f66ff6666ff666666666666666fffff
    b6666666b6b6bb66b6dccccbfcccccbbcccb444bbcbccbcbbbbbcbbbccbbbccbbc4bb66bbb444b6666666666666666666666666666666ff6666666666666666666f66f6666ff6666666666666fffffff
    bb6b66bb64bb64bb66dbbbbbbbbbbbbbbcbb444bccbbbccbbcccbbbbccbbbbbbbc44464444bb4b6f66bf6666666666666666666666666ff6666666666666666666ffff6666f6666666666666ffffffff
    444466bb44464446b6bccbbbbcbcccbbccbc444bbbbbbcccccccccbbbcbbbbcccc444444bb44bbbfbb6f6666666666666666666666666f666f66666666666666666fff666bff66666666ffffffffffff
    44b6b4b4b4b6b4444b4bcccccccccccccccc44bcbbbbbcccc4b4cccbbbbcbbcccc4444446644444fbb6f6bbb666666666666666666666f66ff66666666666666666fff6bbfffffffffffffffffffffff
    444444b4444444444464cbbbbbbcbbbbbbcb444ccbbbbccc44f44ecbbcbbbbbbcc444444b444464f44ffbbbbbb666666666ffff666666f66f6666b666666666666bbff646fffffffffffffffffffffff
    4444446444444444446bccbccbbccbbbccc4ff4ccbccbcc444ff44ccbcbbbbbbcc4444444444446f44ff46bbbb66666666bfbbfff6666f6f6666666666666666b664ff44ffffffffffffffffffffffff
    4444b66b4444446664644ccbbbbbbbbccc4ff46ccbbbbcc444444bdbbccbbcbbccff44464444444f44f44466bb4b66b66b6fb4bff6bbbff66666666666666666b444ff4fffffffffffffffffffffffff
    4444466b44444466644444cccccccccccddddbbccbbbbcc44444dfdbbccbbcbbccffff464464644f44f4b4bbbbbbb666b4ff444fff44ff66bb6666666ff66b6bb4bfffffffffffffffffffffffffffff
    4444446644444444464464cccccccccccddbbbbccbbbbcc44bb4dfdbbccbbbbbcc44f4664444644fff4444b4b6666666bff646b4ff4ff6b44bb666666f666b44b64fffffffffffffffffffffffffffff
    4444444444444f44444466ddbbbbbbbbcbbccccccbbbbbcd44ddffdbbccbbbbbcc44444dd44db44fff444444bb6b66664ff44444fffffddbbb444b6b6fb6bbdbdb3ffffffffffffffffffffffffffffc
    4444464444444f444d4444dbbbccbbbbcbcccccccccbbccd3ddd4ffbbccccccbccddddd4dd3443fff34444bb6bd4d966444444ddffff463d4bd4dd6dff6666dfb4ffffffffffffffffffffffffffffcc
    4444464444444ff44ff4b4dccbccbbcccbcc44ccbbbbbbccdccccccccccbcbbbccddddd4ddd4ddfffbdddd4dd3ddbddddbd446ddffff444d44bdddddff4669dfddffffffffffffffffffffffffffffcc
    4444446444444ffddfd344dbcbbbbbcbbbcc4cccbbccbbcbbcccccccccbbbcbcccdd434ddddffdffdddddfddddd3dddddbddddddffff46d444d4ddddffd9dddfdfffffffffffffffffffffffffffffcc
    44444444444444f3bf44ffdbbbbbcbbbbbbccbbbcbccbbcbbbbcbbbcbbccccccccdddddddddfffffdddddffdddddddddddd444ddffffddddb4ddddddffd66ddfdffffffffffffffffffffffffffffccc
    44444444ddd444ff4f33ffcbbbbbccbbccbccbbbcbbbbbcbbcccbccccbccbbbbccdddd44ddd4fffdd4dddffd4dddddddddddddddffffddd44b4dddddffdddddffffffffffffffffffffffffffffffccc
    44444444dddddddfdf44f4bbccbbbbbbccbbbbbbbbbbbbbbbbccbbbcbbbbbbcbccd4ddddddddfffd4dddddffddddddddddddd6bdfffffdd44444dd4ddfdddddffffffffffffffffffffffffffffffccc
    44444444ddddddd4ff4ff4bbbbbbbcccbbbbbbbbccbbcccbbbbbbbbbcccbbccbccdd4dddddddfffddddddddfddd4ddddddddddddfffffdd44b4ddddddffdddffffffffffffffffffffffffffffffcccc
    6444444ddd3dd44dff6ff4bbbcbbcccccbbcccbbccbbccbbbcccbbbcccccbccbccddfdddddddfffdddd4dddffdffddddddddddddfffffddddddddddddffddfffffffffffffffffffffffffffffffcccc
    4344ddddddddd4ddff4fddcbbcbbccbccbbbcbbbbbbbbbbbbcccbccccbccbbbbccdfffddddddfffddddddddffdfdddddddffddddfffffdddddddddddffffffffffffffffffffffffffffffffffffcccc
    4444ddddb4ddddddfddfd4ccbcbbcccccbbbbbbbbbbbcccbbbbbbcccccccbccbccdffdddddddffffddddddddfffddddd4dffddddfffffddddddddfdfffffffffffffffffffffffffffffffffffffcccc
    4444deedebd4434efffdd4ccbbbbcccccbbbcccccbccccccbbbbbbbcccccbbbcccdffdddddddffffddddddddfffdddddddfdddddfffffddddfdddfdffffffffffffffffffffffffffffffffffffccccc
    4444befeebe4d4beff4444ccbcbbcccccbbccbbbbcccbcbccbbbbbbcccccbbccccddfffdddddffffdddddddddffddddddffdddddfffffdddffdddffffffffffffffffffffffffffffffffffffffccccc
    444eeeefeeeed4e4ff4444ccccbbcccccbbbbbbbccbcbcbcccbccbbcccccbcbbcc44dffdddddffffdddd44dddffddddddffdddddfffffdddffdddfffffffffffffffffffffffffffffffffffffdccccc
    fffeeffffeeeeeffffeffeccbbbbcccccbbbccbcccbcbcbccccccbbcccccbccbccdddffddddfffffddddd4dddfffdddddffdddddfffffdddffdfffffffffffffffffffffffffffffffffffffffdccccf
    effeffedeeffffffffffffccbccbcccccbbbbbbcccbcbcbcbccbcbbbccccbccbccdddffddd4fffffdddddddddfffdddbdffd4dddffffffddffffffffffffffffffffffffffffffffffffffffffdccccc
    beffffedffffffffffffffccbccbbbbbbcccbbccbcbcbcbcbccbbbcbbbbbbbbbbcdddfdddddffffffdddddddbfffdddbcffddddfffffffdfffffffffffffffffffffffffffffffffffffffffffcccccc
    dfffffffffffffffffffffccbbbbbbbbbccbbbccbcbcbcbcbccbbbccccbbbbbbccdddffdddffffffffdddd4dbffffddddffdddffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
    ffffffffffffffffffffffccbbbbbccbbbbbbbccbcbcbcbcbccbbbbbccbbcbbcccffdffdffffffffffffddccdffffdbddffd4fffffffffffffffffffffffffffffffffffffffffffffffffffffbbfccc
    efffffffffffffffffffffccbcbbcccbbbbbbcccbcbcbcbcbcccbbbbbbbbccbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccdbbbbbbbc
    ffffffffffffffffffffffccbccbccbbbbbcbcccbcbcbcbcbcccbbbbbcccbccbbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbcbbbbbbb
    ffffffffffffffffffffffccccbbbbbbbbccccccbcbcbcbcbcccbccbbbccbbcbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddbbcccbbbccc
    ffffffffffffffffffffffccccbbbbbcbbcbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcbbbbccccbbccc
    fffffffffffffffffffffcccccbbbbbcccbbbcccbcbcbcbcbcccbbbbcccbbbbccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbccccbbbbccccbcccc
    ffffffffffffffffffffffccccbbccbbccbbbcccbcbcbcbcbcccbccbcccbbcccbcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbcccbbbbbcccbbccc
    fffffffffffffffffffffbccbbccbbbbbbbbbcccbcbcbcbcbccccccbbbbbbbbbbcccbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccbbbbbccccbbccbbbcc
    fffffffffffffffffffffbcbbbcbbbbbbbbbbcccbcbcbcbcbcccbcbbbbbbbbbbbccccccbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbcccccbbbbbbccbbccbbccc
    ffffffffffffffffffffccbbbbbccbcbbbccbcccbcbcbcbcbccccccbbbcccbbbbcccccbbbcfcbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffcdbbcccccbbbbbbcccccbbbccc
    fffffffffcfffffffffccccccbbccbccbcccbcccbcbcbcbcbcccbcbbbcccbbbbbcccccccbbcccccbcfffcccffffffffffffffffffffffffffffffffffffffffffffffcdcbbbcccbbbbbbbbcccbbbbbcc
    ddcccffffffffffffcccccbcccbbcbbbbbbbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccccccbbcccccccccccbbcfcffffffffffffffffffffffffffffffffffffffffffcdbbbbbcccbbbbbbccbccccbbbbc
    bdddfcbffffffffcccccccbbbcccbbbbbbccbcccbcbcbcbcbcccbbbbbbbbbbbccccccccccbcbbcccccccbbbfcbfcffffffffffffffffffffffffffffffffffffffffcdbbbcccccbbbbbbcbcccccbbbbc
    bbbddbbcffffccccccccccbbcbbcccbbbccbbcccbcbcbcbcbcccbbcbbbbbbbbccccccccccccccccccccccccccbbbbcffffffffffffffffffffffffffffffffffffffcbbbcbccccbbbbbccbccccccbbbc
    bbbbdbbbbcccccccbccbcccccbbbbbbbbcbcccccbcbcbcbcbcccbbcbbbbbbccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffcbccbccccbbbbccbbcccbbccccc
    bbbbccccccccccbbbccccccccccccccccccccb44444bbbbbbcccbbcbb444444ccccbcccccccccccccccccccccccbbcbccbccccfffffffffffffffffffffffffffccffbbcbbcccccbbbccbccccbbbccbc
    bbbbbbbbccccccbbcccccbcccccccccccccbbc44444cccccbccccb444444444cccccccccbcbcccccccccccccbbbbbbbccccbbbbbfccccccffffffffffffffffcfccccbbbbbbbcccbbccbbccbbbbbbccc
    bbbccccccbcccccccccbbbbbcccccccccccbbc44444ccccccccc4444444444444ccccccccbcccccccccccccbccbbbbbbbccccbcbbbbbbbcccccffffffffcfcccfccccccbcccccccbccbbbbcbbbbbcccb
    bbccccccbbbbbcccccbbccbbbcccccccbbbbbb44444bbbbbbcc444444444444444ccccccccccccccccccccccccccccbbcccccbccbbbbbbbdbbbcfcccffcbbbbbbccccccbbcccccbbbbbbbccbbbbcccbb
    ccbddddbbbbbbbcccccbcccccccbccbcbccccc44444cccccbc44444444444444444ccbccccccccccccccccccccbbbccccccbbbcccccccbdbbbbcccccccbbbbbbbbbcccbbbbbbbbbbbbbbccbbbbbbbbbb
    ddbbbbccbbbbbbbbbbcccbbcccccccccbccccc44444cccccb4444444444444444444cccccccccccccccccccccccccccccbbbbbbbcccccbbbcccccccbccccbbbbbbcccccbbbbbbbbbbbbbbcccbbbbbbbb
    cbbbbbbbbbbbbbbbbbbcccbbbbcccccccccccc44444ccccc4444444444c444444444ccccccccccccbcccbccccccccccccccbbbbbbcccccccccbbbbbbbbccbbbbbbccccccccccbbbbbbbbbbcccccbbbbb
    cbbbccccccccccccbbbbbcbcccccbbcccccccc44444bbbbc44444444cccc44444444cccccccccbbcccbccccccccccccccccbbbbbcccccbbbbbbbbbbbbbbbccccbbbcccccccccccbbbbbbbcccccccbbbb
    bbbbccccccccbbbbbbbbbbbccbbbbbbbbccccc44444bcccc4444444ccccccc444444cccccccccccccccccccccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbcccccbbbbbccccccccbbcc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc44444ccccc444444ccbbbbbb444444cccccccbbccccccccccccccccccccccbbbbbbbbbccccbbbccbbbbbbbbbccccccbbbbbbbbbbbbbbbbcbbbbbcccbcc
    bbbbbbcccccccbbbbbbbbbbbcccccccccccccc44444ccccc444444cccccccc444444cccbcccccccccbbcccbcccccccccccbccccccbcccccccccccbbbbbbbbbbccccccccbbbbbbbbbbbbcccbbccccccbc
    bbbccbbbccccccccccbbbbbbbccccccccccccc44444ccccc444444cccccccc444444cccccccccccccbbbcccccbccccbbbbbcccccccbbccccccbbbbbbbbccccccccbccccccbbbbbbbbbbbccbbcccbbbbc
    bbbcdddddbbbbcccccccccccccbbbbbccccbbc44444ccccc444444ccccccc4444444cccccbcbbbbbbbcccccccccccccccccbbbbbbcccccbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbb
    bbbdcbbbbbbbbbbbbbbbbccccbbccccccccccc44444cccccc444444ccbbbb444444cccccccccccccbcccccccccccccccccbbbbbbbbcbbbbbbbbcccccccbcccccccccbbccccccccbbbbbbbbbbbbbbbbbb
    bdbbbbbbbbbbbbbbbbbbbbbccccccccccccccc44444cccccc44444444cccc444444cccccccccccccccccccccccccccccccbbbbbbbbbbbbbbccccccccbbbbbbccccccbbbbbbbccccbbbbbbbbbbbbbbbbb
    cddbccccbbbbbbbbbbbbbbcccccccccccccbbb44444cccccc444444444cc4444444cccccccccccccccccccccccccccccccccccbbbbbbbbccccccbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cdcccbcccbbbbbbbbbbbbbbcccccccbbbbbbcc44444cccccc44444444444444444ccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dcbbbbbbbbbbbbbbbbbbccccccbbbbbccccccc44444ccccccc4444444444444444ccbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dbbbbbbbbbbbccccccccccccccbbbbcccccccb44444ccccccb4444444444444444ccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbcccbbcbbbbbbbbccccccbbccccbbccc44444cccccccccc444444444444ccccbbcccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbcccccccccccccccccccccccccccc
    bbbbbbbccbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbcccccccc4444444444bbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccccccbbbccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccbbbbbbbbbbbbb
    bbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbccccbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
    ccccccccccccbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbcbbbbbbbbbcccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc
    cccccccccccccccccccccbdddddccccccccccbbbbbbbbbccccccccbbbcccccccccbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccc
    cccccccccbbbbbcccccccccccccccccccccbbbbbbbcccccccbbcccccccccccbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbccccc
    ccccccccccccbbccccccccccccbbbbbbbbbbbbbccccccbbbbbccccccbbbbbbbbbcbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
    bcccccccccccccccccccccccbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbcccccccbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbcccccccccc
    bccccccccccccccccbbbbbbbbbbbbbbbbeccccbbdbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbcccccccbbcccccccccccccbbbbb
    cccccccccccbbbbbbbbbbbbbbbbbbbbbbeeccbbd4bddbbdbbb3b444ddd444bbb344bbddbbcb44bbb44bb3444b444444b4be44ecccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbb
    bddddcbbbbbbbb444b4bbb44bb4b4bb4444dd44d44ddb4d3bddddddddd444ddddd44ddddddb33dd4444ddd44344444444e4e44ecbceeeccccbcccccccccccccccccccccbbccccccccccccccccbbbbbbb
    ddbbdd44b44b444444b444b444443444dddddddd4ddddddddddddddd4dddddddbdddddddddddddd44d44dddddd44dddddbd4dd3dd34b3bbdddccccccbbccccccccccccbbbbbbbbbbbbbbcccccbbbbbbb
    bbeee4b44444444dd4d33ddddddddde4dddddddddddddddddddddddddddddddd4d4ddd4dddddddddddd44ddddddddddddddddddddddd3dddbbbdbbdddbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b4b43dd44db4ddddd4d44dddddddddbd4ddddddddddddddddddddddddd4ddddddd4dddddddddddddddd44ddddddddddddddddddddd4ddddd44dddddddddbdbddddbdbbddddbbbbbbbbbbbbbbbbbccbbb
    dddd3ddddd4ddddd44dddd4dddddddddddddddddddddddddddddddddddd3dddddd4ddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd334db4d3dd4bbd44b3ddbbcbbbb
    d4dddbddddddddddd4dddd4ddddddddddddddd3dddddddddd444ddddddd4dddddddddddddddddddddddddddddddd4ddddddddddddddddddddd4ddddddddddddddddddddd3bd4ddd4dddd4444444ddddd
    ddddddddddddddddd4ddddddddddddddddddd4ddddddddddddd4ddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd4ddddddddddd4ddddddddddddddddddd4d44ddddd4dd44dddddd
    4ddddddd4d444dd4dd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddd4ddddddddd
    dddddddddd444ddddd3ddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddddddddddddddddddddddddddddddd4ddddddddd
    `)
controller.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 0)
pause(2000)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999559999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999995555555555555442222222999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999995555555544424555522222222222222999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999995555554444442222542255554444422222222999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999995555554444444222255542224555544444444222229999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999555544444444442224455444222445555444444444222299999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999111111119955554444444444222444554444422444455544444444442229999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999991dddddddd115554444444444442224444554444442244444555444444444422299999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999ddddd1111d555544444444444422244445544444444224444455544444444442222999999999999999999999999999999991111111999999999999999
    9999999999999999999999999999999999999dddd111111155544444444444442244444455444444444224444445554444444444222dd111111111199999999999999111111111111111111111111999
    999999999999999999999999999999999999ddd111111155544444444444442224444445544444444442244444445554444444444422211111111111111ddddddddddddddddd11111dd1111111111199
    99999999999999991111119999999999999dd111111115554444444444444222444444455444444444442244444445554444444444422211111111111dddddddddddddddddd11111dddddddddd111199
    9999999999999911111111111199999999dd11111111555444444444444422244444445544444444444442244444444555444444444442211111111dddd11111111111111111111dd1111ddddd111999
    9999999999999111dddddddddd1119999dd11111111554444444444444422244444444554444444444444224444444445554444444444422dd1111ddd111111111111111111111dd1111111111119999
    9999999999911ddddddd1dddddddd111ddd111111155444444444444442224444444445444444444444442244444444445554444444444422d111ddd1111111111111111111111dd1111111111199999
    999999999911ddd111111111111dddd1dd1111111554444444444444442244444444455444444444444444224444444444554444444444442211ddd11111111111111111111111ddd111111119999999
    9999999991ddd1111111111111111dd1d1111111554444444444444442244444444445544444444444444422444444444445544444444444422dd11111111111111111111111111ddd11111199999999
    999999991ddd111111111111111111ddd1111115554444444444444422444444444445444444444444444442244444444444554444444444442211111111111111111111111111111111119999999999
    999999911dd11111111111111111111dd1111155544444444444444224444444444455444444444444444442244444444444455444444444442211111199999999999999999999999999999999999999
    99999991dd111111111111111111111111111155444444444444442224444444444455444444444444444442244444444444445544444444422229999999999999999999999999999999999999999999
    9999991dd1111111111111111111111111111554444444444444442244444444444455444444444444444444224444444444444554444444444422999999999999999999999999999999999999999999
    9999911d11111111111111111111111111115544444444444444422444444444444554444444444444444444224444444444444554444444444422999999999999999999999999999999999999999999
    999991dd11111111111111111111111111115544444444444444422444444444444554444444444444444444224444444444444455444444444222299999999999999999999999999999999999999999
    999911d11111111111111111ddddd11111155444444444444444224444444444444554444444444444444444422444444444444445544444444442299999999999999999999999999999999999999999
    99991dd1111111111111111dddddddd111155444444444444442244444444444444554444444444444444444422444444444444445554444444444229999999999999999999999999999999999999999
    99991dd111111111111111ddd1111dddd1554444444444444442244444444444444544444444444444444444422444444444444444554444444444229999999999999999999999999999999999999999
    99991dd11111dd1111111ddd1111111ddd554444444444444422444444444444445544444444444444444444442444444444444444455444444444222999999999999999999999999999999999999999
    99999dd11111dd1111111dd1111111111d554444444444444422444444444444445544444444444444444444442244444444444444455444444444222999999999999999999999999999999999999999
    99999dd11111dd111111dd111111111115544444444444444424444444444444445544444444444444444444442244444444444444445544444444242299999999999999999999999999999999999999
    99999dd11111dd111111dd111111111115544444444444444255554444444444445544444444444444444444442244444444555554445544444444442299999999999999999999999999999999999999
    99999dd111ddd111111ddd111111111115544444444444444255555444444444445544444444444444444444444244444445555554444554444444422299999999999999999999999999999999999999
    999999dddddd1111111dd1111d11111155444444444444442255555555544444445544444444444445554444444224444455555554444554444444422229999999999999999999999999999999999999
    999999dddd111111111dd111dd1111115544444444444444225555555554444444554444444444455555554444422444445555544444445544444442422ddddddd199999999999999999999999999999
    99999999999999999999ddddd11111115544444444444444255555555554444444554444444444555555554444422444445554444444445544444444422dddddddd11999999999999999999999999999
    999999999999999999999ddd1dd1111554444444444444422555544444444444445544444444555555555544444224444455554444444455444444444221111111d11111119999999999999999999999
    9999999999999999999999999ddd111554444444444444422555444444444444445444444444555555444444444224444455555544444445444444444222111111111111111199999999999999999999
    99999999999999999999999999ddd1155444444444444442555544444444444444544444444455555444444444442444445555555444444554444444222211111111dd11111111199999999999999999
    999999999999999999999999999ddd15544444444444442255554444444444444454444444445554444444444444244444445555554444455444444224221111111ddd11111111111111dd1111999999
    99999999999999999999999999999dd544444444444444255554444444444444445444444555555444444444444422444444455555544444544444442422111111dd1111111111ddddddddddddd99999
    9999999999999999999999999999995544444444444444255554444444444444445544444555555555444444444422444444444555544444554444444422111111dd1111111dddddd11111111dddd999
    999999999999999999999999999999554444444444444425555444444444444444554444455555555544444444442244444444455554444455444444422221111dd111111dddd11111111111111ddd99
    9999999999999999999999999999995544444444444444255544444444444444445544444455555555444444444422445555555555544444554444444222211111ddddddddd11111111111111111ddd9
    99999999999999999999999999999955444444444444422555554444444444444455444444445554444444444444424455555555554444444544444442422111111dddddd11111111111111111111dd9
    9999999999999999999999999999995544444444444442255555555555444444445544444444555444444444444442245555555555444444455444444442211111111111111111111111111111111119
    9999999999999999999999999999995544444444444442245555555555444444445544444444555444442222222222224444444444444444455444444422211111111111111111111111111111111199
    9999999999999999999999999999995544444444444442244555555555444444445544444444444422222222222222222222444444444444455444444422221111111111111111111111111111111199
    9999999999999999999999999999995544444444444422244445555554444444445544444444442222222222222222222222224444444444445444444422221111111111111111111111111111111999
    9999999999999999999999999999995444444444422222222222244444444444445544444444422222222222222222222222222244444444445544444424221111111111111111111111111111199999
    999999999999999999999999999999544444444222222222222222222444444444454444444222222222222222222221111111222224444444554444444422111d111111111111111111111111999999
    999999999999999999999999999999544444442222222222222222222222444444455444441111111222222222111111111111111224444444554444444422ddddd11111111111111111111119999999
    99999999999999999999999999999954444422222222222222222222222224444445544444111111111111222111111111111111111444444445444444222ddd11111111111111111111111119999999
    999999999999999999999999999999544442222222222222222222229999994444455444411111111111111ef11111111111111111114444444554444222411111111111111111111111111199999999
    999999999999999999999999999999554422999999922222222222999999999944445444111111111111dddeddddd11111111111111dd444444554442241111111111111111111111111111999999999
    99999999999999999999999999999955422999999999992222e99999999999999144554411111dddddddddeddddddd1111111111111dd114444554422411111111111111111111111111119999999999
    9999999999999999999999999999995522999999999999999ee99999999999999994444ddddddddddd999e9999999d9991111111111d1111444554224111111111111111111111111111199999999999
    99999999999999999999999999999942299999999999999999eee9999999999999999ef9dd999999999995999999999999999999991d1111144552241111119999999999111111111111999999999999
    9999999999999999999999999999999ff99999999999999999999eee9999999999999ff9999999999999e9999999999999999999999dd111114422411111199999999999999999999999999999999999
    9999999999999999999999999999999df99999999999999999999999ee999999999995e999999999999e99999999999999999999999ddd1eee1224111111999999999999999999999999999999999999
    99999999999999999999999999999999eee99999999999999999999999eee999999999e99999999999e9999999999999999999999999deeeeef221111119999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeee999999999999999999eee99999999e999999999e99999999999999999999999eeeeddddff111111199999999999999999999999999999999999999
    999999999999999999999999999999999999999eeeeeeeeeee9999999999999eeee9999ee9999999e999999999999999999999eee999999dddddddd11999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999eeeeeee99999999999eee999ee99999e999999999999999999eeee9999999999999dddd99999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999eeeeeee9999999eeee9e9999e999999999999999eeee99999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999eeeeee99999ee9e99ee99999999eeeeeee999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999eeeee9eeee9e99999eeeee999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999eeeeeee9eeeee9999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999994444999999999999999999999999999999999999999999999999999999999999eeeee99999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999944444449999999999999999999999999999999999999999999999999999999999999ee9999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999944444449994449999999999999999944444444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999444444999994449999999999999999944444444444999944444449999999999999999999999999999999999999999999999999444999999999999999999999999999999999999999999999999
    9999999444499999994449999999999999999444444444444499444444444449999999999999999999999999999999999999999999944444999999999999999999999999999999999999999999999999
    9999999444999999994444444444449999999444499944444499444444444444999999999999999999999999999999999999999944444444999944499999999999999999999999999999999999999999
    9999999444999999994444444444449999999444999999444499444499444444999999999999999999999999999999999999994444444449999444499999999999999999999999999999999999999999
    9999999444999999944444444444449999994444999999444499444999999444999999999999999999994444444499999999444444444999994444499999999999999999999999999999999999999999
    9999999444999999944444499944449999994444444444444499444999944444999999444444499999944444444499999994444444999999994444999999999999999999999999999999999999999999
    9999999444499999944444999944449999994449444444444994444944444444999944444444499999444444444499999994444499999999994444999999999999999999999999999999999999999999
    9999999444444999944449999944499999994449444444449994444944444449994444444444499999444449944499999944449999999999994449999994449999999999999999999999999999999999
    9999999944444499944449999944499999994444999999999994449944444499944444449999999994444499944499999444449999999999944449999994449999999999999999999999999999999999
    9999999944444499944499999444499999994444999999999994449999999999944444999999999994444999444499999444499999999999444449999994449999999999999999999999999999999999
    9999999999444499944499999444499999994444449999999994444999999999944444499999999994444994444499994444999999999999444499999999999999999999999999999999999999999999
    9999999999999999999999999444999999999444444444999994444999999999944444444444449994449444444499994444999999999999444999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999944444444999994444999999999994444444444444994444444449994444449999999999994444999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999444444999999444499999999999994444444444444444444449994444444444449999994444999994449999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999444449999999999999999999444444444449999994444444444449999994449999994449999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999944444999999999999999999944444499999999999944444444449999994449999994449999944499999999999999999999999999999
    9999999999999999999999999999999999999999999999999999994444499999444999999999444444499999944499994449999999999944449999994449999944444444444999999999999999999999
    9999999999999999999999999999999999999999999999999999999444444999444999999999444444499999944499944449999999999944449999994449999944444444444999999999999999999999
    9999999999999999999999999999999999999999999999999999999944444444444999999944444944499999444499944449999999999444499999944449999444444444444499999999999999999999
    9999999999999999944444444999999999999999999999999999999994444444444999944444444944499994444499944499999999999444499999944449999444444999444499999999999999999999
    9999999999999999444444444999999999999999999999999999999999944444444999944444449944449944444499944499999999999444999999444499994444449999944499999999999999999999
    9999999999999994444444444999999999999999999999999999999999999999999999944444999944444444449999944499999999999444999994444499994444449999944499999999999999999999
    9999999999999994444999999999999999999999999994449999999999999999999999999999999994444444449999944499999999999444999994444999994444499999944499999999999999999999
    9999999999999994449999999999999999999999999994449999999999999999999999999999999999444444999999999999999999999999999944449999994444444499944499999999999999999999
    9999999999999994449999999999999999999999999994449999999999999999999999999999999999944449999999999999999999999999999944449999944444944449444499999999999999999999
    9999999999999994444999999999999999999999999944449999999999999999999999999999999999999999999444999999999999999999999944449999944449944444444499999999999999999999
    9999999999999994444999999999999999999999999944449999999999999999999999999999999999999999994444999999999999999999999999999999444499944444444499999999999999999999
    9999999999999999444499999999999999999999999944499999999999999999999999999999999999999999994444999999999999999999999999999999444499999444444999999999999999999999
    9999999999999999444449999999999999999999444444499999999999999999999999999999999999999999994444999944499999999999999999999999444999999999999999999999999999999999
    9999999999999999944444499999999999999999444444444444444449999999999999999999999999999999994449999944499999999999999999999999444999999999999999999999999999999999
    9999999999999999994444444999999999999999444444444444444449999999999999999999999999999999944449999944499999999999999999999999999999999999999999999999999999999999
    9999999999999999999444444449999999999999999444444444444449999999999999999999999999999999444449999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999994444444449999999999994444999999999999999999999999999999999999999999444499999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999944444449999999999994444999999999999999999999999999999444444499994444999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999444449999999999994449999999999999999999999999999999444444444444444999999999999999999999999999944444444499999999999999999999999999999999
    9999999999999944499999999994449999999999994449999999999999944499999999444999444444444444449999444999999999999999999999944444444444444499999999999999999999999999
    9999999999999944444999999444449999999999994449999999999999944499999994444999444944444444449999444999999999999999999999944444444444444444499999999999999999999999
    9999999999999944444444444444449999999999994449999999999999944499999944444999444999944444499994444999999444499999999999944449994444444444499999999999999999999999
    9999999999999994444444444444499999999999994449999999999999944499999944449999444999999444499994444994444444444444999999944449999999994444499999999999999999999999
    9999999999999999944444444444999999999999999999999999999999944499999944499999444999999444499944449444444444444444499999944444499999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999944499999444499999444499999444999944449444444494444444499999994444444999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999944499999444499999444499994444999444499444499999999444449999999444444444999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999944499994444499999944449994444999444494444999999999944449999999994444444499999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999444499994444999999944449944449994444994444999999999944449944449999944444499999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999444499994444999999994444944449994444994444444444444444449944444444444444499999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999444444444449999999994444444499994449994444444444444444449944444444444444499999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999444444444449999999999444444499994449999444444444444444499994444444444449999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999444444444449999999999444444999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
pause(2000)
info.setLife(5)
projectile = sprites.createProjectileFromSprite(img`
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
    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
gun_type = 1
AMMO_BRRRRRRRR = 10
let startanim = 1
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666.
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
tiles.setCurrentTilemap(tilemap`level10`)
let play_button = sprites.create(img`
    c c c b b c c c c c c c c c c c 
    9 c c c c c c 3 c c c b c c c c 
    9 9 c c c c c c c c c c c c 3 c 
    9 7 9 c c c c b c c c c c c c c 
    9 7 7 9 c c c c c c c b c c c c 
    9 7 7 7 9 c c c c c c c c c c c 
    9 7 7 7 7 9 c c c c c c 3 c c c 
    9 7 7 7 7 7 9 c c c c c c c c c 
    9 7 7 7 7 7 7 9 c c c c c b c c 
    9 7 7 7 7 7 9 c c c c c c c c 3 
    9 7 7 7 7 9 c c c c c c c c c c 
    9 7 7 7 9 c c c c c 3 c c 3 c c 
    9 7 7 9 c c c c c c 3 c c 3 c c 
    9 7 9 c c c c c c c 3 c 3 3 c c 
    9 9 c c c b c 3 c c c c c c c c 
    9 c c c c c c c c c b b c c c c 
    `, SpriteKind.guibutton)
let toutorial_area = sprites.create(img`
    c c c c c 4 4 4 4 4 4 4 c c c c 
    c c c c 4 4 2 2 2 2 2 4 4 c c c 
    c c c 4 4 2 2 2 2 2 2 2 4 4 c c 
    c c 3 4 2 2 4 4 4 4 4 2 2 4 c c 
    c b c 4 2 2 4 c c c 4 2 2 4 c c 
    c b c 4 4 4 4 c c c 4 2 2 4 c c 
    c c c c c c c 4 4 4 4 2 4 4 c c 
    c c 3 c c c 4 2 2 2 2 2 4 c c c 
    c 3 b c c 4 2 2 2 2 2 4 4 c c c 
    c c b c c 4 2 2 4 4 4 4 c c c 3 
    c b b c c 4 2 2 4 c c c c c c c 
    c c c c c c 4 4 c c c c c 3 c c 
    c c c c c 4 2 2 4 c 3 c c 3 c c 
    c 3 3 c c 4 2 2 4 c 3 c 3 3 c c 
    c c c c c c 4 4 c c c c c c c c 
    c c c c c c c c c c b b c c c c 
    `, SpriteKind.guibutton)
let the_range = sprites.create(img`
    c c c c 2 2 2 2 2 2 2 c c c b c 
    c b 2 2 1 1 1 1 1 1 1 2 2 c c c 
    c 2 1 1 2 2 2 2 2 2 2 1 1 2 c b 
    c 2 1 2 1 1 1 1 1 1 1 2 1 2 c c 
    2 1 2 1 1 2 2 2 2 2 1 1 2 1 2 c 
    2 1 2 1 2 1 1 1 1 1 2 1 2 1 2 c 
    2 1 2 1 2 1 1 2 1 1 2 1 2 1 2 c 
    2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 c 
    2 1 2 1 2 1 1 2 1 1 2 1 2 1 2 c 
    2 1 2 1 2 1 1 1 1 1 2 1 2 1 2 c 
    2 1 2 1 1 2 2 2 2 2 1 1 2 1 2 c 
    c 2 1 2 1 1 1 1 1 1 1 2 1 2 c c 
    c 2 1 1 2 2 2 2 2 2 2 1 1 2 c c 
    c c 2 2 1 1 1 1 1 1 1 2 2 c c c 
    c b c c 2 2 2 2 2 2 2 c c c b c 
    c c c c c c c c c c c b c c c c 
    `, SpriteKind.guibutton)
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
tiles.placeOnRandomTile(play_button, tiles.util.arrow2)
tiles.placeOnRandomTile(toutorial_area, tiles.util.arrow8)
let map = sprites.create(img`
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
    `, SpriteKind.Map)
let enemy_status = 1
loaded = 1
let foodies = 0
let ghostenemy = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    .....dddddc.........
    ....d211111c1111....
    ...d11211121c.......
    ...d11111211c.......
    ...b11111211d.......
    ...b21111121d.....b.
    ...b12211111d....bb.
    ...b11111111b.b.bb..
    ....b121111b111b....
    .....bbbbbb...b.b...
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Enemy)
sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
armor_status = 0
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), sprites.castle.rock2)
controller.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 100)
game.onUpdateInterval(randint(2000, 5000), function () {
    if (start == 1) {
        ghostenemy = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            .....dddddc.........
            ....d211111c1111....
            ...d11211121c.......
            ...d11111211c.......
            ...b11111211d.......
            ...b21111121d.....b.
            ...b12211111d....bb.
            ...b11111111b.b.bb..
            ....b121111b111b....
            .....bbbbbb...b.b...
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(ghostenemy, assets.tile`myTile6`)
    }
})
game.onUpdateInterval(10001, function () {
    nextgunspqn2 = randint(1, 4)
})
forever(function () {
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
})
forever(function () {
    if (foodies_2 == 1) {
        sprites.destroy(medkit_2, effects.fire, 1000)
        medkit_2 = sprites.create(img`
            . 7 . 7 . 7 7 7 . 7 7 7 . 7 . . 
            . 7 . 7 . 7 . . . 7 . 7 . 7 . . 
            . 7 7 7 . 7 7 . . 7 7 7 . 7 . . 
            . 7 . 7 . 7 . . . 7 . 7 . 7 . . 
            . 7 . 7 . 7 7 7 . 7 . 7 . 7 7 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . b b b b b b b b b b b b b b . 
            b 7 7 7 1 1 1 6 6 1 1 1 7 7 7 b 
            b 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            b 7 7 7 1 6 6 6 6 6 6 1 7 7 7 c 
            c 7 7 7 1 6 6 6 6 6 6 1 7 7 7 c 
            c 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            c 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            . c c c c c c c c c c c c c c . 
            `, SpriteKind.Food)
        foodies_2 = 0
        tiles.placeOnRandomTile(medkit_2, sprites.dungeon.chestOpen)
    }
    if (foodies_2 == 4) {
        sprites.destroy(medkit_2, effects.fire, 1000)
        medkit_2 = sprites.create(img`
            . 7 . 7 . 7 7 7 . 7 7 7 . 7 . . 
            . 7 . 7 . 7 . . . 7 . 7 . 7 . . 
            . 7 7 7 . 7 7 . . 7 7 7 . 7 . . 
            . 7 . 7 . 7 . . . 7 . 7 . 7 . . 
            . 7 . 7 . 7 7 7 . 7 . 7 . 7 7 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . b b b b b b b b b b b b b b . 
            b 7 7 7 1 1 1 6 6 1 1 1 7 7 7 b 
            b 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            b 7 7 7 1 6 6 6 6 6 6 1 7 7 7 c 
            c 7 7 7 1 6 6 6 6 6 6 1 7 7 7 c 
            c 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            c 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            . c c c c c c c c c c c c c c . 
            `, SpriteKind.Food)
        foodies_2 = 0
        tiles.placeOnRandomTile(medkit_2, sprites.dungeon.chestOpen)
    }
    if (foodies_2 == 2) {
        sprites.destroy(armor_2, effects.fire, 1000)
        armor_2 = sprites.create(img`
            . . . . . 7 7 . 7 . . . . . 7 . 
            . 7 . . 7 . 7 . 7 . 7 . 7 . 7 . 
            7 7 7 . . . 7 . 7 . 7 . 7 . 7 . 
            . 7 . . . . 7 . 7 . . 7 . . 7 . 
            . . . c c c . . . . c c c . . . 
            . . . c b c . . . . c b c . . . 
            . . . c b b c . . c b b c . . . 
            . . c c c c c c c c c c c c . . 
            . . c a a a a a a a a a a c . . 
            . . c c c c c c c c c c c c . . 
            . . c b b b b b b b b b b c . . 
            . . c c c c c c c c c c c c . . 
            . . c a a a a a a a a a a c . . 
            . . c c c c c c c c c c c c . . 
            . . c b b b b b b b b b b c . . 
            . . . c c c c c c c c c c . . . 
            `, SpriteKind.Food)
        foodies_2 = 0
        tiles.placeOnRandomTile(armor_2, sprites.dungeon.chestOpen)
    }
    if (foodies_2 == 3) {
        sprites.destroy(ammo2, effects.fire, 1000)
        ammo2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . c . . . . c . . . . . 
            . b b b b b b b b b b b b b b . 
            b d d 5 d d 5 d d 5 d d 5 d d b 
            b d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            b d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            . c c c c c c c c c c c c c c . 
            `, SpriteKind.Food)
        foodies_2 = 0
        tiles.placeOnRandomTile(ammopack, sprites.dungeon.chestOpen)
    }
    if (foodies_2 == 5) {
        sprites.destroy(ammo2, effects.fire, 1000)
        ammo2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . c . . . . c . . . . . 
            . b b b b b b b b b b b b b b . 
            b d d 5 d d 5 d d 5 d d 5 d d b 
            b d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            b d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            . c c c c c c c c c c c c c c . 
            `, SpriteKind.Food)
        foodies_2 = 0
        tiles.placeOnRandomTile(ammopack, sprites.dungeon.chestOpen)
    }
})
forever(function () {
    ghostenemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 60)
})
forever(function () {
    if (foodies == 1) {
        sprites.destroy(health_pack, effects.fire, 1000)
        health_pack = sprites.create(img`
            . 7 . 7 . 7 7 7 . 7 7 7 . 7 . . 
            . 7 . 7 . 7 . . . 7 . 7 . 7 . . 
            . 7 7 7 . 7 7 . . 7 7 7 . 7 . . 
            . 7 . 7 . 7 . . . 7 . 7 . 7 . . 
            . 7 . 7 . 7 7 7 . 7 . 7 . 7 7 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . b b b b b b b b b b b b b b . 
            b 7 7 7 1 1 1 6 6 1 1 1 7 7 7 b 
            b 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            b 7 7 7 1 6 6 6 6 6 6 1 7 7 7 c 
            c 7 7 7 1 6 6 6 6 6 6 1 7 7 7 c 
            c 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            c 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            . c c c c c c c c c c c c c c . 
            `, SpriteKind.Food)
        foodies = 0
        tiles.placeOnRandomTile(health_pack, sprites.dungeon.chestOpen)
    }
    if (foodies == 4) {
        sprites.destroy(health_pack, effects.fire, 1000)
        health_pack = sprites.create(img`
            . 7 . 7 . 7 7 7 . 7 7 7 . 7 . . 
            . 7 . 7 . 7 . . . 7 . 7 . 7 . . 
            . 7 7 7 . 7 7 . . 7 7 7 . 7 . . 
            . 7 . 7 . 7 . . . 7 . 7 . 7 . . 
            . 7 . 7 . 7 7 7 . 7 . 7 . 7 7 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . b b b b b b b b b b b b b b . 
            b 7 7 7 1 1 1 6 6 1 1 1 7 7 7 b 
            b 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            b 7 7 7 1 6 6 6 6 6 6 1 7 7 7 c 
            c 7 7 7 1 6 6 6 6 6 6 1 7 7 7 c 
            c 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            c 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            . c c c c c c c c c c c c c c . 
            `, SpriteKind.Food)
        foodies = 0
        tiles.placeOnRandomTile(health_pack, sprites.dungeon.chestOpen)
    }
    if (foodies == 2) {
        sprites.destroy(Armor_upgrade, effects.fire, 1000)
        Armor_upgrade = sprites.create(img`
            . . . . . 7 7 . 7 . . . . . 7 . 
            . 7 . . 7 . 7 . 7 . 7 . 7 . 7 . 
            7 7 7 . . . 7 . 7 . 7 . 7 . 7 . 
            . 7 . . . . 7 . 7 . . 7 . . 7 . 
            . . . c c c . . . . c c c . . . 
            . . . c b c . . . . c b c . . . 
            . . . c b b c . . c b b c . . . 
            . . c c c c c c c c c c c c . . 
            . . c a a a a a a a a a a c . . 
            . . c c c c c c c c c c c c . . 
            . . c b b b b b b b b b b c . . 
            . . c c c c c c c c c c c c . . 
            . . c a a a a a a a a a a c . . 
            . . c c c c c c c c c c c c . . 
            . . c b b b b b b b b b b c . . 
            . . . c c c c c c c c c c . . . 
            `, SpriteKind.Food)
        foodies = 0
        tiles.placeOnRandomTile(Armor_upgrade, sprites.dungeon.chestOpen)
    }
    if (foodies == 3) {
        sprites.destroy(ammopack, effects.fire, 1000)
        ammopack = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . c . . . . c . . . . . 
            . b b b b b b b b b b b b b b . 
            b d d 5 d d 5 d d 5 d d 5 d d b 
            b d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            b d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            . c c c c c c c c c c c c c c . 
            `, SpriteKind.Food)
        foodies = 0
        tiles.placeOnRandomTile(ammopack, sprites.dungeon.chestOpen)
    }
    if (foodies == 5) {
        sprites.destroy(ammopack, effects.fire, 1000)
        ammopack = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . c . . . . c . . . . . 
            . b b b b b b b b b b b b b b . 
            b d d 5 d d 5 d d 5 d d 5 d d b 
            b d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            b d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            . c c c c c c c c c c c c c c . 
            `, SpriteKind.Food)
        foodies = 0
        tiles.placeOnRandomTile(ammopack, sprites.dungeon.chestOpen)
    }
})
forever(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Gun)
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).overlapsWith(play_button)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.guibutton)
        map_rotation = randint(1, 5)
        controller.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 100)
        shoot_true = 1
        start = 1
        if (map_rotation == 1) {
            tiles.setCurrentTilemap(tilemap`level2`)
            next_gun_spawn = randint(1, 4)
            foodies = randint(1, 5)
        }
        if (map_rotation == 2) {
            tiles.setCurrentTilemap(tilemap`level7`)
            next_gun_spawn = randint(1, 4)
            foodies = randint(1, 5)
        }
        if (map_rotation == 3) {
            tiles.setCurrentTilemap(tilemap`level6`)
            next_gun_spawn = randint(1, 4)
            foodies = randint(1, 5)
        }
        if (map_rotation == 5) {
            tiles.setCurrentTilemap(tilemap`level8`)
            next_gun_spawn = randint(1, 4)
            foodies = randint(1, 5)
        }
        if (map_rotation == 4) {
            tiles.setCurrentTilemap(tilemap`level9`)
            next_gun_spawn = randint(1, 4)
            foodies = randint(1, 5)
        }
        tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), sprites.castle.rock2)
        scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        foodies = randint(1, 5)
        next_gun_spawn = randint(1, 4)
    }
})
forever(function () {
    info.setScore(AMMO_BRRRRRRRR)
})
forever(function () {
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).overlapsWith(toutorial_area)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("tips aktiviert", 1000, true)
        tipson = 1
        tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), sprites.castle.rock2)
    }
})
forever(function () {
    if (start == 1) {
        if (AMMO_BRRRRRRRR == 0) {
            if (gun_type == 1) {
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                pause(2000)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                pause(1000)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                pause(100)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                AMMO_BRRRRRRRR = 10
            }
            if (gun_type == 2) {
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                pause(2000)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                pause(1000)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                pause(100)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                AMMO_BRRRRRRRR = 5
            }
            if (gun_type == 3) {
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                pause(2000)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                pause(1000)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                pause(100)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                AMMO_BRRRRRRRR = 32
            }
            if (gun_type == 4) {
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                pause(2000)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                pause(1000)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                pause(100)
                music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                AMMO_BRRRRRRRR = 16
            }
        }
    }
})
forever(function () {
    if (info.life() >= 5) {
        spriteutils.setLifeImage(img`
            6 . 6 . 6 6 6 
            6 . 6 . 6 . 6 
            6 6 6 . 6 6 6 
            6 . 6 . 6 . . 
            6 . 6 . 6 . . 
            . . . 7 . . . 
            . . 7 7 7 . . 
            . . . 7 . . . 
            `)
    }
    if (info.life() == 4) {
        spriteutils.setLifeImage(img`
            7 . . . 7 . . 
            . 7 . 7 . . . 
            . . 7 . . . . 
            . 7 . 7 . . . 
            7 . . . 7 . . 
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            `)
    }
    if (info.life() == 3) {
        spriteutils.setLifeImage(img`
            5 . . . 5 . . 
            . 5 . 5 . . . 
            . . 5 . . . . 
            . 5 . 5 . . . 
            5 . . . 5 . . 
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            `)
    }
    if (info.life() == 2) {
        spriteutils.setLifeImage(img`
            4 . . . 4 . . 
            . 4 . 4 . . . 
            . . 4 . . . . 
            . 4 . 4 . . . 
            4 . . . 4 . . 
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            `)
    }
    if (info.life() == 1) {
        spriteutils.setLifeImage(img`
            2 . . . 2 . . 
            . 2 . 2 . . . 
            . . 2 . . . . 
            . 2 . 2 . . . 
            2 . . . 2 . . 
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            `)
    }
})
forever(function () {
    if (AMMO_BRRRRRRRR == 5) {
        if (waiting == 1) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("5 ammo remaining", 500, false)
            waiting = 0
        }
    }
    if (AMMO_BRRRRRRRR == 20) {
        if (waiting == 1) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("20 bullets remaining", 500, false)
            waiting = 0
        }
    }
    if (AMMO_BRRRRRRRR == 10) {
        if (waiting == 1) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("10 bullets remaining", 500, false)
            waiting = 0
        }
    }
    if (AMMO_BRRRRRRRR == 1) {
        if (waiting == 1) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("only 1 bullet remaining", 500, false)
            waiting = 0
        }
    }
})
forever(function () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 a a 3 3 a a f 3 f . . . 
        . . f 3 f f f 3 f f f 3 f . . . 
        . . f 3 3 3 f f f 3 3 f f f . . 
        . f d f f f f b b b f f c b f . 
        . f d f b b b b b f d d c b f . 
        . . f f b b f f f f d d c f f . 
        . . . f f f 3 3 3 3 f f f . . . 
        . . . f 3 3 3 f f 3 3 3 3 f . . 
        . . . f 3 3 f . . f f 3 3 3 f . 
        . . . f 3 3 f . . . . f 3 3 3 f 
        . . . . f f f . . . . . f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 a a 3 3 a a f 3 f . . . 
        . . f 3 f f f 3 f f f 3 f . . . 
        . . f 3 3 3 f f f 3 3 f f f . . 
        . f d f f f f b b b f f c b f . 
        . f d f b b b b b f d d c b f . 
        . . f f b b f f f f d d c f f . 
        . . . f f f 3 3 3 3 f f f . . . 
        . . . f 3 3 3 f f 3 3 3 3 f . . 
        . . . f 3 3 f . . f 3 3 3 f . . 
        . . . f 3 3 f . . f 3 3 3 f . . 
        . . . . f f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 3 3 3 3 3 3 3 f . . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 a a 3 3 a a f 3 f . . 
        . . . f 3 f f f 3 f f f 3 f . . 
        . . . f 3 3 3 f f f 3 3 f . . . 
        . f . f f f b b b f f c b f . . 
        f d f b b b b b b b f c b b f . 
        f d f f b f f f f b f c c b b f 
        . f . . f 3 3 3 3 f f f f c d f 
        . . . f 3 3 3 f f f 3 3 f f f f 
        . . . f 3 3 f . . f 3 3 f . . . 
        . . . . f 3 3 f . f 3 3 f . . . 
        . . . . . f f . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 3 3 3 3 3 3 3 f . . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 a a 3 3 a a f 3 f . . 
        . . . f 3 f f f 3 f f f 3 f . . 
        . . . f 3 3 3 f f f 3 3 f . . . 
        . f . f f f b b b f f c b f . . 
        f d f b b b b b b b f c b b f . 
        f d f f b f f f f b f c c b b f 
        . f . . f 3 3 3 3 f f f f c d f 
        . . . . f 3 3 f f f 3 3 f f f f 
        . . . . f 3 3 f . f 3 3 f . . . 
        . . . . f 3 3 f . f 3 3 f . . . 
        . . . . . f f . . . f f . . . . 
        `],
    50,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
forever(function () {
    if (next_gun_spawn == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Gun)
        magnum = sprites.create(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ..........ff....................
            .........f33f...................
            .........f333f..................
            .........ff333f.................
            ..........ff333f................
            ...........ff333f...............
            ............ff333f..............
            .............ff333f.............
            .............f3f33bf............
            ..............f3fb3bf...........
            ...............f3f3b3f..........
            ................f3fb3bf.........
            .................f3f3b3f........
            ................fdd3fb3ff.......
            ................fddeeff.........
            ...............fddeeeef.........
            ..............ffdeeeef..........
            ..............fddeeef...........
            ..............fdeeeef...........
            ...............feeeef...........
            ................feef............
            .................ff.............
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.Gun)
        tiles.placeOnRandomTile(magnum, sprites.dungeon.floorDarkDiamond)
        scaling.scaleByPercent(magnum, -50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
    if (next_gun_spawn == 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Gun)
        shotgun = sprites.create(img`
            .f3f............................
            .fb3f...........................
            ..fb3f..........................
            ...fb3f.........................
            ...fbb3f........................
            ....fbb3f.......................
            .....fbb3f......................
            .....f3bb3f.....................
            ......ffbb3f....................
            .....feefbb3f...................
            ......feefbb3f..................
            .......feefbb3f.................
            ........feefbb3f................
            .........fef3bb3f...............
            ..........ff3b333f..............
            ...........f33f333f.............
            ...........f3fff333f............
            ............f3fff333f...........
            .............f3f33ff3f..........
            ..............f33feef3f.........
            ...............f3feef3f.........
            ................feeefff.........
            ................feeeef..........
            ................feeef...........
            ................feee3f.......f..
            ................feee34ff....fef.
            .................fee3243f..feeef
            ..................fe22245ffeeeef
            ..................f2223325eeeeee
            ...................f2f32225eeeee
            ....................ff222eeeeeef
            ......................f2ffeeeff.
            `, SpriteKind.Gun)
        tiles.placeOnRandomTile(shotgun, sprites.dungeon.floorDarkDiamond)
        scaling.scaleByPercent(shotgun, -50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
    if (next_gun_spawn == 3) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Gun)
        assault_rifle = sprites.create(img`
            3bcf............................
            f3bcf...........................
            .f3bcf..........................
            .fb3bcf.........................
            .fb.3bcff.......................
            .fb..3bcff......................
            ..fb..ffeef.....................
            ...fbfee.eef....................
            ....fde.eeeef...................
            ....fdeeee.eef..................
            .....fdee.eeeef.................
            .....fdeeeeeeeff................
            ......fdeeeeff3bf...............
            .......fdeff3333bf..............
            ........ff3333f33bf.............
            .........f333f3f33bf............
            .........ff3f3f3f33bf...........
            .......ffbbf3f3f3f33bf..........
            ......fbbccbf3f3fff33bf.........
            ....ffbccbbbbf3fff3333bf........
            ...fbbcbbbbccbf3f333333bf.......
            ...fccbbbccbbcff333333bbbf......
            ...fbbbbcbbbcf..f333bb33eef.....
            ...fbbccbbbcf....fbb3333eeef....
            ...fbcbbbbcf.....ff3333eefeef...
            ...fccccccf......f3333fdeffeef..
            ...fffffff.......f3333fdef.feef.
            ................f33333fdef..feef
            ................f3333ffdef.feef.
            ...............f3333f.fdeffeef..
            ...............f333f..fdeeeef...
            ................ffff...fffff....
            `, SpriteKind.Gun)
        tiles.placeOnRandomTile(assault_rifle, sprites.dungeon.floorDarkDiamond)
        scaling.scaleByPercent(assault_rifle, -50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
    if (next_gun_spawn == 4) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Gun)
        revolver = sprites.create(img`
            ................................
            ................................
            .....f..........................
            ....f3f.........................
            .....f3f........................
            ......f3f.......................
            .......f3f......................
            ........f3f.....................
            .........f3f....................
            ..........f3f...................
            ..........f33f..................
            ...........f33f.................
            ...........f3f3f................
            ...........ffbf3f...............
            ...........fbbbf3f..............
            ............fbbbf3f.............
            .............fbf33ff............
            ..............f33eeef...........
            ..............f3eeef............
            ..............ffeeef............
            ...............feeef............
            ..............feeef.............
            ..............feeef.............
            .............feeef..............
            ..............fff...............
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.Gun)
        tiles.placeOnRandomTile(revolver, sprites.dungeon.floorDarkDiamond)
        scaling.scaleByPercent(revolver, -50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
    next_gun_spawn = 0
})
forever(function () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 3 3 3 3 3 3 3 3 f f . . 
        f c f f f f f f f f f f f c f . 
        f c f b b b b b b b b b f c f . 
        . f f b b b b b b b b b f c f . 
        . . f b b b b b b b b b f f . . 
        . . f f f f f f f f f f f . . . 
        . . . f 3 3 3 f . f 3 3 3 f . . 
        . . . . f f f . . f 3 3 3 f . . 
        . . . . . . . . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 3 3 3 3 3 3 3 f . . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . f f 3 3 3 3 3 3 3 3 3 f f . 
        . f c f f f f f f f f f f f c f 
        . f c f b b b b b b b b b f c f 
        . f c f b b b b b b b b b f f . 
        . . f f b b b b b b b b b f . . 
        . . . f f f f f f f f f f f . . 
        . . . f 3 3 3 f . . f 3 3 3 f . 
        . . . f 3 3 3 f . . . f f f . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 3 3 3 3 3 3 3 f . . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . f f 3 3 3 3 3 3 3 3 3 f . . 
        . f c f f f f f f f f f f f f . 
        . . f f b b b b b b b b b f f . 
        . . . f b b b b b b b b b f . . 
        . . . f b b b b b b b b b f . . 
        . . . f f f f f f f f f f f . . 
        . . f 3 3 3 f . . . f f f f . . 
        . . f 3 3 3 f . . f 3 3 3 3 f . 
        . . . f f f . . . . f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 3 3 3 3 3 3 3 f . . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . f f 3 3 3 3 3 3 3 3 3 f . . 
        . f c f f f f f f f f f f f f . 
        . . f f b b b b b b b b b f f . 
        . . . f b b b b b b b b b f . . 
        . . . f b b b b b b b b b f . . 
        . . . f f f f f f f f f f f . . 
        . . f 3 3 3 f . . . f f f f . . 
        . . f 3 3 3 f . . f 3 3 3 3 f . 
        . . . f f f . . . . f f f f . . 
        `],
    50,
    characterAnimations.rule(Predicate.MovingUp)
    )
})
forever(function () {
    if (nextgunspqn2 == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.gun2)
        magnum_2 = sprites.create(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ..........ff....................
            .........f33f...................
            .........f333f..................
            .........ff333f.................
            ..........ff333f................
            ...........ff333f...............
            ............ff333f..............
            .............ff333f.............
            .............f3f33bf............
            ..............f3fb3bf...........
            ...............f3f3b3f..........
            ................f3fb3bf.........
            .................f3f3b3f........
            ................fdd3fb3ff.......
            ................fddeeff.........
            ...............fddeeeef.........
            ..............ffdeeeef..........
            ..............fddeeef...........
            ..............fdeeeef...........
            ...............feeeef...........
            ................feef............
            .................ff.............
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.gun2)
        tiles.placeOnRandomTile(magnum_2, sprites.dungeon.floorDarkDiamond)
        scaling.scaleByPercent(magnum_2, -50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
    if (nextgunspqn2 == 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.gun2)
        shotgun2 = sprites.create(img`
            .f3f............................
            .fb3f...........................
            ..fb3f..........................
            ...fb3f.........................
            ...fbb3f........................
            ....fbb3f.......................
            .....fbb3f......................
            .....f3bb3f.....................
            ......ffbb3f....................
            .....feefbb3f...................
            ......feefbb3f..................
            .......feefbb3f.................
            ........feefbb3f................
            .........fef3bb3f...............
            ..........ff3b333f..............
            ...........f33f333f.............
            ...........f3fff333f............
            ............f3fff333f...........
            .............f3f33ff3f..........
            ..............f33feef3f.........
            ...............f3feef3f.........
            ................feeefff.........
            ................feeeef..........
            ................feeef...........
            ................feee3f.......f..
            ................feee34ff....fef.
            .................fee3243f..feeef
            ..................fe22245ffeeeef
            ..................f2223325eeeeee
            ...................f2f32225eeeee
            ....................ff222eeeeeef
            ......................f2ffeeeff.
            `, SpriteKind.gun2)
        tiles.placeOnRandomTile(shotgun2, sprites.dungeon.floorDarkDiamond)
        scaling.scaleByPercent(shotgun2, -50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
    if (nextgunspqn2 == 3) {
        sprites.destroyAllSpritesOfKind(SpriteKind.gun2)
        ak2 = sprites.create(img`
            3bcf............................
            f3bcf...........................
            .f3bcf..........................
            .fb3bcf.........................
            .fb.3bcff.......................
            .fb..3bcff......................
            ..fb..ffeef.....................
            ...fbfee.eef....................
            ....fde.eeeef...................
            ....fdeeee.eef..................
            .....fdee.eeeef.................
            .....fdeeeeeeeff................
            ......fdeeeeff3bf...............
            .......fdeff3333bf..............
            ........ff3333f33bf.............
            .........f333f3f33bf............
            .........ff3f3f3f33bf...........
            .......ffbbf3f3f3f33bf..........
            ......fbbccbf3f3fff33bf.........
            ....ffbccbbbbf3fff3333bf........
            ...fbbcbbbbccbf3f333333bf.......
            ...fccbbbccbbcff333333bbbf......
            ...fbbbbcbbbcf..f333bb33eef.....
            ...fbbccbbbcf....fbb3333eeef....
            ...fbcbbbbcf.....ff3333eefeef...
            ...fccccccf......f3333fdeffeef..
            ...fffffff.......f3333fdef.feef.
            ................f33333fdef..feef
            ................f3333ffdef.feef.
            ...............f3333f.fdeffeef..
            ...............f333f..fdeeeef...
            ................ffff...fffff....
            `, SpriteKind.gun2)
        tiles.placeOnRandomTile(ak2, sprites.dungeon.floorDarkDiamond)
        scaling.scaleByPercent(ak2, -50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
    if (nextgunspqn2 == 4) {
        sprites.destroyAllSpritesOfKind(SpriteKind.gun2)
        revolver_2 = sprites.create(img`
            ................................
            ................................
            .....f..........................
            ....f3f.........................
            .....f3f........................
            ......f3f.......................
            .......f3f......................
            ........f3f.....................
            .........f3f....................
            ..........f3f...................
            ..........f33f..................
            ...........f33f.................
            ...........f3f3f................
            ...........ffbf3f...............
            ...........fbbbf3f..............
            ............fbbbf3f.............
            .............fbf33ff............
            ..............f33eeef...........
            ..............f3eeef............
            ..............ffeeef............
            ...............feeef............
            ..............feeef.............
            ..............feeef.............
            .............feeef..............
            ..............fff...............
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.gun2)
        tiles.placeOnRandomTile(revolver_2, sprites.dungeon.floorDarkDiamond)
        scaling.scaleByPercent(revolver_2, -50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
    nextgunspqn2 = 0
})
forever(function () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 3 3 3 3 3 3 3 f . . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 f a a 3 3 a a 3 f . . 
        . . . f 3 f f f 3 f f f 3 f . . 
        . . f f f 3 3 f f f 3 3 3 f . . 
        . f b c f f b b b f f f f d f . 
        . f b c d d f b b b b b f d f . 
        . f f c d d f f f f b b f f . . 
        . . . f f f 3 3 3 3 f f f . . . 
        . . f 3 3 3 3 f f 3 3 3 f . . . 
        . f 3 3 3 f f . . f 3 3 f . . . 
        f 3 3 3 f . . . . f 3 3 f . . . 
        . f f f . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 3 3 3 3 3 3 3 f . . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 f a a 3 3 a a 3 f . . 
        . . . f 3 f f f 3 f f f 3 f . . 
        . . f f f 3 3 f f f 3 3 3 f . . 
        . f b c f f b b b f f f f d f . 
        . f b c d d f b b b b b f d f . 
        . f f c d d f f f f b b f f . . 
        . . . f f f 3 3 3 3 f f f . . . 
        . . f 3 3 3 3 f f 3 3 3 f . . . 
        . . f 3 3 3 f . . f 3 3 f . . . 
        . . f 3 3 3 f . . f 3 3 f . . . 
        . . . f f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 f a a 3 3 a a 3 f . . . 
        . . f 3 f f f 3 f f f 3 f . . . 
        . . . f 3 3 f f f 3 3 3 f . . . 
        . . f b c f f b b b f f f . f . 
        . f b b c f b b b b b b b f d f 
        f b b c c f b f f f f b f f d f 
        f d c f f f f 3 3 3 3 f . . f . 
        f f f f 3 3 f f f 3 3 3 f . . . 
        . . . f 3 3 f . . f 3 3 f . . . 
        . . . f 3 3 f . f 3 3 f . . . . 
        . . . . f f . . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 f a a 3 3 a a 3 f . . . 
        . . f 3 f f f 3 f f f 3 f . . . 
        . . . f 3 3 f f f 3 3 3 f . . . 
        . . f b c f f b b b f f f . f . 
        . f b b c f b b b b b b b f d f 
        f b b c c f b f f f f b f f d f 
        f d c f f f f 3 3 3 3 f . . f . 
        f f f f 3 3 f f f 3 3 f . . . . 
        . . . f 3 3 f . f 3 3 f . . . . 
        . . . f 3 3 f . f 3 3 f . . . . 
        . . . . f f . . . f f . . . . . 
        `],
    50,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . f f f f f f f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 f a a 3 3 a a 3 f . . . 
        . . f 3 f f f 3 f f f 3 f . . . 
        . . f 3 3 f f f f f 3 3 f . . . 
        . f . f c b b b b b c f . f . . 
        f c f b b c c b c c b b f c f . 
        f c f b b b c c c b b b f c f . 
        f c f b c c b b b c c b f c f . 
        . f f c b b b b b b b c f c f . 
        . . f f f f f f f f f f f f . . 
        . . . f 3 3 3 f . f 3 3 3 f . . 
        . . . . f f f . . f 3 3 3 f . . 
        . . . . . . . . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 f a a 3 3 a a 3 f . . . 
        . . f 3 f f f 3 f f f 3 f . . . 
        . f . f 3 f f f f f 3 f . f . . 
        f c f c c b b b b b c c f c f . 
        f c f b b c c b c c b b f c f . 
        f c f b b c c c c c b b f c f . 
        f c f c c b b b b b c c f f . . 
        . f f f f f f f f f f f f . . . 
        . . f 3 3 3 f . f 3 3 3 f . . . 
        . . f 3 3 3 f . . f f f . . . . 
        . . . f f f . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    ghostenemy,
    [img`
        . . . f f f f f f f f . . . . . 
        . . f 3 1 a a a a 1 1 f . . . . 
        . f 3 1 1 1 1 a 1 1 1 1 f . . . 
        f 1 1 f f 1 1 1 1 f f 1 f . . . 
        f 1 1 f f 1 1 1 1 f f 3 f . . . 
        f a 1 1 1 1 1 1 1 1 1 3 f . . . 
        f a a 1 a f f f f 1 1 a f . . . 
        . f a 1 1 f f f f 1 a a f . . . 
        f 1 f f f 1 a a a f f f f f f . 
        f 1 1 1 1 f f f f 3 3 f 1 1 1 f 
        . f f f f f 3 3 3 3 3 f f f f . 
        . f e e e 3 3 3 3 3 3 f . . . . 
        . f e e e 3 e e f f f . . . . . 
        . f e e e f f f e e e f . . . . 
        . f e e 3 f . . f f f . . . . . 
        . . f f f . . . . . . . . . . . 
        `,img`
        . . . f f f f f f f f . . . . . 
        . . f 3 1 a a a a 1 1 f . . . . 
        . f 3 1 1 1 1 a 1 1 1 1 f . . . 
        f 1 1 f f 1 1 1 1 f f 1 f . . . 
        f 1 1 f f 1 1 1 1 f f 3 f . . . 
        f a 1 1 1 1 1 1 1 1 1 3 f . . . 
        f a a 1 a f f f f 1 1 a f . . . 
        . f a 1 1 f f f f 1 a a f . . . 
        f 1 f f 1 1 a a a f f f f . . . 
        f 1 1 f f f f f f 3 3 f f f f . 
        . f 1 1 1 f 3 3 3 3 3 f 1 1 1 f 
        . . f f f f 3 3 3 3 3 f f f f . 
        . . f e e 3 e e f f f . . . . . 
        . . f e e f f f e e e f . . . . 
        . . f e 3 f . . f f f . . . . . 
        . . . f f . . . . . . . . . . . 
        `,img`
        . . . f f f f f f f f . . . . . 
        . . f 3 1 a a a a 1 1 f . . . . 
        . f 3 1 1 1 1 a 1 1 1 1 f . . . 
        f 1 1 f f 1 1 1 1 f f 1 f . . . 
        f 1 1 f f 1 1 1 1 f f 3 f . . . 
        f a 1 1 1 1 1 1 1 1 1 3 f . . . 
        f a a 1 a f f f f 1 1 a f . . . 
        . f a 1 1 f f f f 1 a a f . . . 
        f 1 f f f 1 a a a f f f f . . . 
        f 1 1 1 1 f f f f 3 3 f f f f . 
        . f f f f f 3 3 3 3 3 f 1 1 1 f 
        . . f e e f 3 3 3 3 3 f f f f . 
        . . f e e 3 e e f f f . . . . . 
        . . f e e f f f e e f . . . . . 
        . . . f f . . f e e f . . . . . 
        . . . . . . . . f f . . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    ghostenemy,
    [img`
        . . . . . f f f f f f f f . . . 
        . . . . f 1 1 a a a a 1 3 f . . 
        . . . f 1 1 1 1 a 1 1 1 1 3 f . 
        . . . f 1 f f 1 1 1 1 f f 1 1 f 
        . . . f 3 f f 1 1 1 1 f f 1 1 f 
        . . . f 3 1 1 1 1 1 1 1 1 1 a f 
        . . . f a 1 1 f f f f a 1 a a f 
        . . . f a a 1 f f f f 1 1 a f . 
        . f f f f f f a a a 1 f f f 1 f 
        f 1 1 1 f 3 3 f f f f 1 1 1 1 f 
        . f f f f 3 3 3 3 3 f f f f f . 
        . . . . f 3 3 3 3 3 3 e e e f . 
        . . . . . f f f e e 3 e e e f . 
        . . . . f e e e f f f e e e f . 
        . . . . . f f f . . f 3 e e f . 
        . . . . . . . . . . . f f f . . 
        `,img`
        . . . . . f f f f f f f f . . . 
        . . . . f 1 1 a a a a 1 3 f . . 
        . . . f 1 1 1 1 a 1 1 1 1 3 f . 
        . . . f 1 f f 1 1 1 1 f f 1 1 f 
        . . . f 3 f f 1 1 1 1 f f 1 1 f 
        . . . f 3 1 1 1 1 1 1 1 1 1 a f 
        . . . f a 1 1 f f f f a 1 a a f 
        . . . f a a 1 f f f f 1 1 a f . 
        . . . f f f f a a a 1 1 f f 1 f 
        . f f f f 3 3 f f f f f f 1 1 f 
        f 1 1 1 f 3 3 3 3 3 f 1 1 1 f . 
        . f f f f 3 3 3 3 3 f f f f . . 
        . . . . . f f f e e 3 e e f . . 
        . . . . f e e e f f f e e f . . 
        . . . . . f f f . . f 3 e f . . 
        . . . . . . . . . . . f f . . . 
        `,img`
        . . . . . f f f f f f f f . . . 
        . . . . f 1 1 a a a a 1 3 f . . 
        . . . f 1 1 1 1 a 1 1 1 1 3 f . 
        . . . f 1 f f 1 1 1 1 f f 1 1 f 
        . . . f 3 f f 1 1 1 1 f f 1 1 f 
        . . . f 3 1 1 1 1 1 1 1 1 1 a f 
        . . . f a 1 1 f f f f a 1 a a f 
        . . . f a a 1 f f f f 1 1 a f . 
        . . . f f f f a a a 1 f f f 1 f 
        . f f f f 3 3 f f f f 1 1 1 1 f 
        f 1 1 1 f 3 3 3 3 3 f f f f f . 
        . f f f f 3 3 3 3 3 f e e f . . 
        . . . . . f f f e e 3 e e f . . 
        . . . . . f e e f f f e e f . . 
        . . . . . f e e f . . f f . . . 
        . . . . . . f f . . . . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    ghostenemy,
    [img`
        . . . . . f f f f f f f f . . . 
        . . . . f 1 1 a a a a 1 3 f . . 
        . . . f 1 1 1 1 a 1 1 1 1 3 f . 
        . . . f 1 1 f f 1 1 f f 1 1 1 f 
        . . . f 3 1 f f 1 1 f f 1 1 1 f 
        . . . f 3 1 1 1 1 1 1 1 1 1 a f 
        . . . f a 1 1 f f f f a 1 a a f 
        . . . f f a 1 f f f f 1 1 f f . 
        . . f 1 1 f f a a 1 1 f f 1 1 f 
        . . f 1 1 1 f f f f f 1 1 1 1 f 
        . . . f 1 1 1 f 3 3 3 f 1 f f . 
        . . . . f 1 f 3 3 3 3 e f e f . 
        . . . . f f 3 3 e e 3 e e e f . 
        . . . . f e e e f f f e e e f . 
        . . . . f e e e f . . f f f . . 
        . . . . . f f f . . . . . . . . 
        `,img`
        . . . f f f f f f f f . . . . . 
        . . f 1 1 a a a a 1 3 f . . . . 
        . f 1 1 1 1 a 1 1 1 1 3 f . . . 
        . f 1 1 f f 1 1 f f 1 1 1 f . . 
        . f 3 1 f f 1 1 f f 1 1 1 f . . 
        . f 3 1 1 1 1 1 1 1 1 1 a f . . 
        . f a 1 1 f f f f a 1 a a f . . 
        . f f a 1 f f f f 1 1 1 f . . . 
        . f 1 f f 1 a a 1 1 1 1 f f f . 
        f 1 1 1 f f f f f f f f f 1 f . 
        . f 1 1 1 f f 3 3 3 f f 1 1 1 f 
        . . f 1 1 f 3 3 3 3 e f 1 1 f . 
        . . . f f 3 3 e e 3 e e e f . . 
        . . . f e e e f f f e e e f . . 
        . . . . f f f . . f e e e f . . 
        . . . . . . . . . . f f f . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    ghostenemy,
    [img`
        . . . . . f f f f f f f f . . . 
        . . . . f 1 1 a a a a 1 3 f . . 
        . . . f 1 1 1 1 a 1 1 1 1 3 f . 
        . . . f 1 1 1 1 1 1 1 1 1 1 1 f 
        . . . f 3 1 1 1 1 1 1 1 1 1 1 f 
        . . . f 3 1 1 1 1 1 1 1 1 1 a f 
        . . . f a 1 1 1 1 1 1 a 1 a a f 
        . . . f a a 1 1 1 1 1 1 1 a f . 
        . . f 1 f f f a a 1 1 f f f 1 f 
        . . . f f 3 3 f f f f 3 3 f 1 f 
        . . . . f 3 3 3 3 3 3 3 3 3 f . 
        . . . . f 3 3 3 3 3 3 e e e f . 
        . . . . f 3 3 3 e e 3 e e e f . 
        . . . . f e e e f f f e e e f . 
        . . . . f e e e f . . f f f . . 
        . . . . . f f f . . . . . . . . 
        `,img`
        . . . . f f f f f f f f f . . . 
        . . . f 1 1 a a a a 1 3 f f . . 
        . . f 1 1 1 1 a 1 1 1 1 3 f f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 3 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 3 1 1 1 1 1 1 1 1 1 a f . 
        . . f f 1 1 1 1 1 1 a 1 a a f . 
        . . f 1 f a 1 1 1 1 1 1 1 a f . 
        . . f 1 f f f a a 1 1 f f f 1 f 
        . . . f f 3 3 f f f f 3 3 3 f . 
        . . . . f 3 3 3 3 3 3 3 3 3 f . 
        . . . . f 3 3 3 3 3 3 e e e f . 
        . . . . f e e e e e 3 e e e f . 
        . . . . f e e e f f f e e e f . 
        . . . . . f f f . . f e e e f . 
        . . . . . . . . . . . f f f . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
})
game.onUpdateInterval(randint(10000, 20000), function () {
    if (loaded > 0) {
        foodies = randint(1, 5)
    }
})
game.onUpdateInterval(randint(10000, 20000), function () {
    if (loaded > 0) {
        foodies_2 = randint(1, 5)
    }
})
game.onUpdateInterval(randint(10000, 30000), function () {
    if (tipson == 1) {
        tipnum = randint(1, 5)
        if (tipnum == 1) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("upgrades geben dir vorteile, nutze sie", 5000, true)
        }
        if (tipnum == 2) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("du hast nur 5 leben ohne rüstung nutze sie weise", 5000, true)
        }
        if (tipnum == 3) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("der revolver schießt durch gegner", 5000, true)
        }
        if (tipnum == 4) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("die rüstung gibt dir extraleben die du wieder heilen kannst", 6000, true)
        }
        if (tipnum == 4) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("du kannst waffen aufheben", 2000, true)
        }
    }
})
game.onUpdateInterval(10000, function () {
    next_gun_spawn = randint(1, 4)
})
