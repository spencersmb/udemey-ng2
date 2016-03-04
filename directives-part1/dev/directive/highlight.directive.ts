import {Component, Directive, Renderer} from "angular2/core";
import {ElementRef} from "angular2/core";

@Directive({
    selector: '[myHighlight]'
})

export class HighlightDirective{
    private _defaultColor = 'green';
    constructor(
        private _renderer: Renderer,
        //shortcut syntax to set html element reference
        private _elRef: ElementRef
    ){



    }
    ngOnInit():void {

        //clean way
        this._renderer.setElementStyle(this._elRef.nativeElement, 'backgroundColor', this._defaultColor);

        //messy way
        //this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
        console.log(this._elRef);
    }
}