const user1 = document.querySelector('#user1')
const user2 = document.querySelector('#user2')
const result = document.querySelector('.result')
const btn = document.querySelector('.btn')



function compare() {

    if (!user1.value.trim() && !user2.value.trim()) {
        alert('All fields must be required!')
        return
    }

    const dob1 = new Date(user1.value)
    const dob2 = new Date(user2.value)
    // console.log(dob1.getTime(), dob2.getTime())


    const yearDiff = Math.abs(dob1.getFullYear() - dob2.getFullYear())
    const monthDiff = Math.abs(dob1.getMonth() - dob2.getMonth())
    const dayDiff = Math.abs(dob1.getDay() - dob2.getDay())
    const hrDiff = Math.abs(dob1.getHours() - dob2.getHours())
    const minDiff = Math.abs(dob1.getMinutes() - dob2.getMinutes())
    // console.log(yearDiff, monthDiff, dayDiff, hrDiff, minDiff)



    if (dob1.getTime() > dob2.getTime()) {
        result.innerText = user2.value.split('T').join(' ') + ' is older than ' + user1.value.split('T').join(' ')

    } else if (dob1.getTime() === dob2.getTime()) {

        result.innerText = 'Both are of same age'

    } else {

        result.innerText = user1.value.split('T').join(' ') + ' is older than ' + user2.value.split('T').join(' ')

    }

    result.innerText = `${result.innerText} \n with differnce of ${yearDiff} year ${monthDiff} month ${dayDiff} day and ${hrDiff} hour ${minDiff} minutes`

}

// function compare() {

//     if (!user1.value.trim() && !user2.value.trim()) {
//         alert('All fields must be required!')
//         return
//     }

//     // if (condition) {

//     // }

//     // console.log('1', user1.value,'2', user1.value.trim())

//     const d1 = new Date(user1.value.trim().split(' ').join('T'))
//     const d2 = new Date(user2.value.trim().split(' ').join('T'))
//     // console.log(d1, d2)

//     if (d1.getTime() > d2.getTime()) {
//         result.innerText = user2.value + ' is older than ' + user1.value

//     } else if (d1.getTime() === d2.getTime()) {

//         result.innerText = 'Both are in same age'

//     } else {

//         result.innerText = user1.value + ' is older than ' + user2.value

//     }

// }

btn.addEventListener('click', compare)