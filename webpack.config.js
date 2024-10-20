const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/app.js', // Входной файл
    output: {
        filename: 'bundle.js', // Имя выходного файла
        path: path.resolve(__dirname, 'dist'), // Папка для выхода
    },
    mode: 'development', // Или 'production'
    module: {
        rules: [
            {
                test: /\.scss$/, // Применяем правило к файлам .scss
                use: [
                    MiniCssExtractPlugin.loader, // Извлекаем CSS в файл
                    'css-loader',                // Обрабатывает CSS
                    'sass-loader',               // Компилирует SCSS в CSS
                ],
            },
            {
                test: /\.js$/, // Применяем правило к файлам .js
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Если используете Babel
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css', // Имя выходного CSS файла
        }),
    ],
};
