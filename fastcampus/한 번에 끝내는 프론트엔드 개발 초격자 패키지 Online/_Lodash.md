
# Lodash

## Lodash.uniqBy, Lodash.unionBy
``` js
import _ from 'lodash';

const usersA = [
  { userId : '1', name: 'HEROPY' },
  { userId : '2', name: 'Neo' }
]
const usersB = [
  { userId: '1', name: 'HEROPY' },
  { userId: '3', name: 'Amy'}
]
const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)
```

## Lodash.find, Lodash.findIndex, Lodash.remove
``` js
import _ from 'lodash';

const users = [
  { userId: '1', name: 'HEROPY' },
  { userId: '2', name: 'Neo'},
  { userId: '3', name: 'Amy'},
  { userId: '4', name: 'Evan'},
  { userId: '5', name: 'Lewis'}
]

const foundUser = _.find(users, { name: 'Amy' })
const foundUserIndex = _.findIndex(users, { name: 'Amy'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { name: 'HEROPY' })
console.log(users)
```