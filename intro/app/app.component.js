System.register(['angular2/core', "./sections/section2.component", "./propert-binding.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, section2_component_1, propert_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (section2_component_1_1) {
                section2_component_1 = section2_component_1_1;
            },
            function (propert_binding_component_1_1) {
                propert_binding_component_1 = propert_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = 'spencer';
                    this.hobbies = '';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <section class=\"parent\">\n        <h1>Parent Component</h1>\n        <h4>Please enter your name</h4>\n        <input type=\"text\" [(ngModel)]=\"name\">\n        <p>Two way bind to child component: {{name}}</p>\n        <hr>\n        <section-two></section-two>\n        <br>\n        <br>\n        <section class=\"child\">\n        <!-- custom name component to take in data from parent -->\n            <!-- hobbiesChanged is an event that catches the event emitter. When it catches the event what do you want it to do - well we want hobbies on the app component to equal $event -->\n            <property-binding [myName]=\"name\" [myAge]=\"34\" (hobbiesChanged)=\"hobbies = $event\"></property-binding>\n        </section>\n        <p>MY Hobbies are: {{hobbies}}</p>\n    </section>\n\n\n    ",
                        directives: [section2_component_1.SectionTwo, propert_binding_component_1.PropertyBindingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkEyQklBO29CQUNJQyxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxTQUFTQSxDQUFDQTtvQkFDdEJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEVBQUVBLENBQUNBO2dCQUN0QkEsQ0FBQ0E7Z0JBOUJMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFFBQVFBLEVBQUVBLHV5QkFtQlRBO3dCQUNEQSxVQUFVQSxFQUFDQSxDQUFDQSwrQkFBVUEsRUFBRUEsb0RBQXdCQSxDQUFDQTtxQkFDcERBLENBQUNBOztpQ0FRREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQS9CQSxBQStCQ0EsSUFBQTtZQS9CRCx1Q0ErQkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTZWN0aW9uVHdvfSBmcm9tIFwiLi9zZWN0aW9ucy9zZWN0aW9uMi5jb21wb25lbnRcIjtcbmltcG9ydCB7UHJvcGVydHlCaW5kaW5nQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9wZXJ0LWJpbmRpbmcuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwicGFyZW50XCI+XG4gICAgICAgIDxoMT5QYXJlbnQgQ29tcG9uZW50PC9oMT5cbiAgICAgICAgPGg0PlBsZWFzZSBlbnRlciB5b3VyIG5hbWU8L2g0PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm5hbWVcIj5cbiAgICAgICAgPHA+VHdvIHdheSBiaW5kIHRvIGNoaWxkIGNvbXBvbmVudDoge3tuYW1lfX08L3A+XG4gICAgICAgIDxocj5cbiAgICAgICAgPHNlY3Rpb24tdHdvPjwvc2VjdGlvbi10d28+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgIDwhLS0gY3VzdG9tIG5hbWUgY29tcG9uZW50IHRvIHRha2UgaW4gZGF0YSBmcm9tIHBhcmVudCAtLT5cbiAgICAgICAgICAgIDwhLS0gaG9iYmllc0NoYW5nZWQgaXMgYW4gZXZlbnQgdGhhdCBjYXRjaGVzIHRoZSBldmVudCBlbWl0dGVyLiBXaGVuIGl0IGNhdGNoZXMgdGhlIGV2ZW50IHdoYXQgZG8geW91IHdhbnQgaXQgdG8gZG8gLSB3ZWxsIHdlIHdhbnQgaG9iYmllcyBvbiB0aGUgYXBwIGNvbXBvbmVudCB0byBlcXVhbCAkZXZlbnQgLS0+XG4gICAgICAgICAgICA8cHJvcGVydHktYmluZGluZyBbbXlOYW1lXT1cIm5hbWVcIiBbbXlBZ2VdPVwiMzRcIiAoaG9iYmllc0NoYW5nZWQpPVwiaG9iYmllcyA9ICRldmVudFwiPjwvcHJvcGVydHktYmluZGluZz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8cD5NWSBIb2JiaWVzIGFyZToge3tob2JiaWVzfX08L3A+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6W1NlY3Rpb25Ud28sIFByb3BlcnR5QmluZGluZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaG9iYmllczogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubmFtZSA9ICdzcGVuY2VyJztcbiAgICAgICAgdGhpcy5ob2JiaWVzID0gJyc7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
