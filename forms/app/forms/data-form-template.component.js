System.register(["angular2/core", 'ng2-material/all', "angular2/common", "./validation.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, common_1, common_2, validation_service_1;
    var DataFormTemplate;
    //Typed annotation takes an argument control, and returns an object {s:boolean}
    function hasNumbers(control) {
        //build validation logic - only return something that fails
        //reg ex to check for any digits in input field
        if (!control.value.match('\\d+')) {
            //custom error object
            return { noNumbers: true };
        }
    }
    function matchPassword(control) {
        //if(!control.value === this.myForm.password){
        //    return {noMatch: true}
        //}
        //console.log(control.value);
        return false;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (validation_service_1_1) {
                validation_service_1 = validation_service_1_1;
            }],
        execute: function() {
            DataFormTemplate = (function () {
                function DataFormTemplate(_formBuilder) {
                    this._formBuilder = _formBuilder;
                    this.submitted = {
                        email: '',
                        password: '',
                        confirmPassword: ''
                    };
                }
                DataFormTemplate.prototype.onSubmit = function () {
                    console.log(this.myForm);
                    this.submitted = this.myForm.value;
                };
                DataFormTemplate.prototype.ngOnInit = function () {
                    this.myPassword = 'spencer';
                    console.log(this.myPassword);
                    //build a control group
                    this.myForm = this._formBuilder.group({
                        //default value + validation process
                        'email': ['', common_2.Validators.compose([
                                common_2.Validators.required,
                                validation_service_1.ValidationService.emailValidator
                            ])],
                        'password': ['', common_2.Validators.compose([
                                common_2.Validators.required,
                                hasNumbers
                            ])],
                        'confirmPassword': ['', common_2.Validators.compose([
                                common_2.Validators.required,
                            ])]
                    });
                };
                DataFormTemplate.prototype.getPassword = function (password) {
                    this.myPassword = password;
                    return this.myPassword;
                };
                DataFormTemplate.prototype.checkPassword = function (confirm) {
                    if (this.myPassword === confirm) {
                        return 'green';
                    }
                    else {
                        return 'red';
                    }
                };
                DataFormTemplate.prototype.checkValid = function (object) {
                    var mail = object;
                    if (!mail.valid) {
                        return 'red';
                    }
                    else {
                        return 'green';
                    }
                };
                DataFormTemplate = __decorate([
                    core_1.Component({
                        selector: 'data-template-form',
                        directives: [all_1.MATERIAL_DIRECTIVES],
                        template: "\n    <section class=\"examples top\">\n    <div layout=\"column\" class=\"md-inline-form\">\n        <md-toolbar class=\"demo-toolbar md-primary\">\n            <div class=\"md-toolbar-tools\">\n              <h3>Data Driven Template Example</h3>\n              <span flex=\"\"></span>\n            </div>\n        </md-toolbar>\n        <md-content layout-padding>\n            <div class=\"section1\">\n            <!-- manually override the template form using the myForm control group we created in the component -->\n            <!-- we can still use the # to build a seperate refrence to the input -->\n                  <form name=\"userForm\" (ngSubmit)=\"onSubmit()\" [ngFormModel]=\"myForm\">\n                        <div layout-gt-sm=\"column\">\n                            <h4>Sign-up form:</h4>\n                                  <md-input-container class=\"md-block\" flex-gt-sm>\n                                        <label [ngClass]=\"checkValid(mail)\">Mail</label>\n                                        <!-- assign this input to the new form control is ngFormControl -->\n                                        <input\n                                        [ngClass]=\"checkValid(mail)\"\n                                        [ngFormControl]=\"myForm.controls['email']\"\n                                        #mail=\"ngForm\"\n                                        md-input\n                                        type=\"email\"\n                                        >\n                                  </md-input-container>\n                                  <md-input-container class=\"md-block\" flex-gt-sm>\n                                        <label [ngClass]=\"checkValid(password)\">Password</label>\n                                        <input\n                                        [ngClass]=\"checkValid(password)\"\n                                        [ngFormControl]=\"myForm.controls['password']\"\n                                        #password=\"ngForm\"\n                                        md-input\n                                        type=\"text\" >\n                                  </md-input-container>\n                                  <md-input-container class=\"md-block\" flex-gt-sm>\n                                        <label [ngClass]=\"checkPassword(confirmPassword.value)\">Confirm Password</label>\n                                        <input\n                                        [ngClass]=\"checkPassword(confirmPassword.value)\"\n                                        [ngFormControl]=\"myForm.controls['confirmPassword']\"\n                                        #confirmPassword=\"ngForm\"\n                                        md-input\n                                        (keyup)=\"getPassword(password.value)\"\n                                        type=\"text\"\n                                        >\n                                  </md-input-container>\n                        </div>\n                        <button\n                        [disabled]=\"!myForm.valid || password.value !== confirmPassword.value\"\n                        type=\"submit\"\n                        md-raised-button\n                        class=\"md-accent md-hue-1\"\n                        >Submit</button>\n                  </form>\n            </div>\n            <div class=\"\">\n                <h3>You Submitted:</h3>\n                <p>email: {{submitted.email | json}}</p>\n                <p>password: {{submitted.password | json}}</p>\n                <p>confirmPassword: {{submitted.confirmPassword | json}}</p>\n            </div>\n        </md-content>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DataFormTemplate);
                return DataFormTemplate;
            })();
            exports_1("DataFormTemplate", DataFormTemplate);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zL2RhdGEtZm9ybS10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiaGFzTnVtYmVycyIsIm1hdGNoUGFzc3dvcmQiLCJEYXRhRm9ybVRlbXBsYXRlIiwiRGF0YUZvcm1UZW1wbGF0ZS5jb25zdHJ1Y3RvciIsIkRhdGFGb3JtVGVtcGxhdGUub25TdWJtaXQiLCJEYXRhRm9ybVRlbXBsYXRlLm5nT25Jbml0IiwiRGF0YUZvcm1UZW1wbGF0ZS5nZXRQYXNzd29yZCIsIkRhdGFGb3JtVGVtcGxhdGUuY2hlY2tQYXNzd29yZCIsIkRhdGFGb3JtVGVtcGxhdGUuY2hlY2tWYWxpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBdUlBLCtFQUErRTtJQUMvRSxvQkFBb0IsT0FBZ0I7UUFDaENBLDJEQUEyREE7UUFDM0RBLCtDQUErQ0E7UUFDL0NBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUFBLENBQUNBO1lBQzdCQSxxQkFBcUJBO1lBQ3JCQSxNQUFNQSxDQUFDQSxFQUFDQSxTQUFTQSxFQUFFQSxJQUFJQSxFQUFDQSxDQUFDQTtRQUM3QkEsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFDRCx1QkFBdUIsT0FBZ0I7UUFDbkNDLDhDQUE4Q0E7UUFDOUNBLDRCQUE0QkE7UUFDNUJBLEdBQUdBO1FBQ0hBLDZCQUE2QkE7UUFDN0JBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQ2pCQSxDQUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEvSUQ7Z0JBNEVJQywwQkFBb0JBLFlBQXlCQTtvQkFBekJDLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFhQTtvQkFDekNBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBO3dCQUNiQSxLQUFLQSxFQUFFQSxFQUFFQTt3QkFDVEEsUUFBUUEsRUFBQ0EsRUFBRUE7d0JBQ1hBLGVBQWVBLEVBQUNBLEVBQUVBO3FCQUNyQkEsQ0FBQ0E7Z0JBQ05BLENBQUNBO2dCQUNERCxtQ0FBUUEsR0FBUkE7b0JBQ0lFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO29CQUN6QkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7Z0JBQ3ZDQSxDQUFDQTtnQkFDREYsbUNBQVFBLEdBQVJBO29CQUVJRyxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxTQUFTQSxDQUFDQTtvQkFDNUJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO29CQUM3QkEsdUJBQXVCQTtvQkFDdkJBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLENBQUNBO3dCQUNsQ0Esb0NBQW9DQTt3QkFDcENBLE9BQU9BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLG1CQUFVQSxDQUFDQSxPQUFPQSxDQUFDQTtnQ0FDN0JBLG1CQUFVQSxDQUFDQSxRQUFRQTtnQ0FDbkJBLHNDQUFpQkEsQ0FBQ0EsY0FBY0E7NkJBQ25DQSxDQUFDQSxDQUFDQTt3QkFDSEEsVUFBVUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsbUJBQVVBLENBQUNBLE9BQU9BLENBQUNBO2dDQUNoQ0EsbUJBQVVBLENBQUNBLFFBQVFBO2dDQUNuQkEsVUFBVUE7NkJBQ2JBLENBQUNBLENBQUNBO3dCQUNIQSxpQkFBaUJBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLG1CQUFVQSxDQUFDQSxPQUFPQSxDQUFDQTtnQ0FDdkNBLG1CQUFVQSxDQUFDQSxRQUFRQTs2QkFDdEJBLENBQUNBLENBQUNBO3FCQUNOQSxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBQ0RILHNDQUFXQSxHQUFYQSxVQUFZQSxRQUFlQTtvQkFDdkJJLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFFBQVFBLENBQUNBO29CQUMzQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7Z0JBQzNCQSxDQUFDQTtnQkFDREosd0NBQWFBLEdBQWJBLFVBQWNBLE9BQWNBO29CQUN4QkssRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsS0FBS0EsT0FBT0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQzVCQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtvQkFDbkJBLENBQUNBO29CQUFBQSxJQUFJQSxDQUFBQSxDQUFDQTt3QkFDRkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7b0JBQ2pCQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBQ0RMLHFDQUFVQSxHQUFWQSxVQUFXQSxNQUFNQTtvQkFDYk0sSUFBSUEsSUFBSUEsR0FBR0EsTUFBTUEsQ0FBQ0E7b0JBQ2RBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUNBO3dCQUNaQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtvQkFDakJBLENBQUNBO29CQUFBQSxJQUFJQSxDQUFBQSxDQUFDQTt3QkFDRkEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7b0JBQ25CQSxDQUFDQTtnQkFDVEEsQ0FBQ0E7Z0JBN0hMTjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxvQkFBb0JBO3dCQUM5QkEsVUFBVUEsRUFBQ0EsQ0FBQ0EseUJBQW1CQSxDQUFDQTt3QkFDaENBLFFBQVFBLEVBQUNBLG9vSEFnRVJBO3FCQUNKQSxDQUFDQTs7cUNBMEREQTtnQkFBREEsdUJBQUNBO1lBQURBLENBOUhBLEFBOEhDQSxJQUFBO1lBOUhELCtDQThIQyxDQUFBIiwiZmlsZSI6ImZvcm1zL2RhdGEtZm9ybS10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSAnbmcyLW1hdGVyaWFsL2FsbCc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge1ZhbGlkYXRvcnN9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBDb250cm9sfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi92YWxpZGF0aW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkYXRhLXRlbXBsYXRlLWZvcm0nLFxuICAgIGRpcmVjdGl2ZXM6W01BVEVSSUFMX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOmBcbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGVzIHRvcFwiPlxuICAgIDxkaXYgbGF5b3V0PVwiY29sdW1uXCIgY2xhc3M9XCJtZC1pbmxpbmUtZm9ybVwiPlxuICAgICAgICA8bWQtdG9vbGJhciBjbGFzcz1cImRlbW8tdG9vbGJhciBtZC1wcmltYXJ5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci10b29sc1wiPlxuICAgICAgICAgICAgICA8aDM+RGF0YSBEcml2ZW4gVGVtcGxhdGUgRXhhbXBsZTwvaDM+XG4gICAgICAgICAgICAgIDxzcGFuIGZsZXg9XCJcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tZC10b29sYmFyPlxuICAgICAgICA8bWQtY29udGVudCBsYXlvdXQtcGFkZGluZz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uMVwiPlxuICAgICAgICAgICAgPCEtLSBtYW51YWxseSBvdmVycmlkZSB0aGUgdGVtcGxhdGUgZm9ybSB1c2luZyB0aGUgbXlGb3JtIGNvbnRyb2wgZ3JvdXAgd2UgY3JlYXRlZCBpbiB0aGUgY29tcG9uZW50IC0tPlxuICAgICAgICAgICAgPCEtLSB3ZSBjYW4gc3RpbGwgdXNlIHRoZSAjIHRvIGJ1aWxkIGEgc2VwZXJhdGUgcmVmcmVuY2UgdG8gdGhlIGlucHV0IC0tPlxuICAgICAgICAgICAgICAgICAgPGZvcm0gbmFtZT1cInVzZXJGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGxheW91dC1ndC1zbT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5TaWduLXVwIGZvcm06PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBmbGV4LWd0LXNtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBbbmdDbGFzc109XCJjaGVja1ZhbGlkKG1haWwpXCI+TWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBhc3NpZ24gdGhpcyBpbnB1dCB0byB0aGUgbmV3IGZvcm0gY29udHJvbCBpcyBuZ0Zvcm1Db250cm9sIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImNoZWNrVmFsaWQobWFpbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snZW1haWwnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI21haWw9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCIgZmxleC1ndC1zbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgW25nQ2xhc3NdPVwiY2hlY2tWYWxpZChwYXNzd29yZClcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiY2hlY2tWYWxpZChwYXNzd29yZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3Bhc3N3b3JkPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiIGZsZXgtZ3Qtc20+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFtuZ0NsYXNzXT1cImNoZWNrUGFzc3dvcmQoY29uZmlybVBhc3N3b3JkLnZhbHVlKVwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImNoZWNrUGFzc3dvcmQoY29uZmlybVBhc3N3b3JkLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NvbmZpcm1QYXNzd29yZD1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZ2V0UGFzc3dvcmQocGFzc3dvcmQudmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZCB8fCBwYXNzd29yZC52YWx1ZSAhPT0gY29uZmlybVBhc3N3b3JkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1hY2NlbnQgbWQtaHVlLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgPGgzPllvdSBTdWJtaXR0ZWQ6PC9oMz5cbiAgICAgICAgICAgICAgICA8cD5lbWFpbDoge3tzdWJtaXR0ZWQuZW1haWwgfCBqc29ufX08L3A+XG4gICAgICAgICAgICAgICAgPHA+cGFzc3dvcmQ6IHt7c3VibWl0dGVkLnBhc3N3b3JkIHwganNvbn19PC9wPlxuICAgICAgICAgICAgICAgIDxwPmNvbmZpcm1QYXNzd29yZDoge3tzdWJtaXR0ZWQuY29uZmlybVBhc3N3b3JkIHwganNvbn19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWQtY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBEYXRhRm9ybVRlbXBsYXRle1xuICAgIG15Rm9ybTogQ29udHJvbEdyb3VwO1xuICAgIHN1Ym1pdHRlZDogT2JqZWN0O1xuICAgIHB1YmxpYyBteVBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpe1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHtcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOicnLFxuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOicnXG4gICAgICAgIH07XG4gICAgfVxuICAgIG9uU3VibWl0KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtKTtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0aGlzLm15Rm9ybS52YWx1ZTtcbiAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZHtcblxuICAgICAgICB0aGlzLm15UGFzc3dvcmQgPSAnc3BlbmNlcic7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlQYXNzd29yZCk7XG4gICAgICAgIC8vYnVpbGQgYSBjb250cm9sIGdyb3VwXG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgLy9kZWZhdWx0IHZhbHVlICsgdmFsaWRhdGlvbiBwcm9jZXNzXG4gICAgICAgICAgICAnZW1haWwnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBWYWxpZGF0aW9uU2VydmljZS5lbWFpbFZhbGlkYXRvclxuICAgICAgICAgICAgXSldLFxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgaGFzTnVtYmVyc1xuICAgICAgICAgICAgXSldLFxuICAgICAgICAgICAgJ2NvbmZpcm1QYXNzd29yZCc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgXSldXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRQYXNzd29yZChwYXNzd29yZDpzdHJpbmcpe1xuICAgICAgICB0aGlzLm15UGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICAgICAgcmV0dXJuIHRoaXMubXlQYXNzd29yZDtcbiAgICB9XG4gICAgY2hlY2tQYXNzd29yZChjb25maXJtOnN0cmluZyl7XG4gICAgICAgIGlmKHRoaXMubXlQYXNzd29yZCA9PT0gY29uZmlybSl7XG4gICAgICAgICAgICByZXR1cm4gJ2dyZWVuJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gJ3JlZCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tWYWxpZChvYmplY3QpOnN0cmluZ3tcbiAgICAgICAgdmFyIG1haWwgPSBvYmplY3Q7XG4gICAgICAgICAgICBpZighbWFpbC52YWxpZCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdyZWQnO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdncmVlbic7XG4gICAgICAgICAgICB9XG4gICAgfVxufVxuXG4vL1R5cGVkIGFubm90YXRpb24gdGFrZXMgYW4gYXJndW1lbnQgY29udHJvbCwgYW5kIHJldHVybnMgYW4gb2JqZWN0IHtzOmJvb2xlYW59XG5mdW5jdGlvbiBoYXNOdW1iZXJzKGNvbnRyb2w6IENvbnRyb2wpOiB7W3M6c3RyaW5nXTogYm9vbGVhbn17XG4gICAgLy9idWlsZCB2YWxpZGF0aW9uIGxvZ2ljIC0gb25seSByZXR1cm4gc29tZXRoaW5nIHRoYXQgZmFpbHNcbiAgICAvL3JlZyBleCB0byBjaGVjayBmb3IgYW55IGRpZ2l0cyBpbiBpbnB1dCBmaWVsZFxuICAgIGlmKCFjb250cm9sLnZhbHVlLm1hdGNoKCdcXFxcZCsnKSl7XG4gICAgICAgIC8vY3VzdG9tIGVycm9yIG9iamVjdFxuICAgICAgICByZXR1cm4ge25vTnVtYmVyczogdHJ1ZX07XG4gICAgfVxufVxuZnVuY3Rpb24gbWF0Y2hQYXNzd29yZChjb250cm9sOiBDb250cm9sKTp7W3M6c3RyaW5nXTogYm9vbGVhbn17XG4gICAgLy9pZighY29udHJvbC52YWx1ZSA9PT0gdGhpcy5teUZvcm0ucGFzc3dvcmQpe1xuICAgIC8vICAgIHJldHVybiB7bm9NYXRjaDogdHJ1ZX1cbiAgICAvL31cbiAgICAvL2NvbnNvbGUubG9nKGNvbnRyb2wudmFsdWUpO1xuICAgIHJldHVybiBmYWxzZTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
