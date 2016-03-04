System.register(["angular2/core", 'ng2-material/all'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1;
    var ShoppingListEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            }],
        execute: function() {
            ShoppingListEditComponent = (function () {
                function ShoppingListEditComponent() {
                    //out save and delete change events
                    this.savedItem = new core_1.EventEmitter();
                    this.deleteItem = new core_1.EventEmitter();
                    this.item = {
                        todo: {
                            name: '',
                            amount: 0
                        },
                        index: ''
                    };
                }
                ShoppingListEditComponent.prototype.saveItem = function (name, amount, index) {
                    this.item = {
                        todo: {
                            name: name.value,
                            amount: amount.value
                        },
                        index: index
                    };
                    //emit item to save
                    this.savedItem.emit(this.item);
                };
                ShoppingListEditComponent.prototype.onDelete = function () {
                    //emit item to delete
                    this.deleteItem.emit(this.item);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ShoppingListEditComponent.prototype, "item", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ShoppingListEditComponent.prototype, "savedItem", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ShoppingListEditComponent.prototype, "deleteItem", void 0);
                ShoppingListEditComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-edit',
                        directives: [all_1.MATERIAL_DIRECTIVES],
                        template: "\n    <md-subheader class=\"md-no-sticky\">Edit Item</md-subheader>\n    <br>\n    <div class=\"editForm\" >\n        <div layout-gt-sm=\"row\">\n            <md-input-container class=\"md-block\"  flex-gt-sm>\n                <label>Add New Item</label>\n                <input md-input [value]=\"item.todo.name\" #editName>\n            </md-input-container>\n            <md-input-container class=\"md-block\" flex-gt-sm>\n                <label>Amount</label>\n                <input md-input type=\"number\" step=\"any\" [value]=\"item.todo.amount\" #editAmount/>\n            </md-input-container>\n        </div>\n        <button md-raised-button class=\"md-accent md-hue-1\" (click)=\"saveItem(editName, editAmount, item.index)\">Save Item</button>\n        <button md-raised-button class=\"md-accent md-hue-1\" (click)=\"onDelete()\">Delete Item</button>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListEditComponent);
                return ShoppingListEditComponent;
            })();
            exports_1("ShoppingListEditComponent", ShoppingListEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmcuZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiU2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudCIsIlNob3BwaW5nTGlzdEVkaXRDb21wb25lbnQuY29uc3RydWN0b3IiLCJTaG9wcGluZ0xpc3RFZGl0Q29tcG9uZW50LnNhdmVJdGVtIiwiU2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudC5vbkRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBZ0NJQTtvQkFKQUMsbUNBQW1DQTtvQkFDekJBLGNBQVNBLEdBQUdBLElBQUlBLG1CQUFZQSxFQUFFQSxDQUFDQTtvQkFDL0JBLGVBQVVBLEdBQUdBLElBQUlBLG1CQUFZQSxFQUFFQSxDQUFDQTtvQkFHdENBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBO3dCQUNSQSxJQUFJQSxFQUFFQTs0QkFDRkEsSUFBSUEsRUFBQ0EsRUFBRUE7NEJBQ1BBLE1BQU1BLEVBQUNBLENBQUNBO3lCQUNYQTt3QkFDREEsS0FBS0EsRUFBRUEsRUFBRUE7cUJBQ1pBLENBQUNBO2dCQUNOQSxDQUFDQTtnQkFDREQsNENBQVFBLEdBQVJBLFVBQVNBLElBQUlBLEVBQUVBLE1BQU1BLEVBQUVBLEtBQUtBO29CQUN4QkUsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0E7d0JBQ1JBLElBQUlBLEVBQUVBOzRCQUNGQSxJQUFJQSxFQUFDQSxJQUFJQSxDQUFDQSxLQUFLQTs0QkFDZkEsTUFBTUEsRUFBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0E7eUJBQ3RCQTt3QkFDREEsS0FBS0EsRUFBRUEsS0FBS0E7cUJBQ2ZBLENBQUNBO29CQUNGQSxtQkFBbUJBO29CQUNuQkEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ25DQSxDQUFDQTtnQkFDREYsNENBQVFBLEdBQVJBO29CQUNJRyxxQkFBcUJBO29CQUNyQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BDQSxDQUFDQTtnQkE3QkRIO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLDJDQUFJQSxVQUFTQTtnQkFHdEJBO29CQUFDQSxhQUFNQSxFQUFFQTs7bUJBQUNBLGdEQUFTQSxVQUFzQkE7Z0JBQ3pDQTtvQkFBQ0EsYUFBTUEsRUFBRUE7O21CQUFDQSxpREFBVUEsVUFBc0JBO2dCQTlCOUNBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLG9CQUFvQkE7d0JBQzlCQSxVQUFVQSxFQUFDQSxDQUFDQSx5QkFBbUJBLENBQUNBO3dCQUNoQ0EsUUFBUUEsRUFBQ0EsbTNCQWlCUkE7cUJBQ0pBLENBQUNBOzs4Q0FtQ0RBO2dCQUFEQSxnQ0FBQ0E7WUFBREEsQ0F4REEsQUF3RENBLElBQUE7WUF4REQsaUVBd0RDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy5lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gJ25nMi1tYXRlcmlhbC9hbGwnO1xuaW1wb3J0IHtMaXN0SXRlbXN9IGZyb20gXCIuL2xpc3RNb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QtZWRpdCcsXG4gICAgZGlyZWN0aXZlczpbTUFURVJJQUxfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6YFxuICAgIDxtZC1zdWJoZWFkZXIgY2xhc3M9XCJtZC1uby1zdGlja3lcIj5FZGl0IEl0ZW08L21kLXN1YmhlYWRlcj5cbiAgICA8YnI+XG4gICAgPGRpdiBjbGFzcz1cImVkaXRGb3JtXCIgPlxuICAgICAgICA8ZGl2IGxheW91dC1ndC1zbT1cInJvd1wiPlxuICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCIgIGZsZXgtZ3Qtc20+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkFkZCBOZXcgSXRlbTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG1kLWlucHV0IFt2YWx1ZV09XCJpdGVtLnRvZG8ubmFtZVwiICNlZGl0TmFtZT5cbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCIgZmxleC1ndC1zbT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+QW1vdW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbWQtaW5wdXQgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBbdmFsdWVdPVwiaXRlbS50b2RvLmFtb3VudFwiICNlZGl0QW1vdW50Lz5cbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBtZC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwibWQtYWNjZW50IG1kLWh1ZS0xXCIgKGNsaWNrKT1cInNhdmVJdGVtKGVkaXROYW1lLCBlZGl0QW1vdW50LCBpdGVtLmluZGV4KVwiPlNhdmUgSXRlbTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG1kLXJhaXNlZC1idXR0b24gY2xhc3M9XCJtZC1hY2NlbnQgbWQtaHVlLTFcIiAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZSBJdGVtPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdEVkaXRDb21wb25lbnR7XG5cbiAgICAvL2JpbmQgaW5wdXQgaXRlbSB0byB0aGlzLml0ZW1cbiAgICBASW5wdXQoKSBpdGVtOiBPYmplY3Q7XG5cbiAgICAvL291dCBzYXZlIGFuZCBkZWxldGUgY2hhbmdlIGV2ZW50c1xuICAgIEBPdXRwdXQoKSBzYXZlZEl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGRlbGV0ZUl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLml0ZW0gPSB7XG4gICAgICAgICAgICB0b2RvOiB7XG4gICAgICAgICAgICAgICAgbmFtZTonJyxcbiAgICAgICAgICAgICAgICBhbW91bnQ6MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluZGV4OiAnJ1xuICAgICAgICB9O1xuICAgIH1cbiAgICBzYXZlSXRlbShuYW1lLCBhbW91bnQsIGluZGV4KTp2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtID0ge1xuICAgICAgICAgICAgdG9kbzoge1xuICAgICAgICAgICAgICAgIG5hbWU6bmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBhbW91bnQ6YW1vdW50LnZhbHVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgIH07XG4gICAgICAgIC8vZW1pdCBpdGVtIHRvIHNhdmVcbiAgICAgICAgdGhpcy5zYXZlZEl0ZW0uZW1pdCh0aGlzLml0ZW0pO1xuICAgIH1cbiAgICBvbkRlbGV0ZSgpOiB2b2lke1xuICAgICAgICAvL2VtaXQgaXRlbSB0byBkZWxldGVcbiAgICAgICAgdGhpcy5kZWxldGVJdGVtLmVtaXQodGhpcy5pdGVtKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
