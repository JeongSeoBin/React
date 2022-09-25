const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    // 진입 파일 지정
    // webpack은 js파일을 진입파일로 지정
    entry: './js/main.js', 

    // 결과물(번들) 반환 설정
    output: {
        // webpack bundler동작 후 결과물을 저장할 경로
        // path: './dist',

        // 절대 경로를 필요로 함
        // resolve(path1, path2): path1과 path2를 합쳐 절대경로 생성
        // __dirname: 파일이 위치하는 경로를 의미
        path: path.resolve(__dirname, 'dist'),

        // entry파일명과 동일하게 지정
        filename: 'main.js',
        
        // 이전 webpack 실행 결과 파일을 지운다
        clean: true
    },
    module: {
        rules: [
            {
                // test: /\.css$/, // .css확장자로 끝나는 파일
                test: /\.s?css$/, // .css 혹은 .scss확장자로 끝나는 파일
                // 순서가 중요
                // -> main.js에서 명시된 scss를 sass-loader를 통해 읽어 들이고
                //    postcss-loader를 통해 공급업체접두사를 적용하고
                //    css-loader를 통해 읽어 들여 
                //    style-loader를 통해 html에 스타일을 적용한다
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js/,
                use: [
                    'babel-loader'
                ]
            }
        ]

    },
    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        // webpack이 entry로 지정한 main.js를 읽어 들이고 그 결과를 output 옵션을 따라 만들어 내는데
        // 이 과정에서 다양한 플러그인들을 활용
        // HtmlPlugin: index.html과 main.js의 합본을 dist폴더에 저장
        new HtmlPlugin({
            template: "./index.html"
        }),
        // static안의 내용을 복사하여 dist폴더에 넣어줌
        new CopyPlugin({
            patterns: [
                {from: 'static'}
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }
}

// => entry에 지정한 파일과 연결된 모든 내용들을 dist/main.js 번들로 만들어 저장