// const db = require('./models')
// const { create } = require('./models/event')


// const createEvent = () => {


//     const newEvent = db.Event.create({
//         title: 'Super Sick Show',
//         date: Date.now(),
//         time: '5:15pm',
//         address: '355 S Cochran',
//         city: 'Los Angeles',
//         state: 'CA',
//         zipcode: 90036,
//         cover: 10,
//         genre: 'Folk',
//         details: 'For people who like blake mills'
//     })
// }

// createEvent()


const db = require('./models')

const testUser = async () => {
  try {
    const newUser = await db.User.create({
      name: 'Weston',
      email: 'weston@weston.gov',
      password: 'password1234'
    })
    console.log(newUser)
  } catch (err) {
    console.log(err)
  }
}

testUser()