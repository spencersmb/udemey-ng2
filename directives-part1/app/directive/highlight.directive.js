System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective(_renderer, 
                    //shortcut syntax to set html element reference
                    _elRef) {
                    this._renderer = _renderer;
                    this._elRef = _elRef;
                    this._defaultColor = 'green';
                }
                HighlightDirective.prototype.ngOnInit = function () {
                    //clean way
                    this._renderer.setElementStyle(this._elRef.nativeElement, 'backgroundColor', this._defaultColor);
                    //messy way
                    //this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
                    console.log(this._elRef);
                };
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]'
                    }), 
                    __metadata('design:paramtypes', [core_1.Renderer, core_2.ElementRef])
                ], HighlightDirective);
                return HighlightDirective;
            })();
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZS9oaWdobGlnaHQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbIkhpZ2hsaWdodERpcmVjdGl2ZSIsIkhpZ2hsaWdodERpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsIkhpZ2hsaWdodERpcmVjdGl2ZS5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQU1JQSw0QkFDWUEsU0FBbUJBO29CQUMzQkEsK0NBQStDQTtvQkFDdkNBLE1BQWtCQTtvQkFGbEJDLGNBQVNBLEdBQVRBLFNBQVNBLENBQVVBO29CQUVuQkEsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBWUE7b0JBSnRCQSxrQkFBYUEsR0FBR0EsT0FBT0EsQ0FBQ0E7Z0JBU2hDQSxDQUFDQTtnQkFDREQscUNBQVFBLEdBQVJBO29CQUVJRSxXQUFXQTtvQkFDWEEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsRUFBRUEsaUJBQWlCQSxFQUFFQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtvQkFFakdBLFdBQVdBO29CQUNYQSx1RUFBdUVBO29CQUN2RUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtnQkF2QkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGVBQWVBO3FCQUM1QkEsQ0FBQ0E7O3VDQXNCREE7Z0JBQURBLHlCQUFDQTtZQUFEQSxDQXhCQSxBQXdCQ0EsSUFBQTtZQXhCRCxtREF3QkMsQ0FBQSIsImZpbGUiOiJkaXJlY3RpdmUvaGlnaGxpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBEaXJlY3RpdmUsIFJlbmRlcmVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tteUhpZ2hsaWdodF0nXG59KVxuXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0RGlyZWN0aXZle1xuICAgIHByaXZhdGUgX2RlZmF1bHRDb2xvciA9ICdncmVlbic7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcixcbiAgICAgICAgLy9zaG9ydGN1dCBzeW50YXggdG8gc2V0IGh0bWwgZWxlbWVudCByZWZlcmVuY2VcbiAgICAgICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWZcbiAgICApe1xuXG5cblxuICAgIH1cbiAgICBuZ09uSW5pdCgpOnZvaWQge1xuXG4gICAgICAgIC8vY2xlYW4gd2F5XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZENvbG9yJywgdGhpcy5fZGVmYXVsdENvbG9yKTtcblxuICAgICAgICAvL21lc3N5IHdheVxuICAgICAgICAvL3RoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5fZGVmYXVsdENvbG9yO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9lbFJlZik7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
