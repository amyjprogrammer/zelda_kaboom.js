kaboom({
  global: true,
  fullscreen: true,
  scale:1,
  debug:true,
  clearColor:[0,0,0,1]
})

loadRoot('https://i.imgur.com/')
loadSprite('link-left', '1Xq9biB.png')
loadSprite('link-right', 'yZIb802.png')
loadSprite('link-down', 'r377FIM.png')
loadSprite('link-up', 'UkV0we0.png')
loadSprite('left-wall', 'rfDoaa1.png')
loadSprite('top-wall', 'QA257Bj.png')
loadSprite('bottom-wall', 'vWJWmvb.png')
loadSprite('right-wall', 'SmHhgUn.png')
loadSprite('bottom-left-wall', 'awnTfNC.png')
loadSprite('bottom-right-wall', '84oyTFy.png')
loadSprite('top-left-wall', 'xlpUxIm.png')
loadSprite('top-right-wall', 'z0OmBd1.jpg')
loadSprite('top-door', 'U9nre4n.png')
loadSprite('fire-pot', 'I7xSp7w.png')
loadSprite('left-door', 'okdJNls.png')
loadSprite('lanterns', 'wiSiY09.png')
loadSprite('slicer', 'c6JFi5Z.png')
loadSprite('skeletor', 'Ei1VnX8.png')
loadSprite('kaboom', 'o9WizfI.png')
loadSprite('stairs', 'VghkL08.png')
loadSprite('bg', 'u4DVsx6.png')

scene('game', ({level, score}) => {
  const map = [
    'cccccccccc',
    'c         ',
    'c         ',
    'c         ',
    'c         ',
    'c         ',
    'c         ',
    'c         ',
    'c         ',
    'c         ',
  ]

  const levelCfg = {
    width: 48,
    height: 48,
    'c': [sprite('top-wall')]
  }

  addLevel(map, levelCfg)

})

start('game', {level: 0, score: 0})