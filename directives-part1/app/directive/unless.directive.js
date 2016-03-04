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
    var UnlessDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            UnlessDirective = (function () {
                function UnlessDirective(
                    //the text between the element tags
                    _template, 
                    //the place where we want to insert it into the dom
                    _view) {
                    this._template = _template;
                    this._view = _view;
                }
                Object.defineProperty(UnlessDirective.prototype, "ngUnless", {
                    //when this element gets set - do something
                    set: function (condition) {
                        if (!condition) {
                            //create view to hold our template
                            this._view.createEmbeddedView(this._template);
                        }
                        else {
                            this._view.clear();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], UnlessDirective.prototype, "ngUnless", void 0);
                UnlessDirective = __decorate([
                    core_1.Directive({
                        selector: '[ngUnless]',
                    }), 
                    __metadata('design:paramtypes', [core_2.TemplateRef, core_2.ViewContainerRef])
                ], UnlessDirective);
                return UnlessDirective;
            })();
            exports_1("UnlessDirective", UnlessDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZS91bmxlc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbIlVubGVzc0RpcmVjdGl2ZSIsIlVubGVzc0RpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsIlVubGVzc0RpcmVjdGl2ZS5uZ1VubGVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQVVJQTtvQkFDSUEsbUNBQW1DQTtvQkFDM0JBLFNBQXNCQTtvQkFFOUJBLG1EQUFtREE7b0JBQzNDQSxLQUF1QkE7b0JBSHZCQyxjQUFTQSxHQUFUQSxTQUFTQSxDQUFhQTtvQkFHdEJBLFVBQUtBLEdBQUxBLEtBQUtBLENBQWtCQTtnQkFFakNBLENBQUNBO2dCQUVIRCxzQkFBSUEscUNBQVFBO29CQURaQSwyQ0FBMkNBO3lCQUMzQ0EsVUFBYUEsU0FBa0JBO3dCQUMzQkUsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7NEJBQ1hBLGtDQUFrQ0E7NEJBQ2xDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxrQkFBa0JBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO3dCQUNsREEsQ0FBQ0E7d0JBQUFBLElBQUlBLENBQUFBLENBQUNBOzRCQUNGQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTt3QkFDdkJBLENBQUNBO29CQUNMQSxDQUFDQTs7O21CQUFBRjtnQkFsQkRBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLHFDQUFRQSxVQUFDQTtnQkFSdEJBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFlBQVlBO3FCQUN6QkEsQ0FBQ0E7O29DQXlCREE7Z0JBQURBLHNCQUFDQTtZQUFEQSxDQTNCQSxBQTJCQ0EsSUFBQTtZQTNCRCw2Q0EyQkMsQ0FBQSIsImZpbGUiOiJkaXJlY3RpdmUvdW5sZXNzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBEaXJlY3RpdmUsIFJlbmRlcmVyLCBJbnB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Vmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWZ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25nVW5sZXNzXScsXG59KVxuXG5leHBvcnQgY2xhc3MgVW5sZXNzRGlyZWN0aXZle1xuXG4gICAgLy9CaW5kIHRvIHRoZSBzZWxlY3RvciB0byBhbGxvdyBhbiBpbnB1dCBvbiB0aGUgc2VsZWN0b3IsXG4gICAgLy90aGVuIHdlIGhhdmUgYSBmdW5jdGlvbiBidWlsdCBpbiB0byBmaXJlIG9uY2UgaXQgZ2V0cyBzZXQgYmVsb3dcbiAgICBASW5wdXQoKSBuZ1VubGVzcztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAvL3RoZSB0ZXh0IGJldHdlZW4gdGhlIGVsZW1lbnQgdGFnc1xuICAgICAgICBwcml2YXRlIF90ZW1wbGF0ZTogVGVtcGxhdGVSZWYsXG5cbiAgICAgICAgLy90aGUgcGxhY2Ugd2hlcmUgd2Ugd2FudCB0byBpbnNlcnQgaXQgaW50byB0aGUgZG9tXG4gICAgICAgIHByaXZhdGUgX3ZpZXc6IFZpZXdDb250YWluZXJSZWZcblxuICAgICl7fVxuICAgIC8vd2hlbiB0aGlzIGVsZW1lbnQgZ2V0cyBzZXQgLSBkbyBzb21ldGhpbmdcbiAgICBzZXQgbmdVbmxlc3MoY29uZGl0aW9uOiBib29sZWFuKXtcbiAgICAgICAgaWYoIWNvbmRpdGlvbil7XG4gICAgICAgICAgICAvL2NyZWF0ZSB2aWV3IHRvIGhvbGQgb3VyIHRlbXBsYXRlXG4gICAgICAgICAgICB0aGlzLl92aWV3LmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90ZW1wbGF0ZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5fdmlldy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
