const path = require(`path`)

// узннать имя файла path.js в папке demo: консоль - node  demo/path
console.log('Название файла: ', path.basename(__filename))

// узннать имя даректории файла path.js: консоль - node  demo/path
console.log('Имя директории: ', path.dirname(__filename))

// узннать расширение файла path.js в директории demo: консоль - node  demo/path
console.log('Расширение файла: ',path.extname(__filename))

// узннать дополнительные параметры файла path.js в директории demo: консоль - node  demo/path
console.log('Дополнительные параметры файла path.js: ',path.parse(__filename))

// узннать дополнительные параметры файла path.js с полем name в директории demo: консоль - node  demo/path
console.log('Дополнительные параметры файла path.js с полем name: ',path.parse(__filename).name)

// Работа с путями (формируем путь: дир.demo-дир.server-файл index.html) консоль - node  demo/path
console.log(path.join(__dirname, 'server', 'index.html'))