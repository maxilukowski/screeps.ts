export function harvesterLogic(energy: any, controller: any) {
  for (let myCreep in Game.creeps) {
    const creep = Game.creeps[myCreep]
    if (creep.memory.status === 'isEmpty' && creep.memory.role === 'harvester') {
      creep.moveTo(energy)
      creep.harvest(energy)
      if (creep.store.getFreeCapacity() === 0) {
        creep.memory.status = 'isFull'
      }
    }
    if (creep.memory.status === 'isFull' && creep.memory.role === 'harvester') {
      creep.moveTo(controller)
      creep.upgradeController(controller)
      if (creep.store.getFreeCapacity() === creep.store.getCapacity()) {
        creep.memory.status = 'isEmpty'
      }
    }
  }
}
