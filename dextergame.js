class Church extends AdventureScene {
    constructor() {
        super("church", "Church Room");
    }
    preload(){
        this.load.image("church", "assets/medival church.jpg");
    }
    onEnter() {
        let windowWidth = this.w*0.75;
        let widnowHeight = this.h;
        this.bg = this.add.image(windowWidth / 2, widnowHeight / 2, 'church');
        this.bg.setDisplaySize(windowWidth, widnowHeight);
        

        let pope = this.add.text(this.w * 0.15, this.h * 0.55, "🤵")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Hello traveler I am John the pope! Welcome to the church"))
            .on('pointerdown', () => {
                this.showMessage("Those prayer beads helps get rid of bad spirits.");
                this.tweens.add({
                    targets: pope,
                    y: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            })

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
    preload(){
        this.load.image("market", "assets/medival market.jpg")
    }

    onEnter() {
        let windowWidth = this.w*0.75;
        let widnowHeight = this.h;
        this.bg = this.add.image(windowWidth / 2, widnowHeight / 2, 'market');
        this.bg.setDisplaySize(windowWidth, widnowHeight);

        let merchant = this.add.text(this.w * 0.15, this.h * 0.8, "🧕")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Looking for the princess hmmm"))
            .on('pointerdown', () => {
                this.showMessage("I saw the princess running towards the village 2 days ago.");
                this.tweens.add({
                    targets: merchant,
                    y: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            })

        let bob = this.createBob();
        this.addEast(bob, 'castle');
    }
}

class Village extends AdventureScene {
    constructor() {
        super("village", "Village Room");
    }
    preload(){
        this.load.image("village", "assets/medival village.jpg")
    }

    onEnter() {
        let windowWidth = this.w*0.75;
        let widnowHeight = this.h;
        this.bg = this.add.image(windowWidth / 2, widnowHeight / 2, 'village');
        this.bg.setDisplaySize(windowWidth, widnowHeight);

        let villager = this.add.text(this.w * 0.15, this.h * 0.8, "🧖")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Your looking for the princess?"))
            .on('pointerdown', () => {
                this.showMessage("I didn't see the princess pass by but King Joshua was running towards the Dark Forest 2 days ago...");
                
            })
        this.tweens.add({
            targets: villager,
            x: '+=' + this.w*0.1,
            repeat: -1,
            yoyo: true,
            ease: 'Sine.inOut',
            duration: 1000
        });

        let bob = this.createBob();
        this.addEast(bob, 'darkForest');       
        this.addWest(bob, 'castle');
    }
}

class DarkForest extends AdventureScene {
    constructor() {
        super("darkForest", "Dark Forest Room");
    }
    preload(){
        this.load.image("darkForest", "assets/medival darkForest.jpg")
    }

    onEnter() {
        let windowWidth = this.w*0.75;
        let widnowHeight = this.h;
        this.bg = this.add.image(windowWidth / 2, widnowHeight / 2, 'darkForest');
        this.bg.setDisplaySize(windowWidth, widnowHeight);

        let castleKey = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("The castle key! The king must have dropped it here!")
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
    preload(){
        this.load.image("castle", "assets/medival castle.jpg")
    }

    onEnter() {
        let windowWidth = this.w*0.75;
        let widnowHeight = this.h;
        this.bg = this.add.image(windowWidth / 2, widnowHeight / 2, 'castle');
        this.bg.setDisplaySize(windowWidth, widnowHeight);
        
        let king = this.add.text(this.w * 0.45, this.h * 0.25, "🤴")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Hello traveler, I am King Joshua of this lovely kingdom! Welcome."))
            .on('pointerdown', () => {
                
                if(this.hasItem("castleKey")){
                    this.showMessage("Oh you've found my keys Thank You! Lets go inside it's chilly outside!");
                }else{
                    this.showMessage("My daughter princess Sophia has gone missing Please help me find her!");
                    this.time.delayedCall(3500, ()=> this.showMessage("I've been searching for her everywhere!"));
                    this.time.delayedCall(5500, ()=> this.showMessage("Oh no I can't find my castle keys..."));
                    this.time.delayedCall(7000, ()=> this.showMessage("Anyways the last time I saw my daughter was 3 days ago... "));
                    this.time.delayedCall(10000, ()=> this.showMessage("she was wandering around in the Market."));
                }
                this.tweens.add({
                    targets: king,
                    y: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 Locked Castle Door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("castleKey")) {
                    this.showMessage("You've got the key for this door.");

                } else {
                    this.showMessage("What kind of King locks himself out of his castle?");
                    // this.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("castleKey")) {
                    this.showMessage("*clang* ");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('castleInside');
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
    preload(){
        this.load.image("house", "assets/medival house.jpg");

    }

    onEnter() {
        let windowWidth = this.w*0.75;
        let widnowHeight = this.h;
        this.bg = this.add.image(windowWidth / 2, widnowHeight / 2, 'house');
        this.bg.setDisplaySize(windowWidth, widnowHeight);
        // const img = this.add.sprite(this.w * 0.25, this.w * 0.25, 'house');
        // img.scale = 2;
        let bob = this.createBob();
        this.addNorth(bob, 'castle');
    }
}

class Dungeon extends AdventureScene {
    constructor() {
        super("dungeon", "Dungeon Room");
    }
    preload(){
        this.load.image("dungeon", "assets/medival dungeon.jpg")
    }

    onEnter() {
        let windowWidth = this.w*0.75;
        let widnowHeight = this.h;
        this.bg = this.add.image(windowWidth / 2, widnowHeight / 2, 'dungeon');
        this.bg.setDisplaySize(windowWidth, widnowHeight);

        let jailKey = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
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

class CastleInside extends AdventureScene {
    constructor() {
        super("castleInside", "Inside the Castle");
    }
    preload(){
        this.load.image("castleInside", "assets/medival castleInside.jpg")
    }

    onEnter() {
        let windowWidth = this.w*0.75;
        let widnowHeight = this.h;
        this.bg = this.add.image(windowWidth / 2, widnowHeight / 2, 'castleInside');
        this.bg.setDisplaySize(windowWidth, widnowHeight);

        let king = this.add.text(this.w * 0.15, this.h * 0.7, "🤴")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Where could my daughter have gone? I'm so anxious!"))
            .on('pointerdown', () => {
                
                if(this.hasItem("prayerBeads")){
                    this.showMessage("Oh I feel at ease with you here!");
                }else{
                    this.showMessage("I can sense evil spirits here!");
                }
                
            })
            this.tweens.add({
                targets: king,
                x: '+=' + this.w*0.3,
                repeat: -1,
                yoyo: true,
                ease: 'Sine.inOut',
                duration: 2000
            });

        let bob = this.createBob();
        let south = this.add.text(this.w * 0.35, this.w * 0.5, "⬇️")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go outside"))
            .on('pointerdown', () => {
                this.showMessage("Exiting Castle");
                this.tweens.add({
                    targets: bob,
                    y: '+=' + this.w*0.2,
                    duration: 1000,
                    onComplete: () => bob.destroy()
                    
                });
                this.gotoScene('castle');
                console.log("exit castle");
            });

        let door1 = this.add.text(this.w * 0.1, this.w * 0.2, "🚪 dungeon")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("This door leads to the Dungeon...");
            })
            .on('pointerdown', () => {
                this.showMessage("Heading to the Dungeon...");
                this.gotoScene("dungeon");
            })

    }
}
class GoodEnding extends Phaser.Scene {
    constructor(){
        super('goodEnding')
    }
    create() {
        this.add.text(50,50, "You've found the princess inside of the jail cell.").setFontSize(50);
        this.time.delayedCall(1000,()=> (this.add.text(50,100, "She is Demon Posessed! Thankfully you have your prayer beads.").setFontSize(50)));
        this.time.delayedCall(2000, ()=> this.add.text(50,150, "You get down on your knees and start praying.").setFontSize(50));
        this.time.delayedCall(3000, ()=> this.add.text(50,200, "The Evil spirit leaves her body.").setFontSize(50));
        this.time.delayedCall(4000, ()=> this.add.text(50,250, "You escort her out of the dungeon and back to the king!").setFontSize(50));
        this.time.delayedCall(5000, ()=> this.add.text(50,300, "Congratulations you've won!").setFontSize(50));
        this.time.delayedCall(6000, ()=> this.add.text(50,350, "Click to continue").setFontSize(20));

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
        this.add.text(50,50, "Joe Bob's Adventure Part 3").setFontSize(50);
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




const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, House, Castle, CastleInside, Church, Market, Village, DarkForest, Dungeon, GoodEnding, BadEnding, Outro],
    title: "Adventure Game",
});

