System.register(['angular2/core', "../services/mock-data"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_data_1;
    var ShoppingListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_data_1_1) {
                mock_data_1 = mock_data_1_1;
            }],
        execute: function() {
            ShoppingListService = (function () {
                function ShoppingListService() {
                }
                ShoppingListService.prototype.getItems = function () {
                    return mock_data_1.shopping_list;
                };
                ShoppingListService.prototype.insertItems = function (item) {
                    mock_data_1.shopping_list.push(item);
                };
                ShoppingListService.prototype.deleteItems = function (item) {
                    mock_data_1.shopping_list.splice(mock_data_1.shopping_list.indexOf(item), 1);
                };
                ShoppingListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListService);
                return ShoppingListService;
            })();
            exports_1("ShoppingListService", ShoppingListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2VydmljZXMvc2hvcHBpbmctbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlNob3BwaW5nTGlzdFNlcnZpY2UiLCJTaG9wcGluZ0xpc3RTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiU2hvcHBpbmdMaXN0U2VydmljZS5nZXRJdGVtcyIsIlNob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbXMiLCJTaG9wcGluZ0xpc3RTZXJ2aWNlLmRlbGV0ZUl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFHSUE7Z0JBRUFDLENBQUNBO2dCQUNERCxzQ0FBUUEsR0FBUkE7b0JBQ0lFLE1BQU1BLENBQUNBLHlCQUFhQSxDQUFDQTtnQkFDekJBLENBQUNBO2dCQUNERix5Q0FBV0EsR0FBWEEsVUFBWUEsSUFBZUE7b0JBQ3ZCRyx5QkFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtnQkFDREgseUNBQVdBLEdBQVhBLFVBQVlBLElBQWVBO29CQUN2QkkseUJBQWFBLENBQUNBLE1BQU1BLENBQUNBLHlCQUFhQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDeERBLENBQUNBO2dCQWRMSjtvQkFBQ0EsaUJBQVVBLEVBQUVBOzt3Q0FlWkE7Z0JBQURBLDBCQUFDQTtZQUFEQSxDQWZBLEFBZUNBLElBQUE7WUFmRCxxREFlQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2VydmljZXMvc2hvcHBpbmctbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TGlzdEl0ZW1zfSBmcm9tIFwiLi4vbGlzdE1vZGVsXCI7XG5pbXBvcnQge3Nob3BwaW5nX2xpc3R9IGZyb20gXCIuLi9zZXJ2aWNlcy9tb2NrLWRhdGFcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RTZXJ2aWNle1xuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG4gICAgZ2V0SXRlbXMoKSB7XG4gICAgICAgIHJldHVybiBzaG9wcGluZ19saXN0O1xuICAgIH1cbiAgICBpbnNlcnRJdGVtcyhpdGVtOiBMaXN0SXRlbXMpOiB2b2lke1xuICAgICAgICBzaG9wcGluZ19saXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGRlbGV0ZUl0ZW1zKGl0ZW06IExpc3RJdGVtcyk6IHZvaWR7XG4gICAgICAgIHNob3BwaW5nX2xpc3Quc3BsaWNlKHNob3BwaW5nX2xpc3QuaW5kZXhPZihpdGVtKSwxKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
