import { harvesterLogic } from './harvesterLogic'
import { spawnHarvester } from './spawningGuys'

module.exports.loop = function () {
  spawnHarvester(Game.spawns.Spawn1.store.energy === 300)

  const energy: any = Game.getObjectById('5bbcaaa79099fc012e631ebd')
  const controller: any = Game.getObjectById('5bbcaaa79099fc012e631ebe')

  harvesterLogic(energy, controller)
}
