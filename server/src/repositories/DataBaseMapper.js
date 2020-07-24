"use strict";
exports.__esModule = true;
var Accesses_1 = require("../models/Accesses");
var DataBaseMapper = /** @class */ (function () {
    function DataBaseMapper() {
    }
    DataBaseMapper.prototype.getObjectFromData = function (data, clazzPrototype) {
        var newObj = Object.create(clazzPrototype);
        for (var dataKey in data) {
            if (data.hasOwnProperty(dataKey)) {
                newObj[dataKey] = data[dataKey];
            }
        }
        return newObj;
    };
    return DataBaseMapper;
}());
var dataBaseMapper = new DataBaseMapper();
var data = {
    accessesId: 1,
    message: "bla bla bla",
    creatureDate: new Date(),
    userName: "G. V.",
    email: "gv@pwnz.com"
};
var objectFromData = dataBaseMapper.getObjectFromData(data, Accesses_1.Accesses);
console.log(objectFromData);
