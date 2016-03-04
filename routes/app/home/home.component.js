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
    var core_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.title = 'Home Page';
                    this.body = 'This is the about home body';
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                HomeComponent.prototype.updateMessage = function (msg) {
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: "\n    Home\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSG9tZUNvbXBvbmVudCIsIkhvbWVDb21wb25lbnQuY29uc3RydWN0b3IiLCJIb21lQ29tcG9uZW50Lm5nT25Jbml0IiwiSG9tZUNvbXBvbmVudC51cGRhdGVNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFZSUE7b0JBSkFDLFVBQUtBLEdBQVdBLFdBQVdBLENBQUNBO29CQUM1QkEsU0FBSUEsR0FBV0EsNkJBQTZCQSxDQUFDQTtnQkFLN0NBLENBQUNBO2dCQUNERCxnQ0FBUUEsR0FBUkE7Z0JBQ0FFLENBQUNBO2dCQUNERixxQ0FBYUEsR0FBYkEsVUFBY0EsR0FBV0E7Z0JBQ3pCRyxDQUFDQTtnQkFsQkxIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLE1BQU1BO3dCQUNoQkEsUUFBUUEsRUFBQ0Esa0JBRVJBO3FCQUNKQSxDQUFDQTs7a0NBY0RBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0FuQkEsQUFtQkNBLElBQUE7WUFuQkQseUNBbUJDLENBQUEiLCJmaWxlIjoiaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlOmBcbiAgICBIb21lXG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnR7XG4gICAgdGl0bGU6IHN0cmluZyA9ICdIb21lIFBhZ2UnO1xuICAgIGJvZHk6IHN0cmluZyA9ICdUaGlzIGlzIHRoZSBhYm91dCBob21lIGJvZHknO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuICAgIHVwZGF0ZU1lc3NhZ2UobXNnOiBzdHJpbmcpOiB2b2lke1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
