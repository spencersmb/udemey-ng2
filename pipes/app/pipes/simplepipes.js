System.register(["angular2/core", 'ng2-material/all', "./reverse.pipe"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, reverse_pipe_1;
    var SimplePipes;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (reverse_pipe_1_1) {
                reverse_pipe_1 = reverse_pipe_1_1;
            }],
        execute: function() {
            SimplePipes = (function () {
                function SimplePipes() {
                    this.today = new Date();
                }
                SimplePipes = __decorate([
                    core_1.Component({
                        selector: 'simple-pipes',
                        templateUrl: 'dev/view/simple-pipes.html',
                        directives: [all_1.MATERIAL_DIRECTIVES],
                        pipes: [reverse_pipe_1.ReversePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SimplePipes);
                return SimplePipes;
            })();
            exports_1("SimplePipes", SimplePipes);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL3NpbXBsZXBpcGVzLnRzIl0sIm5hbWVzIjpbIlNpbXBsZVBpcGVzIiwiU2ltcGxlUGlwZXMuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQVVJQTtvQkFDSUMsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7Z0JBQzVCQSxDQUFDQTtnQkFaTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsY0FBY0E7d0JBQ3hCQSxXQUFXQSxFQUFDQSw0QkFBNEJBO3dCQUN4Q0EsVUFBVUEsRUFBQ0EsQ0FBQ0EseUJBQW1CQSxDQUFDQTt3QkFDaENBLEtBQUtBLEVBQUNBLENBQUNBLDBCQUFXQSxDQUFDQTtxQkFDdEJBLENBQUNBOztnQ0FRREE7Z0JBQURBLGtCQUFDQTtZQUFEQSxDQWJBLEFBYUNBLElBQUE7WUFiRCxxQ0FhQyxDQUFBIiwiZmlsZSI6InBpcGVzL3NpbXBsZXBpcGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gJ25nMi1tYXRlcmlhbC9hbGwnO1xuaW1wb3J0IHtSZXZlcnNlUGlwZX0gZnJvbSBcIi4vcmV2ZXJzZS5waXBlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2ltcGxlLXBpcGVzJyxcbiAgICB0ZW1wbGF0ZVVybDonZGV2L3ZpZXcvc2ltcGxlLXBpcGVzLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6W01BVEVSSUFMX0RJUkVDVElWRVNdLFxuICAgIHBpcGVzOltSZXZlcnNlUGlwZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVQaXBlc3tcblxuICAgIHRvZGF5OiBhbnk7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy50b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
