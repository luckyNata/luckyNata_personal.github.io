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
var router_1 = require('@angular/router');
var main_service_1 = require('../shared/main.service');
var PersonComponent = (function () {
    function PersonComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
    }
    PersonComponent.prototype.goHome = function () {
        this.mainService.changeBtn(false);
        // console.log(this.mainService.getFlag());
        this.router.navigate(['']);
    };
    PersonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'about',
            templateUrl: 'person.component.html',
            styleUrls: ['../shared/general.css', 'person.component.css']
        }), 
        __metadata('design:paramtypes', [main_service_1.MainService, router_1.Router])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map