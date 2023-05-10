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

        let south = this.add.text(this.w * 0.35, this.w * 0.5, "⬇️")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go South"))
            .on('pointerdown', () => {
                this.showMessage("Moving Bob Southward");
                this.tweens.add({
                    targets: bob,
                    y: '+=' + this.w*0.2,
                    duration: 1000,
                    onComplete: () => bob.destroy()
                    
                });
                this.gotoScene('castle');
                console.log("click on Down Arrow");
            });
        
        let bob = this.add.text(this.w * 0.3, this.w * 0.3, "🧍")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Hi I am Bob!"))
            .on('pointerdown', () => {
                this.showMessage("Stop poking me!");
                this.tweens.add({
                    targets: bob,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });
    }
}
class Market extends AdventureScene {
    constructor(){
        super("market", "Market Room");
    }
    onEnter() {
        let east = this.add.text(this.w * 0.6, this.w * 0.3, "➡️")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go East"))
            .on('pointerdown', () => {
                this.showMessage("Moving Bob Eastward");
                this.tweens.add({
                    targets: bob,
                    x: '+=' + this.w*0.2,
                    duration: 1000,
                    onComplete: () => bob.destroy()
                    
                });
                this.gotoScene('castle');
                console.log("click on Right Arrow");
            });
        

            let bob = this.add.text(this.w * 0.3, this.w * 0.3, "🧍")
                .setFontSize(this.s * 10)
                .setInteractive()
                .on('pointerover', () => this.showMessage("Hi I am Bob!"))
                .on('pointerdown', () => {
                    this.showMessage("Stop poking me!");
                    this.tweens.add({
                        targets: bob,
                        x: '+=' + this.s,
                        repeat: 2,
                        yoyo: true,
                        ease: 'Sine.inOut',
                        duration: 100
                    });
                });
    }
}

class Village extends AdventureScene {
    constructor() {
        super("village", "Village Room");
    }

    onEnter() {       
        let east = this.add.text(this.w * 0.6, this.w * 0.3, "➡️")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go East"))
            .on('pointerdown', () => {
                this.showMessage("Moving Bob Eastward");
                this.tweens.add({
                    targets: bob,
                    x: '+=' + this.w*0.2,
                    duration: 1000,
                    onComplete: () => bob.destroy()
                    
                });
                this.gotoScene('darkForest');
                console.log("click on Right Arrow");
            });
        
        let west = this.add.text(this.w * 0.1, this.w * 0.3, "⬅️")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go West"))
            .on('pointerdown', () => {
                this.showMessage("Moving Bob Westward");
                this.tweens.add({
                    targets: bob,
                    x: '-=' + this.w*0.2,
                    duration: 1000,
                    onComplete: () => bob.destroy()
                    
                });
                this.gotoScene('castle');
                console.log("click on Left Arrow");
            });

        let bob = this.add.text(this.w * 0.3, this.w * 0.3, "🧍")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Hi I am Bob!"))
            .on('pointerdown', () => {
                this.showMessage("Stop poking me!");
                this.tweens.add({
                    targets: bob,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });
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

        let west = this.add.text(this.w * 0.1, this.w * 0.3, "⬅️")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go West"))
            .on('pointerdown', () => {
                this.showMessage("Moving Bob Westward");
                this.tweens.add({
                    targets: bob,
                    x: '-=' + this.w*0.2,
                    duration: 1000,
                    onComplete: () => bob.destroy()
                    
                });
                this.gotoScene('village');
                console.log("click on Left Arrow");
            });

        let bob = this.add.text(this.w * 0.3, this.w * 0.3, "🧍")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Hi I am Bob!"))
            .on('pointerdown', () => {
                this.showMessage("Stop poking me!");
                this.tweens.add({
                    targets: bob,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });
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

        let north = this.add.text(this.w * 0.35, this.w * 0.1, "⬆️")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go North"))
            .on('pointerdown', () => {
                this.showMessage("Moving Bob Northward");
                this.tweens.add({
                    targets: bob,
                    y: '-=' + this.w*0.2,
                    duration: 1000,
                    onComplete: () => bob.destroy()
                    
                });
                this.gotoScene('church');
                console.log("click on Up Arrow");
            });
        
        let south = this.add.text(this.w * 0.35, this.w * 0.5, "⬇️")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go South"))
            .on('pointerdown', () => {
                this.showMessage("Moving Bob Southward");
                this.tweens.add({
                    targets: bob,
                    y: '+=' + this.w*0.2,
                    duration: 1000,
                    onComplete: () => bob.destroy()
                    
                });
                this.gotoScene('house');
                console.log("click on Down Arrow");
            });
        
        let east = this.add.text(this.w * 0.6, this.w * 0.3, "➡️")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go East"))
            .on('pointerdown', () => {
                this.showMessage("Moving Bob Eastward");
                this.tweens.add({
                    targets: bob,
                    x: '+=' + this.w*0.2,
                    duration: 1000,
                    onComplete: () => bob.destroy()
                    
                });
                this.gotoScene('village');
                console.log("click on Right Arrow");
            });
        
        let west = this.add.text(this.w * 0.1, this.w * 0.3, "⬅️")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go West"))
            .on('pointerdown', () => {
                this.showMessage("Moving Bob Westward");
                this.tweens.add({
                    targets: bob,
                    x: '-=' + this.w*0.2,
                    duration: 1000,
                    onComplete: () => bob.destroy()
                    
                });
                this.gotoScene('market');
                console.log("click on Left Arrow");
            });

        let bob = this.add.text(this.w * 0.3, this.w * 0.3, "🧍")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Hi I am Bob!"))
            .on('pointerdown', () => {
                this.showMessage("Stop poking me!");
                this.tweens.add({
                    targets: bob,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });
    }
}

class House extends AdventureScene {
    constructor() {
        super("house", "House Room");
    }

    onEnter() {
        let north = this.add.text(this.w * 0.35, this.w * 0.1, "⬆️")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go North"))
            .on('pointerdown', () => {
                this.showMessage("Moving Bob Northward");
                this.tweens.add({
                    targets: bob,
                    y: '-=' + this.w*0.2,
                    duration: 1000,
                    onComplete: () => bob.destroy()
                    
                });
                this.gotoScene('castle');
                console.log("click on Up Arrow");
            });
        let bob = this.add.text(this.w * 0.3, this.w * 0.3, "🧍")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Hi I am Bob!"))
            .on('pointerdown', () => {
                this.showMessage("Stop poking me!");
                this.tweens.add({
                    targets: bob,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });
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

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("jailKey")) {
                    // door.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                // if (this.holdingItem("jailKey")) {
                //     this.showMessage("opened!");
                // }
                // else {
                //     this.showMessage("Select jailKey in the inventory first and then click on the door.");
                   
                // }

                if (this.hasItem("jailKey")) {
                    this.showMessage("*click*");
                    door.setText("🚪 empty");
                }

            })
        let door2 = this.add.text(this.w * 0.1, this.w * 0.2, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("jailKey")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("jailKey")) {
                    this.showMessage("*click*");
                    door2.setText("🚪 empty");
                }
            })
        let door3 = this.add.text(this.w * 0.1, this.w * 0.25, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("jailKey")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("jailKey")) {
                    this.showMessage("*click*");
                    door3.setText("🚪 empty");
                }
            })

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

