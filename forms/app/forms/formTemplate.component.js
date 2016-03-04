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
    var TemplateFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            }],
        execute: function() {
            TemplateFormComponent = (function () {
                function TemplateFormComponent() {
                    this.submitted = {
                        email: '',
                        password: ''
                    };
                }
                TemplateFormComponent.prototype.onSubmit = function (form) {
                    this.submitted = {
                        email: form.value.email,
                        password: form.value.password
                    };
                };
                TemplateFormComponent = __decorate([
                    core_1.Component({
                        selector: 'template-form',
                        directives: [all_1.MATERIAL_DIRECTIVES],
                        template: "\n    <section class=\"examples\">\n    <div layout=\"column\" class=\"md-inline-form\">\n        <md-toolbar class=\"demo-toolbar md-primary\">\n            <div class=\"md-toolbar-tools\">\n              <h3>Simple Template Example</h3>\n              <span flex=\"\"></span>\n            </div>\n        </md-toolbar>\n        <md-content layout-padding>\n            <div class=\"section1\">\n            <!-- add event to form element to submit full form with button type submit -->\n                  <form name=\"userForm\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n                  <!-- use #f to bind to ngForm: we get a reference to our form -->\n                        <div layout-gt-sm=\"column\">\n                            <h4>Sign-up form:</h4>\n                                  <md-input-container class=\"md-block\" flex-gt-sm>\n                                        <label>Mail</label>\n                                        <!-- ngControl registers the input with the whole form -->\n                                        <input\n                                        [ngClass]=\"{red: !email.valid, green: email.valid}\"\n                                        required\n                                        md-input\n                                        type=\"email\"\n                                        ngControl=\"email\"\n                                        #email=\"ngForm\">\n                                  </md-input-container>\n                                  <md-input-container class=\"md-block\" flex-gt-sm>\n                                        <label>Password</label>\n                                        <input required md-input type=\"text\" ngControl=\"password\" #password=\"ngForm\">\n                                  </md-input-container>\n                                  <md-input-container class=\"md-block\" flex-gt-sm>\n                                        <label>Confirm Password</label>\n                                        <input required md-input type=\"text\" ngControl=\"confirmPassword\" #confirmPassword=\"ngForm\">\n                                  </md-input-container>\n                        </div>\n                        <button\n                        [disabled]=\"!f.valid || password.value !== confirmPassword.value\"\n                        type=\"submit\"\n                        md-raised-button\n                        class=\"md-accent md-hue-1\"\n                        >Submit</button>\n                  </form>\n            </div>\n            <div class=\"\">\n                <h3>You Submitted:</h3>\n                <p>{{submitted | json}}</p>\n            </div>\n        </md-content>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateFormComponent);
                return TemplateFormComponent;
            })();
            exports_1("TemplateFormComponent", TemplateFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zL2Zvcm10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiVGVtcGxhdGVGb3JtQ29tcG9uZW50IiwiVGVtcGxhdGVGb3JtQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiVGVtcGxhdGVGb3JtQ29tcG9uZW50Lm9uU3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkEyRElBO29CQUNJQyxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQTt3QkFDYkEsS0FBS0EsRUFBRUEsRUFBRUE7d0JBQ1RBLFFBQVFBLEVBQUVBLEVBQUVBO3FCQUNmQSxDQUFBQTtnQkFDTEEsQ0FBQ0E7Z0JBQ0RELHdDQUFRQSxHQUFSQSxVQUFTQSxJQUFJQTtvQkFDVEUsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0E7d0JBQ2JBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBO3dCQUN2QkEsUUFBUUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUE7cUJBQ2hDQSxDQUFBQTtnQkFDTEEsQ0FBQ0E7Z0JBdEVMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxlQUFlQTt3QkFDekJBLFVBQVVBLEVBQUNBLENBQUNBLHlCQUFtQkEsQ0FBQ0E7d0JBQ2hDQSxRQUFRQSxFQUFDQSxtckZBa0RSQTtxQkFDSkEsQ0FBQ0E7OzBDQWlCREE7Z0JBQURBLDRCQUFDQTtZQUFEQSxDQXZFQSxBQXVFQ0EsSUFBQTtZQXZFRCx5REF1RUMsQ0FBQSIsImZpbGUiOiJmb3Jtcy9mb3JtVGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gJ25nMi1tYXRlcmlhbC9hbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RlbXBsYXRlLWZvcm0nLFxuICAgIGRpcmVjdGl2ZXM6W01BVEVSSUFMX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOmBcbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGVzXCI+XG4gICAgPGRpdiBsYXlvdXQ9XCJjb2x1bW5cIiBjbGFzcz1cIm1kLWlubGluZS1mb3JtXCI+XG4gICAgICAgIDxtZC10b29sYmFyIGNsYXNzPVwiZGVtby10b29sYmFyIG1kLXByaW1hcnlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXRvb2xzXCI+XG4gICAgICAgICAgICAgIDxoMz5TaW1wbGUgVGVtcGxhdGUgRXhhbXBsZTwvaDM+XG4gICAgICAgICAgICAgIDxzcGFuIGZsZXg9XCJcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tZC10b29sYmFyPlxuICAgICAgICA8bWQtY29udGVudCBsYXlvdXQtcGFkZGluZz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uMVwiPlxuICAgICAgICAgICAgPCEtLSBhZGQgZXZlbnQgdG8gZm9ybSBlbGVtZW50IHRvIHN1Ym1pdCBmdWxsIGZvcm0gd2l0aCBidXR0b24gdHlwZSBzdWJtaXQgLS0+XG4gICAgICAgICAgICAgICAgICA8Zm9ybSBuYW1lPVwidXNlckZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoZilcIiAjZj1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPCEtLSB1c2UgI2YgdG8gYmluZCB0byBuZ0Zvcm06IHdlIGdldCBhIHJlZmVyZW5jZSB0byBvdXIgZm9ybSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgbGF5b3V0LWd0LXNtPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNpZ24tdXAgZm9ybTo8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiIGZsZXgtZ3Qtc20+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gbmdDb250cm9sIHJlZ2lzdGVycyB0aGUgaW5wdXQgd2l0aCB0aGUgd2hvbGUgZm9ybSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7cmVkOiAhZW1haWwudmFsaWQsIGdyZWVuOiBlbWFpbC52YWxpZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nQ29udHJvbD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZW1haWw9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBmbGV4LWd0LXNtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIG1kLWlucHV0IHR5cGU9XCJ0ZXh0XCIgbmdDb250cm9sPVwicGFzc3dvcmRcIiAjcGFzc3dvcmQ9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBmbGV4LWd0LXNtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgbWQtaW5wdXQgdHlwZT1cInRleHRcIiBuZ0NvbnRyb2w9XCJjb25maXJtUGFzc3dvcmRcIiAjY29uZmlybVBhc3N3b3JkPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhZi52YWxpZCB8fCBwYXNzd29yZC52YWx1ZSAhPT0gY29uZmlybVBhc3N3b3JkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1hY2NlbnQgbWQtaHVlLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgPGgzPllvdSBTdWJtaXR0ZWQ6PC9oMz5cbiAgICAgICAgICAgICAgICA8cD57e3N1Ym1pdHRlZCB8IGpzb259fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21kLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRm9ybUNvbXBvbmVudHtcbiAgICBzdWJtaXR0ZWQ6IE9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0ge1xuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25TdWJtaXQoZm9ybSl7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0ge1xuICAgICAgICAgICAgZW1haWw6IGZvcm0udmFsdWUuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogZm9ybS52YWx1ZS5wYXNzd29yZFxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==