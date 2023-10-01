/* const user = {
    name: 'Denis',
    surName: 'Semenov',
    age: 26, 
    height: 176,
    weight: 75
}

console.log(user) */
/*
const users = {
    Denis: {
        age: 26,
        admin: true,
    sayHello(name) {
            console.log(`Hello ${name}`)
        }
    },
    Alex: {
        age: 23,
        admin: false,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}

console.log(users.Denis)
users.Denis.sayHello('Den') 
*/

const users = [
    {
        name: 'Denis',
        age: 26,
        admin: true
    },
    {
        name: 'Alex',
        age: 26,
        admin: false
    },
    {
        name: 'Tom',
        age: 27,
        admin: false
    },
    {
        name: 'Vlad',
        age: 24,
        admin: false
    },
    {
        name: 'Oleg',
        age: 22,
        admin: false
    }
]

let notAdmin = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].admin === false) {
        notAdmin++
    }
}

console.log (notAdmin)