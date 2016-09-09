"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var name_service_1 = require('../name.service');
var ButtonComponent = (function () {
    function ButtonComponent(nameService) {
        this.nameService = nameService;
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.handleClick = function () {
        var res = this.nameService.getNames().map(function (v) { return v; });
        this.nameService.selected = res[Math.floor(Math.random() * res.length)].name;
    };
    ButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-button',
            templateUrl: 'button.component.html',
            styleUrls: ['button.component.css']
        }), 
        __metadata('design:paramtypes', [name_service_1.NameService])
    ], ButtonComponent);
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
//# sourceMappingURL=button.component.js.map