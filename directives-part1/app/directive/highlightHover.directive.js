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
    var HighlightHoverDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            HighlightHoverDirective = (function () {
                function HighlightHoverDirective(_renderer, 
                    //shortcut syntax to set html element reference
                    _elRef) {
                    this._renderer = _renderer;
                    this._elRef = _elRef;
                    this._defaultColor = 'transparent';
                }
                HighlightHoverDirective.prototype.ngOnInit = function () {
                    //clean way
                    //this.change();
                    //messy way
                    //this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
                    console.log(this._elRef);
                };
                HighlightHoverDirective.prototype.change = function () {
                    if (this.highlightColor) {
                        this._renderer.setElementStyle(this._elRef.nativeElement, 'color', 'white');
                    }
                    this._renderer.setElementStyle(this._elRef.nativeElement, 'backgroundColor', this.highlightColor || this._defaultColor);
                };
                HighlightHoverDirective.prototype._highlight = function (color) {
                    this._renderer.setElementStyle(this._elRef.nativeElement, 'backgroundColor', color || this._defaultColor);
                };
                HighlightHoverDirective.prototype._addClass = function (name) {
                    this._renderer.setElementClass(this._elRef.nativeElement, name, true);
                    //method without using Renderer
                    //this._elRef.nativeElement.classList.add(name);
                };
                HighlightHoverDirective.prototype._removeClass = function (name) {
                    this._renderer.setElementClass(this._elRef.nativeElement, name, false);
                    //method without using Renderer
                    //this._elRef.nativeElement.classList.remove(name);
                };
                HighlightHoverDirective.prototype.onMouseEnter = function () {
                    console.log('enter');
                    this._addClass('hover');
                    this._highlight("yellow");
                };
                HighlightHoverDirective.prototype.onMouseLeave = function () {
                    console.log('leave');
                    this._removeClass('hover');
                    this._highlight(null);
                };
                __decorate([
                    core_1.Input('highlightHover'), 
                    __metadata('design:type', Object)
                ], HighlightHoverDirective.prototype, "highlightColor", void 0);
                HighlightHoverDirective = __decorate([
                    core_1.Directive({
                        selector: '[highlightHover]',
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.Renderer, core_2.ElementRef])
                ], HighlightHoverDirective);
                return HighlightHoverDirective;
            })();
            exports_1("HighlightHoverDirective", HighlightHoverDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZS9oaWdobGlnaHRIb3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOlsiSGlnaGxpZ2h0SG92ZXJEaXJlY3RpdmUiLCJIaWdobGlnaHRIb3ZlckRpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsIkhpZ2hsaWdodEhvdmVyRGlyZWN0aXZlLm5nT25Jbml0IiwiSGlnaGxpZ2h0SG92ZXJEaXJlY3RpdmUuY2hhbmdlIiwiSGlnaGxpZ2h0SG92ZXJEaXJlY3RpdmUuX2hpZ2hsaWdodCIsIkhpZ2hsaWdodEhvdmVyRGlyZWN0aXZlLl9hZGRDbGFzcyIsIkhpZ2hsaWdodEhvdmVyRGlyZWN0aXZlLl9yZW1vdmVDbGFzcyIsIkhpZ2hsaWdodEhvdmVyRGlyZWN0aXZlLm9uTW91c2VFbnRlciIsIkhpZ2hsaWdodEhvdmVyRGlyZWN0aXZlLm9uTW91c2VMZWF2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQWVJQSxpQ0FDWUEsU0FBbUJBO29CQUMzQkEsK0NBQStDQTtvQkFDdkNBLE1BQWtCQTtvQkFGbEJDLGNBQVNBLEdBQVRBLFNBQVNBLENBQVVBO29CQUVuQkEsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBWUE7b0JBUnRCQSxrQkFBYUEsR0FBR0EsYUFBYUEsQ0FBQ0E7Z0JBYXRDQSxDQUFDQTtnQkFDREQsMENBQVFBLEdBQVJBO29CQUVJRSxXQUFXQTtvQkFDWEEsZ0JBQWdCQTtvQkFFaEJBLFdBQVdBO29CQUNYQSx1RUFBdUVBO29CQUN2RUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtnQkFDREYsd0NBQU1BLEdBQU5BO29CQUNJRyxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFBQSxDQUFDQTt3QkFDcEJBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLGVBQWVBLENBQzFCQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxhQUFhQSxFQUFFQSxPQUFPQSxFQUFFQSxPQUFPQSxDQUM5Q0EsQ0FBQ0E7b0JBQ05BLENBQUNBO29CQUNEQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxlQUFlQSxDQUMxQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsRUFBRUEsaUJBQWlCQSxFQUFFQSxJQUFJQSxDQUFDQSxjQUFjQSxJQUFJQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUMxRkEsQ0FBQ0E7Z0JBQ05BLENBQUNBO2dCQUNPSCw0Q0FBVUEsR0FBbEJBLFVBQW1CQSxLQUFZQTtvQkFDM0JJLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLGVBQWVBLENBQzFCQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxhQUFhQSxFQUFFQSxpQkFBaUJBLEVBQUVBLEtBQUtBLElBQUlBLElBQUlBLENBQUNBLGFBQWFBLENBQzVFQSxDQUFDQTtnQkFDTkEsQ0FBQ0E7Z0JBQ09KLDJDQUFTQSxHQUFqQkEsVUFBa0JBLElBQVdBO29CQUN6QkssSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsZUFBZUEsQ0FDMUJBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLGFBQWFBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLENBQ3hDQSxDQUFDQTtvQkFFRkEsK0JBQStCQTtvQkFDL0JBLGdEQUFnREE7Z0JBQ3BEQSxDQUFDQTtnQkFDT0wsOENBQVlBLEdBQXBCQSxVQUFxQkEsSUFBV0E7b0JBQzVCTSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxlQUFlQSxDQUMxQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsQ0FDekNBLENBQUNBO29CQUVGQSwrQkFBK0JBO29CQUMvQkEsbURBQW1EQTtnQkFDdkRBLENBQUNBO2dCQUVETiw4Q0FBWUEsR0FBWkE7b0JBQ0lPLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO29CQUVyQkEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3hCQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFFOUJBLENBQUNBO2dCQUNEUCw4Q0FBWUEsR0FBWkE7b0JBQ0lRLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO29CQUVyQkEsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7b0JBQzNCQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDMUJBLENBQUNBO2dCQWxFRFI7b0JBQUNBLFlBQUtBLENBQUNBLGdCQUFnQkEsQ0FBQ0E7O21CQUFDQSxtREFBY0EsVUFBQ0E7Z0JBWDVDQTtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxrQkFBa0JBO3dCQUM1QkEsSUFBSUEsRUFBRUE7NEJBQ0ZBLGNBQWNBLEVBQUVBLGdCQUFnQkE7NEJBQ2hDQSxjQUFjQSxFQUFFQSxnQkFBZ0JBO3lCQUNuQ0E7cUJBQ0pBLENBQUNBOzs0Q0F3RURBO2dCQUFEQSw4QkFBQ0E7WUFBREEsQ0E5RUEsQUE4RUNBLElBQUE7WUE5RUQsNkRBOEVDLENBQUEiLCJmaWxlIjoiZGlyZWN0aXZlL2hpZ2hsaWdodEhvdmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBEaXJlY3RpdmUsIFJlbmRlcmVyLCBJbnB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaGlnaGxpZ2h0SG92ZXJdJyxcbiAgICBob3N0OiB7XG4gICAgICAgICcobW91c2VlbnRlciknOiAnb25Nb3VzZUVudGVyKCknLFxuICAgICAgICAnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VMZWF2ZSgpJ1xuICAgIH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRIb3ZlckRpcmVjdGl2ZXtcblxuICAgIHByaXZhdGUgX2RlZmF1bHRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgQElucHV0KCdoaWdobGlnaHRIb3ZlcicpIGhpZ2hsaWdodENvbG9yO1xuXG4gICAgaGlnaGxpZ2h0Q29sb3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgICAgIC8vc2hvcnRjdXQgc3ludGF4IHRvIHNldCBodG1sIGVsZW1lbnQgcmVmZXJlbmNlXG4gICAgICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmXG4gICAgKXtcblxuXG5cbiAgICB9XG4gICAgbmdPbkluaXQoKTp2b2lkIHtcblxuICAgICAgICAvL2NsZWFuIHdheVxuICAgICAgICAvL3RoaXMuY2hhbmdlKCk7XG5cbiAgICAgICAgLy9tZXNzeSB3YXlcbiAgICAgICAgLy90aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuX2RlZmF1bHRDb2xvcjtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZWxSZWYpO1xuICAgIH1cbiAgICBjaGFuZ2UoKTogdm9pZHtcbiAgICAgICAgaWYodGhpcy5oaWdobGlnaHRDb2xvcil7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2NvbG9yJywgJ3doaXRlJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoXG4gICAgICAgICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZENvbG9yJywgdGhpcy5oaWdobGlnaHRDb2xvciB8fCB0aGlzLl9kZWZhdWx0Q29sb3JcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfaGlnaGxpZ2h0KGNvbG9yOnN0cmluZyk6IHZvaWR7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShcbiAgICAgICAgICAgIHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kQ29sb3InLCBjb2xvciB8fCB0aGlzLl9kZWZhdWx0Q29sb3JcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfYWRkQ2xhc3MobmFtZTpzdHJpbmcpOiB2b2lke1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MoXG4gICAgICAgICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCBuYW1lLCB0cnVlXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9tZXRob2Qgd2l0aG91dCB1c2luZyBSZW5kZXJlclxuICAgICAgICAvL3RoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfcmVtb3ZlQ2xhc3MobmFtZTpzdHJpbmcpOiB2b2lke1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MoXG4gICAgICAgICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCBuYW1lLCBmYWxzZVxuICAgICAgICApO1xuXG4gICAgICAgIC8vbWV0aG9kIHdpdGhvdXQgdXNpbmcgUmVuZGVyZXJcbiAgICAgICAgLy90aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZUVudGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZW50ZXInKTtcblxuICAgICAgICB0aGlzLl9hZGRDbGFzcygnaG92ZXInKTtcbiAgICAgICAgdGhpcy5faGlnaGxpZ2h0KFwieWVsbG93XCIpO1xuXG4gICAgfVxuICAgIG9uTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xlYXZlJyk7XG5cbiAgICAgICAgdGhpcy5fcmVtb3ZlQ2xhc3MoJ2hvdmVyJyk7XG4gICAgICAgIHRoaXMuX2hpZ2hsaWdodChudWxsKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
