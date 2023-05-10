class Church extends AdventureScene {
    constructor() {
        super("church", "Church Room");
    }

    onEnter() {

        let prayerBeads = this.add.text(this.w * 0.5, this.w * 0.1, "📿 Prayer Beads")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Someone left their prayer beads on the ground.")
            })
            .on('pointerdown', () => {
                this.showMessage("You picked up the Prayer Beads off the ground.");
                this.gainItem('prayerBeads');
                this.tweens.add({
                    targets: prayerBeads,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => prayerBeads.destroy()
                });
            })
        
        let bob = this.createBob();
        this.addSouth(bob, 'castle');
    }
}
class Market extends AdventureScene {
    constructor(){
        super("market", "Market Room");
    }
    onEnter() {
        let bob = this.createBob();
        this.addEast(bob, 'castle');
    }
}

class Village extends AdventureScene {
    constructor() {
        super("village", "Village Room");
    }

    onEnter() {
        let bob = this.createBob();
        this.addEast(bob, 'darkForest');       
        this.addWest(bob, 'castle');
    }
}

class DarkForest extends AdventureScene {
    constructor() {
        super("darkForest", "Dark Forest Room");
    }

    onEnter() {

        let castleKey = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 castleKey")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('castleKey');
                this.tweens.add({
                    targets: castleKey,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => castleKey.destroy()
                });
            })
        let bob = this.createBob();
        this.addWest(bob, 'village');
    }
}

class Castle extends AdventureScene {
    constructor() {
        super("castle", "Castle Room");
    }

    onEnter() {
        
        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 Locked Castle Door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("castleKey")) {
                    this.showMessage("You've got the key for this door.");

                } else {
                    this.showMessage("It's locked.");
                    // this.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("castleKey")) {
                    this.showMessage("*clang* ");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('dungeon');
                }
            })
        
        let bob = this.createBob();
        this.addNorth(bob, 'church');
        this.addSouth(bob, 'house');
        this.addEast(bob, 'village');
        this.addWest(bob, 'market');
    }
}

class House extends AdventureScene {
    constructor() {
        super("house", "House Room");
    }

    onEnter() {
        let bob = this.createBob();
        this.addNorth(bob, 'castle');
    }
}
class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('house'));
        });
    }
}

class Outro extends AdventureScene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

class Dungeon extends AdventureScene {
    constructor() {
        super("dungeon", "Dungeon Room");
    }

    onEnter() {

        let jailKey = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 jail key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a small key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('jailKey');
                this.tweens.add({
                    targets: jailKey,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => jailKey.destroy()
                });
            })
        
        let door = this.createDoor(0.15);
        let door1 = this.createDoor(0.2);
        let door2 = this.createDoor(0.25);
        let door3 = this.createDoor(0.3);
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, House, Castle, Church, Market, Village, DarkForest, Dungeon, Outro],
    title: "Adventure Game",
});

