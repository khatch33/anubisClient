exports.getGameInfo = (game, userId) => {
  var gameInfo = {
    playersLeft: 0,
    wolfsLeft: 0,
    doctorsLeft: 0,
    seersLeft : 0,
  }
  for (let i = 0; i < game.players.length; i++) {
    let dets = game.players[i]
    if (dets.status) {
      gameInfo.playersLeft += 1;
      dets.role === 'wolf' ? gameInfo.wolfsLeft += 1  : dets.role === 'doctor' ? gameInfo.doctorsLeft += 1 : dets.role === 'seer' ? gameInfo.seersLeft += 1 : null
    }
    if (dets.player._id === userId) {
      gameInfo.role = dets.role
    }
  }
  return gameInfo
}
