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
                    //this.listItems = [
                    //    {
                    //        name:'item 1',
                    //        amount:2
                    //    }
                    //];
                    this._shoppingListService = _shoppingListService;
                    //hide
                    this.isEditing = false;
                }
                ShoppingListComponent.prototype.ngOnInit = function () {
                    this.listItems = this._shoppingListService.getItems();
                };
                ShoppingListComponent.prototype.onSelect = function (item, i) {
                    //pass local variable copy to editing component
                    this.selectedItem = {
                        todo: item,
                        index: i
                    };
                    //show
                    this.isEditing = true;
                };
                ShoppingListComponent.prototype.onItemEdit = function (isEditing) {
                    if (isEditing === false) {
                        this.isEditing = false;
                    }
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        templateUrl: 'dev/shopping-list/views/list-view.html',
                        directives: [all_1.MATERIAL_DIRECTIVES, shopping_addItem_component_1.ShoppingAddItem, shopping_edit_component_1.ShoppingListEditComponent],
                        styleUrls: ['src/css/list_item.css'],
                        providers: [shopping_list_service_1.ShoppingListService],
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            })();
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmdMaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTaG9wcGluZ0xpc3RDb21wb25lbnQiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQuY29uc3RydWN0b3IiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQubmdPbkluaXQiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQub25TZWxlY3QiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQub25JdGVtRWRpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBZ0JJQSwrQkFDWUEsb0JBQXlDQTtvQkFFakRDLG9CQUFvQkE7b0JBQ3BCQSxPQUFPQTtvQkFDUEEsd0JBQXdCQTtvQkFDeEJBLGtCQUFrQkE7b0JBQ2xCQSxPQUFPQTtvQkFDUEEsSUFBSUE7b0JBUElBLHlCQUFvQkEsR0FBcEJBLG9CQUFvQkEsQ0FBcUJBO29CQVNqREEsTUFBTUE7b0JBQ05BLElBQUlBLENBQUNBLFNBQVNBLEdBQUNBLEtBQUtBLENBQUNBO2dCQUV6QkEsQ0FBQ0E7Z0JBQ0RELHdDQUFRQSxHQUFSQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtnQkFDMURBLENBQUNBO2dCQUNERix3Q0FBUUEsR0FBUkEsVUFBU0EsSUFBY0EsRUFBRUEsQ0FBUUE7b0JBQzdCRywrQ0FBK0NBO29CQUMvQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0E7d0JBQ2hCQSxJQUFJQSxFQUFFQSxJQUFJQTt3QkFDVkEsS0FBS0EsRUFBRUEsQ0FBQ0E7cUJBQ1hBLENBQUNBO29CQUVGQSxNQUFNQTtvQkFDTkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBQ0EsSUFBSUEsQ0FBQ0E7Z0JBRXhCQSxDQUFDQTtnQkFDREgsMENBQVVBLEdBQVZBLFVBQVdBLFNBQWlCQTtvQkFDeEJJLEVBQUVBLENBQUFBLENBQUNBLFNBQVNBLEtBQUtBLEtBQUtBLENBQUNBLENBQUFBLENBQUNBO3dCQUNwQkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQzNCQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBaERMSjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxlQUFlQTt3QkFDekJBLFdBQVdBLEVBQUNBLHdDQUF3Q0E7d0JBQ3BEQSxVQUFVQSxFQUFDQSxDQUFDQSx5QkFBbUJBLEVBQUVBLDRDQUFlQSxFQUFFQSxtREFBeUJBLENBQUNBO3dCQUM1RUEsU0FBU0EsRUFBQ0EsQ0FBQ0EsdUJBQXVCQSxDQUFDQTt3QkFDbkNBLFNBQVNBLEVBQUNBLENBQUNBLDJDQUFtQkEsQ0FBQ0E7cUJBQ2xDQSxDQUFDQTs7MENBMkNEQTtnQkFBREEsNEJBQUNBO1lBQURBLENBakRBLEFBaURDQSxJQUFBO1lBakRELHlEQWlEQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmdMaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tICduZzItbWF0ZXJpYWwvYWxsJztcbmltcG9ydCB7TGlzdEl0ZW1zfSBmcm9tIFwiLi9saXN0TW9kZWxcIjtcbmltcG9ydCB7U2hvcHBpbmdBZGRJdGVtfSBmcm9tIFwiLi9zaG9wcGluZy5hZGRJdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RFZGl0Q29tcG9uZW50fSBmcm9tIFwiLi9zaG9wcGluZy5lZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9zaG9wcGluZy1saXN0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDonZGV2L3Nob3BwaW5nLWxpc3Qvdmlld3MvbGlzdC12aWV3Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6W01BVEVSSUFMX0RJUkVDVElWRVMsIFNob3BwaW5nQWRkSXRlbSwgU2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudF0sXG4gICAgc3R5bGVVcmxzOlsnc3JjL2Nzcy9saXN0X2l0ZW0uY3NzJ10sXG4gICAgcHJvdmlkZXJzOltTaG9wcGluZ0xpc3RTZXJ2aWNlXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RDb21wb25lbnR7XG5cbiAgICBsaXN0SXRlbXM6IExpc3RJdGVtc1tdO1xuXG4gICAgc2VsZWN0ZWRJdGVtOk9iamVjdDtcblxuICAgIGlzRWRpdGluZzpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2VcbiAgICApe1xuICAgICAgICAvL3RoaXMubGlzdEl0ZW1zID0gW1xuICAgICAgICAvLyAgICB7XG4gICAgICAgIC8vICAgICAgICBuYW1lOidpdGVtIDEnLFxuICAgICAgICAvLyAgICAgICAgYW1vdW50OjJcbiAgICAgICAgLy8gICAgfVxuICAgICAgICAvL107XG5cbiAgICAgICAgLy9oaWRlXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nPWZhbHNlO1xuXG4gICAgfVxuICAgIG5nT25Jbml0KCk6dm9pZHtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgfVxuICAgIG9uU2VsZWN0KGl0ZW06TGlzdEl0ZW1zLCBpOm51bWJlcil7XG4gICAgICAgIC8vcGFzcyBsb2NhbCB2YXJpYWJsZSBjb3B5IHRvIGVkaXRpbmcgY29tcG9uZW50XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0ge1xuICAgICAgICAgICAgdG9kbzogaXRlbSxcbiAgICAgICAgICAgIGluZGV4OiBpXG4gICAgICAgIH07XG5cbiAgICAgICAgLy9zaG93XG4gICAgICAgIHRoaXMuaXNFZGl0aW5nPXRydWU7XG5cbiAgICB9XG4gICAgb25JdGVtRWRpdChpc0VkaXRpbmc6Ym9vbGVhbil7XG4gICAgICAgIGlmKGlzRWRpdGluZyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
