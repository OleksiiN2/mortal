import selectWindow from './components/selectWindow.vue'
import fight from './components/fight.vue'

export default[
  {path: '*', redirect: '/mortalcombat'},
  {path: '/mortalcombat', component:selectWindow},
  {path: '/mortalcombat/fight', component:fight}
]
