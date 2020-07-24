"use strict";
exports.__esModule = true;
var Accesses_1 = require("../Accesses");
var AccessesBuilder = /** @class */ (function () {
    function AccessesBuilder() {
        this.accesses = new Accesses_1.Accesses();
    }
    AccessesBuilder.prototype.setAccessesId = function (accessesId) {
        this.accesses.accessesId = accessesId;
        return this;
    };
    AccessesBuilder.prototype.setCreatureDate = function (creatureDate) {
        this.accesses.creatureDate = creatureDate;
        return this;
    };
    AccessesBuilder.prototype.setEmail = function (email) {
        this.accesses.email = email;
        return this;
    };
    AccessesBuilder.prototype.setMessage = function (message) {
        this.accesses.message = message;
        return this;
    };
    AccessesBuilder.prototype.setUserName = function (userName) {
        this.accesses.userName = userName;
        return this;
    };
    AccessesBuilder.prototype.build = function () {
        if (Object.values(this.accesses).every(function (value) { return value !== undefined; })) {
            return this.accesses;
        }
        return this.accesses;
    };
    return AccessesBuilder;
}());
exports.AccessesBuilder = AccessesBuilder;
var ac = new AccessesBuilder()
    .setAccessesId(1)
    .setCreatureDate(new Date())
    .setEmail('vova228@mail.cry')
    .setMessage('bla bla bla')
    .setUserName('Vova')
    .build();
console.log(typeof ac);
console.log('suka');
