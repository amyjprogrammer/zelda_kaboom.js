kaboom({
  global: true,
  fullscreen: true,
  scale:1,
  debug:true,
  clearColor:[0,0,0,1]
})

const MOVE_SPEED = 120
const SLICER_SPEED = 120
const SKELETOR_SPEED = 80

loadRoot('https://i.imgur.com/')
loadSprite('link-left', '1Xq9biB.png')
loadSprite('link-right', 'yZIb8O2.png')
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

  const maps = [
    [
      '{c^cccctcc}',
      'l         r',
      'l     -   r',
      'l         r',
      'd         r',
      'l       f r',
      'l         r',
      'l      -  r',
      'l         r',
      '(bbbbbb^bb)',
    ],
    [
      '{ccccccccc}',
      'l         r',
      '^         ^',
      'l         r',
      'l    s    r',
      'l         r',
      'l    *    r',
      '^         ^',
      'l         r',
      '(bbbbbbbbb)',
    ]
   
  ]

  const levelCfg = {
    width: 48,
    height: 48,
    'c': [sprite('top-wall'), solid(), 'wall'],
    'l': [sprite('left-wall'), solid(), 'wall'],
    'r': [sprite('right-wall'), solid(), 'wall'],
    'b': [sprite('bottom-wall'), solid(), 'wall'],
    ')': [sprite('bottom-right-wall'), solid(), 'wall'],
    '(': [sprite('bottom-left-wall'), solid(), 'wall'],
    '{': [sprite('top-left-wall'), solid(), 'wall'],
    '}': [sprite('top-right-wall'), solid(), 'wall'],
    'd': [sprite('left-door')],
    's': [sprite('stairs'), 'next-level'],
    't': [sprite('top-door'), 'next-level'],
    'f': [sprite('fire-pot'), solid()],
    '^': [sprite('lanterns'), solid(), 'wall'],
    '-': [sprite('slicer'), 'dangerous', 'slicer', {dir: -1}],
    '*': [sprite('skeletor'), 'skeletor', 'dangerous', {dir: -1, timer: 0},],
  }

  addLevel(maps[level], levelCfg)

  add([sprite('bg'), layer('bg')])

  const scoreLabel = add([
    text('0'),
    pos(400,500),
    layer('ui'),
    {
      value: score,    
    },
    scale(3)
  ])

  const player = add([sprite('link-right'), pos(5,200)])

  player.action(() => {
    player.resolve()
  })

  player.overlaps('next-level', ()=> {
    go('game', {
      level: (level + 1) % maps.length,
      score: scoreLabel.value
    })
  })

  keyDown('left', () => {
    player.changeSprite('link-left')
    player.move(-MOVE_SPEED, 0)
  })

  keyDown('right', () => {
    player.changeSprite('link-right')
    player.move(MOVE_SPEED, 0)
  })

  keyDown('up', () => {
    player.changeSprite('link-up')
    player.move(0, -MOVE_SPEED)
  })

   keyDown('down', () => {
    player.changeSprite('link-down')
    player.move(0, MOVE_SPEED)
  })

  action('slicer', (s) => {
    s.move(s.dir * SLICER_SPEED, 0)
  })

  collides('dangerous', 'wall', (s) => {
    s.dir = -s.dir
  })

  action('skeletor', (s) => {
    s.move(0, s.dir * SKELETOR_SPEED)
    s.timer -= dt()
    if (s.timer <=0) {
      s.dir = -s.dir
      s.timer = rand(5)
    }
  })

  player.overlaps('dangerous', () => {
    go('lose', {score: scoreLabel.value})
  })

})

scene('lose', ({ score }) => {
  add([text(score, 32), origin('center'), pos(width()/ 2, height()/2)])
})

start('game', {level: 0, score: 0})