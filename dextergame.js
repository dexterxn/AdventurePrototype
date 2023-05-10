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

        let door1 = this.add.text(this.w * 0.1, this.w * 0.2, "🚪 locked jail")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("jailKey")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("This jail cell is locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("jailKey")) {
                    this.showMessage("*click*");
                    door1.setText("🚪 something inside!");

                    if(this.hasItem("prayerBeads")){
                        this.gotoScene('goodEnding');

                    }else{
                        this.gotoScene('badEnding');
                    }
                }
            })
        
        let door2 = this.createDoor(0.25);
        let door3 = this.createDoor(0.3);

    }
}
class GoodEnding extends Phaser.Scene {
    constructor(){
        super('goodEnding')
    }
    create() {
        this.add.text(50,50, "You've found the princess inside of the jail cell. She is Demon Posessed! Thankfully you have your prayer beads.").setFontSize(20);
        this.add.text(50,100, "You get down on your knees and start praying. The Evil spirit leaves her body. You escort her out of the dungeon and back to the king!").setFontSize(20);
        this.add.text(50,150, "Congradulations you've won!").setFontSize(50);
        this.add.text(50,200, "Click to continue").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('outro'));
        });
    }

}
class BadEnding extends Phaser.Scene {
    constructor(){
        super('badEnding')
    }
    create() {
        this.add.text(50,50, "You get attacked by the demon possessed princess you die!").setFontSize(50);
        this.add.text(50,100, "Click to continue").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('outro'));
        });
    }

}
class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        // this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        // this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        // this.input.on('pointerdown', () => {
        //     this.cameras.main.fade(1000, 0,0,0);
        //     this.time.delayedCall(1000, () => this.scene.start('house'));
        // });
        this.add.text(50,50, "You've found the princess inside of the jail cell.").setFontSize(50);
        this.time.delayedCall(1000, (this.add.text(50,100, "She is Demon Posessed! Thankfully you have your prayer beads.").setFontSize(50)));
        this.add.text(50,150, "You get down on your knees and start praying.").setFontSize(50);
        this.add.text(50,200, "The Evil spirit leaves her body.").setFontSize(50);
        this.add.text(50,250, "You escort her out of the dungeon and back to the king!").setFontSize(50);
        this.add.text(50,300, "Congratulations you've won!").setFontSize(50);
        this.add.text(50,350, "Click to continue").setFontSize(20);

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('outro'));
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




const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, House, Castle, Church, Market, Village, DarkForest, Dungeon, GoodEnding, BadEnding, Outro],
    title: "Adventure Game",
});

