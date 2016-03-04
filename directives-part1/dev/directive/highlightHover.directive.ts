import {Component, Directive, Renderer, Input} from "angular2/core";
import {ElementRef} from "angular2/core";

@Directive({
    selector: '[highlightHover]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})

export class HighlightHoverDirective{

    private _defaultColor = 'transparent';
    @Input('highlightHover') highlightColor;

    highlightColor: string;

    constructor(
        private _renderer: Renderer,
        //shortcut syntax to set html element reference
        private _elRef: ElementRef
    ){



    }
    ngOnInit():void {

        //clean way
        //this.change();

        //messy way
        //this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
        console.log(this._elRef);
    }
    change(): void{
        if(this.highlightColor){
            this._renderer.setElementStyle(
                this._elRef.nativeElement, 'color', 'white'
            );
        }
        this._renderer.setElementStyle(
            this._elRef.nativeElement, 'backgroundColor', this.highlightColor || this._defaultColor
        );
    }
    private _highlight(color:string): void{
        this._renderer.setElementStyle(
            this._elRef.nativeElement, 'backgroundColor', color || this._defaultColor
        );
    }
    private _addClass(name:string): void{
        this._renderer.setElementClass(
            this._elRef.nativeElement, name, true
        );

        //method without using Renderer
        //this._elRef.nativeElement.classList.add(name);
    }
    private _removeClass(name:string): void{
        this._renderer.setElementClass(
            this._elRef.nativeElement, name, false
        );

        //method without using Renderer
        //this._elRef.nativeElement.classList.remove(name);
    }

    onMouseEnter() {
        console.log('enter');

        this._addClass('hover');
        this._highlight("yellow");

    }
    onMouseLeave() {
        console.log('leave');

        this._removeClass('hover');
        this._highlight(null);
    }
}