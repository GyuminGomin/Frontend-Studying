import _ from 'lodash' // From `node_modules` !
import chkType from './getType'
//import { random, user } from './getRandom'
import * as R from './getRandom'

console.log(_.camelCase('the hello world'))
console.log(chkType([1, 2, 3]))
//console.log(random(), random())
console.log(R)