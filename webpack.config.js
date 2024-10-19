const path = require('path');

module.exports = {
    entry: './src/js/app.js', // Ваш входной файл
    output: {
        filename: 'bundle.js', // Имя выходного файла
        path: path.resolve(__dirname, 'dist'), // Папка для выхода
    },
    mode: 'development', // Или 'production'
};
