"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var harvesterLogic_1 = require("./harvesterLogic");
var spawningGuys_1 = require("./spawningGuys");
module.exports.loop = function () {
    spawningGuys_1.spawnHarvester(Game.spawns.Spawn1.store.energy === 300);
    var energy = Game.getObjectById('5bbcaaa79099fc012e631ebd');
    var controller = Game.getObjectById('5bbcaaa79099fc012e631ebe');
    harvesterLogic_1.harvesterLogic(energy, controller);
};
