"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawnHarvester = void 0;
var spawnHarvester = function (bool) {
    if (bool) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], 'harvester' + Game.time, {
            memory: { role: 'harvester', status: 'isEmpty' },
        });
    }
};
exports.spawnHarvester = spawnHarvester;
