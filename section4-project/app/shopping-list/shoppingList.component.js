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
                        directives: [all_1.MATERIAL_DIRECTIVES, shopping_addItem_component_1.ShoppingAddItem, shopping_edit_component_1.ShoppingListEditComponent],
                        styleUrls: ['src/css/list_item.css'],
                        providers: [shopping_list_service_1.ShoppingListService],
                        template: "\n    <section class=\"examples\">\n        <div layout=\"column\" class=\"md-inline-form\">\n            <md-content layout-padding>\n                <div class=\"section1\">\n                      <shopping-add-item></shopping-add-item>\n                </div>\n            </md-content>\n        </div>\n    </section>\n    <section class=\"examples top\">\n        <div layout=\"column\" class=\"md-inline-form\">\n            <md-toolbar class=\"demo-toolbar md-primary\">\n                <div class=\"md-toolbar-tools\">\n                  <h3>My Shopping List</h3>\n                  <span flex=\"\"></span>\n                </div>\n            </md-toolbar>\n            <md-content layout-padding>\n\n                <md-subheader class=\"md-no-sticky\">Output</md-subheader>\n\n                  <md-list-item class=\"md-2-line\" *ngFor=\"#i = index; #item of listItems\" (click)=\"onSelect(item, i)\">\n                    <div class=\"md-list-item-text\">\n                        <h3>{{item.name}}, ({{item.amount}})</h3>\n                    </div>\n                  </md-list-item>\n\n                    <div *ngIf=\"isEditing != false\">\n\n                    <md-divider></md-divider>\n\n                  <shopping-list-edit [item]=\"selectedItem\" (isEditing)=\"onItemEdit($event)\"></shopping-list-edit>\n\n                    </div>\n\n\n            </md-content>\n        </div>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            })();
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmdMaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTaG9wcGluZ0xpc3RDb21wb25lbnQiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQuY29uc3RydWN0b3IiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQubmdPbkluaXQiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQub25TZWxlY3QiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQub25JdGVtRWRpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBd0RJQSwrQkFDWUEsb0JBQXlDQTtvQkFFakRDLG9CQUFvQkE7b0JBQ3BCQSxPQUFPQTtvQkFDUEEsd0JBQXdCQTtvQkFDeEJBLGtCQUFrQkE7b0JBQ2xCQSxPQUFPQTtvQkFDUEEsSUFBSUE7b0JBUElBLHlCQUFvQkEsR0FBcEJBLG9CQUFvQkEsQ0FBcUJBO29CQVNqREEsTUFBTUE7b0JBQ05BLElBQUlBLENBQUNBLFNBQVNBLEdBQUNBLEtBQUtBLENBQUNBO2dCQUV6QkEsQ0FBQ0E7Z0JBQ0RELHdDQUFRQSxHQUFSQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtnQkFDMURBLENBQUNBO2dCQUNERix3Q0FBUUEsR0FBUkEsVUFBU0EsSUFBY0EsRUFBRUEsQ0FBUUE7b0JBQzdCRywrQ0FBK0NBO29CQUMvQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0E7d0JBQ2hCQSxJQUFJQSxFQUFFQSxJQUFJQTt3QkFDVkEsS0FBS0EsRUFBRUEsQ0FBQ0E7cUJBQ1hBLENBQUNBO29CQUVGQSxNQUFNQTtvQkFDTkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBQ0EsSUFBSUEsQ0FBQ0E7Z0JBRXhCQSxDQUFDQTtnQkFDREgsMENBQVVBLEdBQVZBLFVBQVdBLFNBQWlCQTtvQkFDeEJJLEVBQUVBLENBQUFBLENBQUNBLFNBQVNBLEtBQUtBLEtBQUtBLENBQUNBLENBQUFBLENBQUNBO3dCQUNwQkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQzNCQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBeEZMSjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxlQUFlQTt3QkFDekJBLFVBQVVBLEVBQUNBLENBQUNBLHlCQUFtQkEsRUFBRUEsNENBQWVBLEVBQUVBLG1EQUF5QkEsQ0FBQ0E7d0JBQzVFQSxTQUFTQSxFQUFDQSxDQUFDQSx1QkFBdUJBLENBQUNBO3dCQUNuQ0EsU0FBU0EsRUFBQ0EsQ0FBQ0EsMkNBQW1CQSxDQUFDQTt3QkFDL0JBLFFBQVFBLEVBQUVBLG81Q0F3Q1RBO3FCQUNKQSxDQUFDQTs7MENBNENEQTtnQkFBREEsNEJBQUNBO1lBQURBLENBMUZBLEFBMEZDQSxJQUFBO1lBMUZELHlEQTBGQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmdMaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tICduZzItbWF0ZXJpYWwvYWxsJztcbmltcG9ydCB7TGlzdEl0ZW1zfSBmcm9tIFwiLi9saXN0TW9kZWxcIjtcbmltcG9ydCB7U2hvcHBpbmdBZGRJdGVtfSBmcm9tIFwiLi9zaG9wcGluZy5hZGRJdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RFZGl0Q29tcG9uZW50fSBmcm9tIFwiLi9zaG9wcGluZy5lZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9zaG9wcGluZy1saXN0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0JyxcbiAgICBkaXJlY3RpdmVzOltNQVRFUklBTF9ESVJFQ1RJVkVTLCBTaG9wcGluZ0FkZEl0ZW0sIFNob3BwaW5nTGlzdEVkaXRDb21wb25lbnRdLFxuICAgIHN0eWxlVXJsczpbJ3NyYy9jc3MvbGlzdF9pdGVtLmNzcyddLFxuICAgIHByb3ZpZGVyczpbU2hvcHBpbmdMaXN0U2VydmljZV0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGVzXCI+XG4gICAgICAgIDxkaXYgbGF5b3V0PVwiY29sdW1uXCIgY2xhc3M9XCJtZC1pbmxpbmUtZm9ybVwiPlxuICAgICAgICAgICAgPG1kLWNvbnRlbnQgbGF5b3V0LXBhZGRpbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNob3BwaW5nLWFkZC1pdGVtPjwvc2hvcHBpbmctYWRkLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21kLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGVzIHRvcFwiPlxuICAgICAgICA8ZGl2IGxheW91dD1cImNvbHVtblwiIGNsYXNzPVwibWQtaW5saW5lLWZvcm1cIj5cbiAgICAgICAgICAgIDxtZC10b29sYmFyIGNsYXNzPVwiZGVtby10b29sYmFyIG1kLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci10b29sc1wiPlxuICAgICAgICAgICAgICAgICAgPGgzPk15IFNob3BwaW5nIExpc3Q8L2gzPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZmxleD1cIlwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWQtdG9vbGJhcj5cbiAgICAgICAgICAgIDxtZC1jb250ZW50IGxheW91dC1wYWRkaW5nPlxuXG4gICAgICAgICAgICAgICAgPG1kLXN1YmhlYWRlciBjbGFzcz1cIm1kLW5vLXN0aWNreVwiPk91dHB1dDwvbWQtc3ViaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCIgKm5nRm9yPVwiI2kgPSBpbmRleDsgI2l0ZW0gb2YgbGlzdEl0ZW1zXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0sIGkpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt7aXRlbS5uYW1lfX0sICh7e2l0ZW0uYW1vdW50fX0pPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNFZGl0aW5nICE9IGZhbHNlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxuXG4gICAgICAgICAgICAgICAgICA8c2hvcHBpbmctbGlzdC1lZGl0IFtpdGVtXT1cInNlbGVjdGVkSXRlbVwiIChpc0VkaXRpbmcpPVwib25JdGVtRWRpdCgkZXZlbnQpXCI+PC9zaG9wcGluZy1saXN0LWVkaXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPC9tZC1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudHtcblxuICAgIGxpc3RJdGVtczogTGlzdEl0ZW1zW107XG5cbiAgICBzZWxlY3RlZEl0ZW06T2JqZWN0O1xuXG4gICAgaXNFZGl0aW5nOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZVxuICAgICl7XG4gICAgICAgIC8vdGhpcy5saXN0SXRlbXMgPSBbXG4gICAgICAgIC8vICAgIHtcbiAgICAgICAgLy8gICAgICAgIG5hbWU6J2l0ZW0gMScsXG4gICAgICAgIC8vICAgICAgICBhbW91bnQ6MlxuICAgICAgICAvLyAgICB9XG4gICAgICAgIC8vXTtcblxuICAgICAgICAvL2hpZGVcbiAgICAgICAgdGhpcy5pc0VkaXRpbmc9ZmFsc2U7XG5cbiAgICB9XG4gICAgbmdPbkluaXQoKTp2b2lke1xuICAgICAgICB0aGlzLmxpc3RJdGVtcyA9IHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG4gICAgb25TZWxlY3QoaXRlbTpMaXN0SXRlbXMsIGk6bnVtYmVyKXtcbiAgICAgICAgLy9wYXNzIGxvY2FsIHZhcmlhYmxlIGNvcHkgdG8gZWRpdGluZyBjb21wb25lbnRcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB7XG4gICAgICAgICAgICB0b2RvOiBpdGVtLFxuICAgICAgICAgICAgaW5kZXg6IGlcbiAgICAgICAgfTtcblxuICAgICAgICAvL3Nob3dcbiAgICAgICAgdGhpcy5pc0VkaXRpbmc9dHJ1ZTtcblxuICAgIH1cbiAgICBvbkl0ZW1FZGl0KGlzRWRpdGluZzpib29sZWFuKXtcbiAgICAgICAgaWYoaXNFZGl0aW5nID09PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
