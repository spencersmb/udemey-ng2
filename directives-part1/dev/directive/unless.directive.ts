import {Component, Directive, Renderer, Input} from "angular2/core";
import {ViewContainerRef, TemplateRef} from "angular2/core";

@Directive({
    selector: '[ngUnless]',
})

export class UnlessDirective{

    //Bind to the selector to allow an input on the selector,
    //then we have a function built in to fire once it gets set below
    @Input() ngUnless;

    constructor(
        //the text between the element tags
        private _template: TemplateRef,

        //the place where we want to insert it into the dom
        private _view: ViewContainerRef

    ){}
    //when this element gets set - do something
    set ngUnless(condition: boolean){
        if(!condition){
            //create view to hold our template
            this._view.createEmbeddedView(this._template);
        }else{
            this._view.clear();
        }
    }
}