System.register(['angular2/platform/browser', "./app.component", 'ng2-material/all', 'angular2/router'], function(exports_1) {
    var browser_1, app_component_1, all_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            //noinspection TypeScriptValidateTypes
            browser_1.bootstrap(app_component_1.AppComponent, [all_1.MATERIAL_PROVIDERS, router_1.ROUTER_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQSxzQ0FBc0M7WUFDdEMsbUJBQVMsQ0FBQyw0QkFBWSxFQUFFLENBQUMsd0JBQWtCLEVBQUUseUJBQWdCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNQVRFUklBTF9QUk9WSURFUlN9IGZyb20gJ25nMi1tYXRlcmlhbC9hbGwnO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5cbi8vbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRWYWxpZGF0ZVR5cGVzXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbTUFURVJJQUxfUFJPVklERVJTLCBST1VURVJfUFJPVklERVJTXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
