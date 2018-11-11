import { INCREMENT } from '../constants/index'

export default (state = 0, action) => {
  console.log('action in counter-reducer: ', action)
  return action.type === INCREMENT ? state + 1 : state
}
