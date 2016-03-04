import {Component} from 'angular2/core';
import {SectionTwo} from "./sections/section2.component";
import {PropertyBindingComponent} from "./propert-binding.component";

@Component({
    selector: 'my-app',
    template: `
    <section class="parent">
        <h1>Parent Component</h1>
        <h4>Please enter your name</h4>
        <input type="text" [(ngModel)]="name">
        <p>Two way bind to child component: {{name}}</p>
        <hr>
        <section-two></section-two>
        <br>
        <br>
        <section class="child">
        <!-- custom name component to take in data from parent -->
            <!-- hobbiesChanged is an event that catches the event emitter. When it catches the event what do you want it to do - well we want hobbies on the app component to equal $event -->
            <property-binding [myName]="name" [myAge]="34" (hobbiesChanged)="hobbies = $event"></property-binding>
        </section>
        <p>MY Hobbies are: {{hobbies}}</p>
    </section>


    `,
    directives:[SectionTwo, PropertyBindingComponent]
})
export class AppComponent {
    name: string;
    hobbies: string;
    constructor(){
        this.name = 'spencer';
        this.hobbies = '';
    }
}
