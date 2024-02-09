import { Notice, Plugin } from "obsidian";

export default class MyPlugin extends Plugin {
    async onload() {
        this.addRibbonIcon("eye", "Peek Into the Dark", () => {
            new Notice("Boo!");
        })
    }

    onunload() {
        
    }
}