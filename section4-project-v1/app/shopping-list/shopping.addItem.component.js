System.register(["angular2/core", 'ng2-material/all', "angular2/src/core/change_detection/change_detector_ref", "./services/shopping-list.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, change_detector_ref_1, shopping_list_service_1;
    var ShoppingAddItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (change_detector_ref_1_1) {
                change_detector_ref_1 = change_detector_ref_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingAddItem = (function () {
                function ShoppingAddItem(cdr, _shoppingListService) {
                    this.cdr = cdr;
                    this._shoppingListService = _shoppingListService;
                    //to send object to another controller
                    //step 1 create event emitter
                    //step 2 create click event to emit the new event
                    //step 3 create output
                    //step 4 create function to fire (itemAdded)="onItemAdded($event)"
                    this.itemAdded = new core_1.EventEmitter();
                    this.item = {
                        name: '',
                        amount: 0
                    };
                }
                ShoppingAddItem.prototype.submitList = function (item) {
                    if (item.name != '') {
                        //could also just emit this.item instead of passing variable...
                        this.itemAdded.emit(item);
                        this.item = {
                            name: '',
                            amount: 0
                        };
                        //detect change of reset
                        this.cdr.detectChanges();
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ShoppingAddItem.prototype, "itemAdded", void 0);
                ShoppingAddItem = __decorate([
                    core_1.Component({
                        selector: 'shopping-add-item',
                        directives: [all_1.MATERIAL_DIRECTIVES],
                        template: "\n    <form name=\"userForm\">\n        <div layout-gt-sm=\"row\">\n            <md-input-container class=\"md-block\" flex-gt-sm>\n                <label>Add New Item</label>\n                <input md-input [(value)]=\"item.name\">\n            </md-input-container>\n            <md-input-container class=\"md-block\" flex-gt-sm>\n                <label>Amount</label>\n                <input md-input type=\"number\" step=\"any\" [(value)]=\"item.amount\"/>\n            </md-input-container>\n        </div>\n        <button md-raised-button class=\"md-accent md-hue-1\" (click)=\"submitList(item)\">Add Item</button>\n    </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [change_detector_ref_1.ChangeDetectorRef, shopping_list_service_1.ShoppingListService])
                ], ShoppingAddItem);
                return ShoppingAddItem;
            })();
            exports_1("ShoppingAddItem", ShoppingAddItem);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmcuYWRkSXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiU2hvcHBpbmdBZGRJdGVtIiwiU2hvcHBpbmdBZGRJdGVtLmNvbnN0cnVjdG9yIiwiU2hvcHBpbmdBZGRJdGVtLnN1Ym1pdExpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQWdDSUEseUJBQ1lBLEdBQXNCQSxFQUN0QkEsb0JBQXlDQTtvQkFEekNDLFFBQUdBLEdBQUhBLEdBQUdBLENBQW1CQTtvQkFDdEJBLHlCQUFvQkEsR0FBcEJBLG9CQUFvQkEsQ0FBcUJBO29CQVZyREEsc0NBQXNDQTtvQkFDdENBLDZCQUE2QkE7b0JBQzdCQSxpREFBaURBO29CQUNqREEsc0JBQXNCQTtvQkFDdEJBLGtFQUFrRUE7b0JBRXhEQSxjQUFTQSxHQUFHQSxJQUFJQSxtQkFBWUEsRUFBYUEsQ0FBQ0E7b0JBTWhEQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQTt3QkFDUkEsSUFBSUEsRUFBRUEsRUFBRUE7d0JBQ1JBLE1BQU1BLEVBQUVBLENBQUNBO3FCQUNaQSxDQUFBQTtnQkFDTEEsQ0FBQ0E7Z0JBQ0RELG9DQUFVQSxHQUFWQSxVQUFXQSxJQUFlQTtvQkFFdEJFLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBLENBQUFBLENBQUNBO3dCQUNoQkEsK0RBQStEQTt3QkFDL0RBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUMxQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0E7NEJBQ1JBLElBQUlBLEVBQUVBLEVBQUVBOzRCQUNSQSxNQUFNQSxFQUFFQSxDQUFDQTt5QkFDWkEsQ0FBQ0E7d0JBQ0ZBLHdCQUF3QkE7d0JBQ3hCQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQTtvQkFDN0JBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkF2QkRGO29CQUFDQSxhQUFNQSxFQUFFQTs7bUJBQUNBLHNDQUFTQSxVQUFpQ0E7Z0JBOUJ4REE7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsbUJBQW1CQTt3QkFDN0JBLFVBQVVBLEVBQUNBLENBQUNBLHlCQUFtQkEsQ0FBQ0E7d0JBQ2hDQSxRQUFRQSxFQUFDQSxtb0JBY1JBO3FCQUNKQSxDQUFDQTs7b0NBb0NEQTtnQkFBREEsc0JBQUNBO1lBQURBLENBdERBLEFBc0RDQSxJQUFBO1lBdERELDZDQXNEQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmcuYWRkSXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gJ25nMi1tYXRlcmlhbC9hbGwnO1xuaW1wb3J0IHtMaXN0SXRlbXN9IGZyb20gXCIuL2xpc3RNb2RlbFwiO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdG9yX3JlZlwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9zaG9wcGluZy1saXN0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1hZGQtaXRlbScsXG4gICAgZGlyZWN0aXZlczpbTUFURVJJQUxfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6YFxuICAgIDxmb3JtIG5hbWU9XCJ1c2VyRm9ybVwiPlxuICAgICAgICA8ZGl2IGxheW91dC1ndC1zbT1cInJvd1wiPlxuICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCIgZmxleC1ndC1zbT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+QWRkIE5ldyBJdGVtPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbWQtaW5wdXQgWyh2YWx1ZSldPVwiaXRlbS5uYW1lXCI+XG4gICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiIGZsZXgtZ3Qtc20+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG1kLWlucHV0IHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgWyh2YWx1ZSldPVwiaXRlbS5hbW91bnRcIi8+XG4gICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gbWQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cIm1kLWFjY2VudCBtZC1odWUtMVwiIChjbGljayk9XCJzdWJtaXRMaXN0KGl0ZW0pXCI+QWRkIEl0ZW08L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nQWRkSXRlbXtcblxuICAgIGl0ZW06IExpc3RJdGVtcztcblxuICAgIC8vdG8gc2VuZCBvYmplY3QgdG8gYW5vdGhlciBjb250cm9sbGVyXG4gICAgLy9zdGVwIDEgY3JlYXRlIGV2ZW50IGVtaXR0ZXJcbiAgICAvL3N0ZXAgMiBjcmVhdGUgY2xpY2sgZXZlbnQgdG8gZW1pdCB0aGUgbmV3IGV2ZW50XG4gICAgLy9zdGVwIDMgY3JlYXRlIG91dHB1dFxuICAgIC8vc3RlcCA0IGNyZWF0ZSBmdW5jdGlvbiB0byBmaXJlIChpdGVtQWRkZWQpPVwib25JdGVtQWRkZWQoJGV2ZW50KVwiXG5cbiAgICBAT3V0cHV0KCkgaXRlbUFkZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbXM+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlXG4gICAgKXtcbiAgICAgICAgdGhpcy5pdGVtID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBhbW91bnQ6IDBcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdWJtaXRMaXN0KGl0ZW06IExpc3RJdGVtcyk6dm9pZCB7XG5cbiAgICAgICAgaWYoaXRlbS5uYW1lICE9ICcnKXtcbiAgICAgICAgICAgIC8vY291bGQgYWxzbyBqdXN0IGVtaXQgdGhpcy5pdGVtIGluc3RlYWQgb2YgcGFzc2luZyB2YXJpYWJsZS4uLlxuICAgICAgICAgICAgdGhpcy5pdGVtQWRkZWQuZW1pdChpdGVtKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvL2RldGVjdCBjaGFuZ2Ugb2YgcmVzZXRcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
