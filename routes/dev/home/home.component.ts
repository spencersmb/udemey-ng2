import {Component} from "angular2/core";

@Component({
    selector: 'home',
    template:`
    Home
    `
})

export class HomeComponent{
    title: string = 'Home Page';
    body: string = 'This is the about home body';
    message: string;

    constructor(){

    }
    ngOnInit() {
    }
    updateMessage(msg: string): void{
    }
}
