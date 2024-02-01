// 1
// let mass = ['Привет', 'мир', '!']
// alert(`${mass[0]}, ${mass[1]}${mass[2]}`)

// 2

// let mass = ['Привет', 'мир', '!']
// let text = (`${mass[0]}, ${mass[1]}${mass[2]}`)
// alert(text)

// 3
// let mass = ['Привет', 'мир', '!']
// mass[0] = 'Пока'
// alert(`${mass[0]}, ${mass[1]}${mass[2]}`)


// 4

// let obj = [
//     {name: 'Kolya', plata: 11000,},
//     {name: 'Vanya', plata: 11000,},
//     {name: 'Petya', plata: 11000,},

// ]
// alert(`Заработная плата ${obj[0].name} = ${obj[0].plata},
// Заработная плата ${obj[1].name} = ${obj[1].plata}`);

// 5

// var arr = {
//     'ru':['голубой', 'красный', 'зеленый'],
//     'en':['blue', 'red', 'green']
// }

// alert(arr['ru'][1])

// 2.1

// let arr = ['a', 'b', 'c']
// alert(arr)

// 2.2

// let arr = ['a', 'b', 'c']
// alert(arr[0] + arr[1] + arr[2])

// 2.3

// let arr = ['a', 'b', 'c', 'd']
// alert(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`)

// 2.4

// let arr = [2, 5, 3, 9]
// let result = (arr[0]*arr[1]+arr[2]*arr[3])
// alert(resultr)

// 3.1

// var obj = {a:1,b:2,c:3};
// alert(`${obj['c']}, ${obj.c}`)

// 3.2

// var obj = {Коля:'1000', Вася:'500', Петя:'200'}
// alert(`${obj.Коля}, ${obj.Петя}`)

// 3.3

// let obj = {1:'Понедельник', 2:'Вторник', 3:'Среда', 4:'Четверг', 5:'Пятница', 6:'Суббота', 7:'Воскресенье'}
// alert(obj[4])

// 3.4
// let day = {1:'Понедельник', 2:'Вторник', 3:'Среда', 4:'Четверг', 5:'Пятница', 6:'Суббота', 7:'Воскресенье'}
// let obj = 4
// alert(day[obj])


// 4.1

// let number = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// alert(number[1][0])

// 4.2

// let mass = {js:['jQuery', 'Angular'], php:'hello', css:'world'}
// alert(mass.js[0])

// 4.3

// let mass = {ru:['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//             en:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//         }
// alert(`${mass.ru[0]} и ${mass.en[2]}`)

// 4.4

let mass = {ru:['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
            en:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }

let lang = 'ru'
let day = 3

alert(`${mass[lang][day]}`)

