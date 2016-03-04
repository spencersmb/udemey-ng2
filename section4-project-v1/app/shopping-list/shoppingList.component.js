System.register(["angular2/core", 'ng2-material/all', "./shopping.addItem.component", "./shopping.edit.component", "./services/shopping-list.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, shopping_addItem_component_1, shopping_edit_component_1, shopping_list_service_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (shopping_addItem_component_1_1) {
                shopping_addItem_component_1 = shopping_addItem_component_1_1;
            },
            function (shopping_edit_component_1_1) {
                shopping_edit_component_1 = shopping_edit_component_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.listItems = [
                        {
                            name: 'item 1',
                            amount: 2
                        }
                    ];
                    //hide
                    this.isEditing = false;
                }
                ShoppingListComponent.prototype.onItemAdded = function (item) {
                    this.listItems.push(item);
                };
                ShoppingListComponent.prototype.onSelect = function (item, i) {
                    //local variable copy
                    this.selectedItem = {
                        todo: item,
                        index: i
                    };
                    //show
                    this.isEditing = true;
                };
                ShoppingListComponent.prototype.onItemEdited = function (item) {
                    //updateItem
                    this.listItems[item.index] = item.todo;
                    //hide
                    this.isEditing = false;
                };
                ShoppingListComponent.prototype.onItemDeleted = function (item) {
                    //remove item
                    this.listItems.splice(item.index, 1);
                    //hide
                    this.isEditing = false;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        directives: [all_1.MATERIAL_DIRECTIVES, shopping_addItem_component_1.ShoppingAddItem, shopping_edit_component_1.ShoppingListEditComponent],
                        styleUrls: ['src/css/list_item.css'],
                        providers: [shopping_list_service_1.ShoppingListService],
                        template: "\n    <section class=\"examples\">\n        <div layout=\"column\" class=\"md-inline-form\">\n            <md-content layout-padding>\n                <div class=\"section1\">\n                      <shopping-add-item (itemAdded)=\"onItemAdded($event)\"></shopping-add-item>\n                </div>\n            </md-content>\n        </div>\n    </section>\n    <section class=\"examples top\">\n        <div layout=\"column\" class=\"md-inline-form\">\n            <md-toolbar class=\"demo-toolbar md-primary\">\n                <div class=\"md-toolbar-tools\">\n                  <h3>My Shopping List</h3>\n                  <span flex=\"\"></span>\n                </div>\n            </md-toolbar>\n            <md-content layout-padding>\n\n                <md-subheader class=\"md-no-sticky\">Output</md-subheader>\n\n                  <md-list-item class=\"md-2-line\" *ngFor=\"#i = index; #item of listItems\" (click)=\"onSelect(item, i)\">\n                    <div class=\"md-list-item-text\">\n                        <h3>{{item.name}}, ({{item.amount}})</h3>\n                    </div>\n                  </md-list-item>\n\n                    <div *ngIf=\"isEditing != false\">\n\n                    <md-divider></md-divider>\n\n                  <shopping-list-edit [item]=\"selectedItem\" (savedItem)=\"onItemEdited($event)\" (deleteItem)=\"onItemDeleted($event)\"></shopping-list-edit>\n\n                    </div>\n\n\n            </md-content>\n        </div>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            })();
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmdMaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTaG9wcGluZ0xpc3RDb21wb25lbnQiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQuY29uc3RydWN0b3IiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQub25JdGVtQWRkZWQiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQub25TZWxlY3QiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQub25JdGVtRWRpdGVkIiwiU2hvcHBpbmdMaXN0Q29tcG9uZW50Lm9uSXRlbURlbGV0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQXdESUEsK0JBQ1lBLG9CQUF5Q0E7b0JBQXpDQyx5QkFBb0JBLEdBQXBCQSxvQkFBb0JBLENBQXFCQTtvQkFFakRBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBO3dCQUNiQTs0QkFDSUEsSUFBSUEsRUFBQ0EsUUFBUUE7NEJBQ2JBLE1BQU1BLEVBQUNBLENBQUNBO3lCQUNYQTtxQkFDSkEsQ0FBQ0E7b0JBRUZBLE1BQU1BO29CQUNOQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFDQSxLQUFLQSxDQUFDQTtnQkFFekJBLENBQUNBO2dCQUNERCwyQ0FBV0EsR0FBWEEsVUFBWUEsSUFBY0E7b0JBQ3RCRSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDOUJBLENBQUNBO2dCQUNERix3Q0FBUUEsR0FBUkEsVUFBU0EsSUFBY0EsRUFBRUEsQ0FBUUE7b0JBQzdCRyxxQkFBcUJBO29CQUNyQkEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0E7d0JBQ2hCQSxJQUFJQSxFQUFFQSxJQUFJQTt3QkFDVkEsS0FBS0EsRUFBRUEsQ0FBQ0E7cUJBQ1hBLENBQUNBO29CQUVGQSxNQUFNQTtvQkFDTkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBQ0EsSUFBSUEsQ0FBQ0E7Z0JBRXhCQSxDQUFDQTtnQkFDREgsNENBQVlBLEdBQVpBLFVBQWFBLElBQUlBO29CQUNiSSxZQUFZQTtvQkFDWkEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBRXZDQSxNQUFNQTtvQkFDTkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQzNCQSxDQUFDQTtnQkFDREosNkNBQWFBLEdBQWJBLFVBQWNBLElBQUlBO29CQUNkSyxhQUFhQTtvQkFDYkEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRXJDQSxNQUFNQTtvQkFDTkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQzNCQSxDQUFDQTtnQkFqR0xMO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGVBQWVBO3dCQUN6QkEsVUFBVUEsRUFBQ0EsQ0FBQ0EseUJBQW1CQSxFQUFFQSw0Q0FBZUEsRUFBRUEsbURBQXlCQSxDQUFDQTt3QkFDNUVBLFNBQVNBLEVBQUNBLENBQUNBLHVCQUF1QkEsQ0FBQ0E7d0JBQ25DQSxTQUFTQSxFQUFDQSxDQUFDQSwyQ0FBbUJBLENBQUNBO3dCQUMvQkEsUUFBUUEsRUFBRUEsaStDQXdDVEE7cUJBQ0pBLENBQUNBOzswQ0FxRERBO2dCQUFEQSw0QkFBQ0E7WUFBREEsQ0FuR0EsQUFtR0NBLElBQUE7WUFuR0QseURBbUdDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZ0xpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gJ25nMi1tYXRlcmlhbC9hbGwnO1xuaW1wb3J0IHtMaXN0SXRlbXN9IGZyb20gXCIuL2xpc3RNb2RlbFwiO1xuaW1wb3J0IHtTaG9wcGluZ0FkZEl0ZW19IGZyb20gXCIuL3Nob3BwaW5nLmFkZEl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdEVkaXRDb21wb25lbnR9IGZyb20gXCIuL3Nob3BwaW5nLmVkaXQuY29tcG9uZW50XCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL3Nob3BwaW5nLWxpc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QnLFxuICAgIGRpcmVjdGl2ZXM6W01BVEVSSUFMX0RJUkVDVElWRVMsIFNob3BwaW5nQWRkSXRlbSwgU2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudF0sXG4gICAgc3R5bGVVcmxzOlsnc3JjL2Nzcy9saXN0X2l0ZW0uY3NzJ10sXG4gICAgcHJvdmlkZXJzOltTaG9wcGluZ0xpc3RTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZXNcIj5cbiAgICAgICAgPGRpdiBsYXlvdXQ9XCJjb2x1bW5cIiBjbGFzcz1cIm1kLWlubGluZS1mb3JtXCI+XG4gICAgICAgICAgICA8bWQtY29udGVudCBsYXlvdXQtcGFkZGluZz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c2hvcHBpbmctYWRkLWl0ZW0gKGl0ZW1BZGRlZCk9XCJvbkl0ZW1BZGRlZCgkZXZlbnQpXCI+PC9zaG9wcGluZy1hZGQtaXRlbT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWQtY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZXMgdG9wXCI+XG4gICAgICAgIDxkaXYgbGF5b3V0PVwiY29sdW1uXCIgY2xhc3M9XCJtZC1pbmxpbmUtZm9ybVwiPlxuICAgICAgICAgICAgPG1kLXRvb2xiYXIgY2xhc3M9XCJkZW1vLXRvb2xiYXIgbWQtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+TXkgU2hvcHBpbmcgTGlzdDwvaDM+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBmbGV4PVwiXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tZC10b29sYmFyPlxuICAgICAgICAgICAgPG1kLWNvbnRlbnQgbGF5b3V0LXBhZGRpbmc+XG5cbiAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIGNsYXNzPVwibWQtbm8tc3RpY2t5XCI+T3V0cHV0PC9tZC1zdWJoZWFkZXI+XG5cbiAgICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiAqbmdGb3I9XCIjaSA9IGluZGV4OyAjaXRlbSBvZiBsaXN0SXRlbXNcIiAoY2xpY2spPVwib25TZWxlY3QoaXRlbSwgaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tpdGVtLm5hbWV9fSwgKHt7aXRlbS5hbW91bnR9fSk8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpc0VkaXRpbmcgIT0gZmFsc2VcIj5cblxuICAgICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XG5cbiAgICAgICAgICAgICAgICAgIDxzaG9wcGluZy1saXN0LWVkaXQgW2l0ZW1dPVwic2VsZWN0ZWRJdGVtXCIgKHNhdmVkSXRlbSk9XCJvbkl0ZW1FZGl0ZWQoJGV2ZW50KVwiIChkZWxldGVJdGVtKT1cIm9uSXRlbURlbGV0ZWQoJGV2ZW50KVwiPjwvc2hvcHBpbmctbGlzdC1lZGl0PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDwvbWQtY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RDb21wb25lbnR7XG5cbiAgICBsaXN0SXRlbXM6IExpc3RJdGVtc1tdO1xuXG4gICAgc2VsZWN0ZWRJdGVtOk9iamVjdDtcblxuICAgIGlzRWRpdGluZzpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2VcbiAgICApe1xuICAgICAgICB0aGlzLmxpc3RJdGVtcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOidpdGVtIDEnLFxuICAgICAgICAgICAgICAgIGFtb3VudDoyXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgLy9oaWRlXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nPWZhbHNlO1xuXG4gICAgfVxuICAgIG9uSXRlbUFkZGVkKGl0ZW06TGlzdEl0ZW1zKTp2b2lkIHtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgb25TZWxlY3QoaXRlbTpMaXN0SXRlbXMsIGk6bnVtYmVyKXtcbiAgICAgICAgLy9sb2NhbCB2YXJpYWJsZSBjb3B5XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0ge1xuICAgICAgICAgICAgdG9kbzogaXRlbSxcbiAgICAgICAgICAgIGluZGV4OiBpXG4gICAgICAgIH07XG5cbiAgICAgICAgLy9zaG93XG4gICAgICAgIHRoaXMuaXNFZGl0aW5nPXRydWU7XG5cbiAgICB9XG4gICAgb25JdGVtRWRpdGVkKGl0ZW0pOnZvaWQge1xuICAgICAgICAvL3VwZGF0ZUl0ZW1cbiAgICAgICAgdGhpcy5saXN0SXRlbXNbaXRlbS5pbmRleF0gPSBpdGVtLnRvZG87XG5cbiAgICAgICAgLy9oaWRlXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XG4gICAgfVxuICAgIG9uSXRlbURlbGV0ZWQoaXRlbSk6dm9pZCB7XG4gICAgICAgIC8vcmVtb3ZlIGl0ZW1cbiAgICAgICAgdGhpcy5saXN0SXRlbXMuc3BsaWNlKGl0ZW0uaW5kZXgsIDEpO1xuXG4gICAgICAgIC8vaGlkZVxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
