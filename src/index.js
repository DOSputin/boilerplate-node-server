import 'dotenv/config'

const userId = { firstName: 'DOS', lastName: 'putin' }
const userClass = {
  clasification: 'Humanoid',
  sex: 'Male',
  height: '198cm',
  weight: '98kg'
}

const user = {
  ...userId,
  ...userClass
}

console.log(user)
