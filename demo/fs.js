// File System - работа с файловой системой
// модуль fs  - из Node.js
const fs = require('fs')
const path = require('path') //путь к папке
//создание папки test,асинхронный метод.
// Одну и ту же папку второй раз создать не получиться
//  fs.mkdir(path.join(__dirname, 'test1'), (err) => {
//      if (err) {
//          throw err
//      }
//     console.log('Папка test в папке demo создана!')
// if (err) {
//     throw err
// }
// console.log('Папка test1 в папке demo создана!')
//  }
// )


// Создание файла text.txt в папке test асинхронным методом
// Метод writeFile перетизает предыдущий контент

 const filePath = path.join(__dirname, 'test1', 'text1.txt')
 fs.writeFile(filePath, 'Hello NodeJS', (err) => {
     if (err) {
         throw err
     }
     console.log('Файл text1.txt с сообщением "Hello NodeJS!" в папке test1 создан!')

     fs.writeFile(filePath, '\nHello Again2!', (err) => {
         if (err) {
             throw err
         }
         console.log('файл создан!!')
     })

// метод appendFile добавляет контент в начатьный файл
     fs.appendFile(filePath, '\nHello Again3!', err => {
         if (err) {
             throw err
         }
         console.log('Файл с добавлениеи контента создан!')
     })

 })

// Читать файл метод readFile
fs.readFile(filePath, 'utf-8', (err, content) =>{
    if (err) {throw err}
    console.log(content)
    // const data = Buffer.from(content)
    // console.log('Content: ', data.toString())
})

