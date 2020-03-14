import selectWindow from './components/selectWindow.vue'
import fight from './components/fight.vue'

export default[

  {path: '', component:selectWindow},
  // {path: '/fight/:user1/:user2', component:fight}
  {path: '/fight', component:fight}
]
