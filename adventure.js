class AdventureScene extends Phaser.Scene {

    init(data) {
        this.inventory = data.inventory || [];
    }

    constructor(key, name) {
        super(key);
        this.name = name;
    }

    create() {
        this.transitionDuration = 1000;

        this.w = this.game.config.width;
        this.h = this.game.config.height;
        this.s = this.game.config.width * 0.01;

        this.cameras.main.setBackgroundColor('#444');
        this.cameras.main.fadeIn(this.transitionDuration, 0, 0, 0);

        this.add.rectangle(this.w * 0.75, 0, this.w * 0.25, this.h).setOrigin(0, 0).setFillStyle(0);
        this.add.text(this.w * 0.75 + this.s, this.s)
            .setText(this.name)
            .setStyle({ fontSize: `${3 * this.s}px` })
            .setWordWrapWidth(this.w * 0.25 - 2 * this.s);
        
        this.messageBox = this.add.text(this.w * 0.75 + this.s, this.h * 0.33)
            .setStyle({ fontSize: `${2 * this.s}px`, color: '#eea' })
            .setWordWrapWidth(this.w * 0.25 - 2 * this.s);

        this.inventoryBanner = this.add.text(this.w * 0.75 + this.s, this.h * 0.66)
            .setStyle({ fontSize: `${2 * this.s}px` })
            .setText("Inventory")
            .setAlpha(0);

        this.inventoryTexts = [];
        this.updateInventory();

        this.add.text(this.w-3*this.s, this.h-3*this.s, "📺")
            .setStyle({ fontSize: `${2 * this.s}px` })
            .setInteractive({useHandCursor: true})
            .on('pointerover', () => this.showMessage('Fullscreen?'))
            .on('pointerdown', () => {
                if (this.scale.isFullscreen) {
                    this.scale.stopFullscreen();
                } else {
                    this.scale.startFullscreen();
                }
            });

        this.onEnter();

    }

    showMessage(message) {
        this.messageBox.setText(message);
        this.tweens.add({
            targets: this.messageBox,
            alpha: { from: 1, to: 0 },
            easing: 'Quintic.in',
            duration: 4 * this.transitionDuration
        });
    }

    updateInventory() {
        if (this.inventory.length > 0) {
            this.tweens.add({
                targets: this.inventoryBanner,
                alpha: 1,
                duration: this.transitionDuration
            });
        } else {
            this.tweens.add({
                targets: this.inventoryBanner,
                alpha: 0,
                duration: this.transitionDuration
            });
        }
        if (this.inventoryTexts) {
            this.inventoryTexts.forEach((t) => t.destroy());
        }
        this.inventoryTexts = [];
        let h = this.h * 0.66 + 3 * this.s;
        this.inventory.forEach((e, i) => {
            let text = this.add.text(this.w * 0.75 + 2 * this.s, h, e)
                .setStyle({ fontSize: `${1.5 * this.s}px` })
                .setWordWrapWidth(this.w * 0.75 + 4 * this.s);
            h += text.height + this.s;
            this.inventoryTexts.push(text);
        });
    }

    hasItem(item) {
        return this.inventory.includes(item);
    }

    gainItem(item) {
        if (this.inventory.includes(item)) {
            console.warn('gaining item already held:', item);
            return;
        }
        this.inventory.push(item);
        this.updateInventory();
        for (let text of this.inventoryTexts) {
            if (text.text == item) {
                this.tweens.add({
                    targets: text,
                    x: { from: text.x - 20, to: text.x },
                    alpha: { from: 0, to: 1 },
                    ease: 'Cubic.out',
                    duration: this.transitionDuration
                });
            }
        }
    }

    loseItem(item) {
        if (!this.inventory.includes(item)) {
            console.warn('losing item not held:', item);
            return;
        }
        for (let text of this.inventoryTexts) {
            if (text.text == item) {
                this.tweens.add({
                    targets: text,
                    x: { from: text.x, to: text.x + 20 },
                    alpha: { from: 1, to: 0 },
                    ease: 'Cubic.in',
                    duration: this.transitionDuration
                });
            }
        }
        this.time.delayedCall(500, () => {
            this.inventory = this.inventory.filter((e) => e != item);
            this.updateInventory();
        });
    }

    gotoScene(key) {
        this.cameras.main.fade(this.transitionDuration, 0, 0, 0);
        this.time.delayedCall(this.transitionDuration, () => {
            this.scene.start(key, { inventory: this.inventory });
        });
    }

    onEnter() {
        console.warn('This AdventureScene did not implement onEnter():', this.constructor.name);
    }
    
    createDoor(yVal){
        let door = this.add.text(this.w * 0.1, this.w * yVal, "🚪 locked jail")
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
                    door.setText("🚪 empty");
                }
            })
        return door;
    }

    createBob(){
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

        return bob;
        
    }

    addNorth(bob, scene){
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
            this.gotoScene(scene);
            console.log("click on Up Arrow");
        });

    }
    
    addSouth(bob, scene){
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
                this.gotoScene(scene);
                console.log("click on Down Arrow");
            });
    }

    addEast(bob, scene){
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
                this.gotoScene(scene);
                console.log("click on Right Arrow");
            });
    }

    addWest(bob, scene){
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
                this.gotoScene(scene);
                console.log("click on Left Arrow");
            });
    }

}