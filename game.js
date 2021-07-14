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

  layers(['ui', 'bg', 'obj'], 'obj')

  const map = [
    '{c^cccctcc}',
    'l         r',
    'l     -   r',
    'l         r',
    'l         r',
    'l       f r',
    'd         r',
    'l  -      r',
    'l         r',
    '(bbbbbb^bb)',
  ]

  const levelCfg = {
    width: 48,
    height: 48,
    'c': [sprite('top-wall')],
    'l': [sprite('left-wall')],
    'r':[sprite('right-wall')],
    'b': [sprite('bottom-wall')],
    ')': [sprite('bottom-right-wall')],
    '(': [sprite('bottom-left-wall')],
    '{': [sprite('top-left-wall')],
    '}': [sprite('top-right-wall')],
    'd': [sprite('left-door')],
    's': [sprite('stairs')],
    't': [sprite('top-door')],
    'f': [sprite('fire-pot')],
    '^': [sprite('lanterns')],
    '-': [sprite('slicer')],
    '*': [sprite('skeletor')],
  }

  addLevel(map, levelCfg)

  add([sprite('bg'), layer('bg')])

})

start('game', {level: 0, score: 0})