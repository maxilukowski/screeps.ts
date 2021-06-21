export const spawnHarvester = (bool: boolean) => {
  if (bool) {
    Game.spawns['Spawn1'].spawnCreep(
      [WORK, CARRY, MOVE, MOVE],
      'harvester' + Game.time,
      {
        memory: { role: 'harvester', status: 'isEmpty' },
      }
    )
  }
}
