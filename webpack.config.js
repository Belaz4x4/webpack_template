const path = require('path') // модуль, собирающий путь

module.exports = {
    context: path.resolve(__dirname, 'src'), //смена базовой директории для путей
    entry: './index.js',
    output: {        
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist', 'js') // сборка пути из имен директорий и файлов
    },
    devServer: {
        hot: true,
        static: {
            directory: './dist',
            watch: true
        }
    }
}