const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset="utf-8">
                <style>body { font-family: sans-serif; padding: 20px; }</style>
            </head>
            <body>
                <h1>Студент: Арсланова Амина</h1>
                <h2>Группа: РПО-1</h2>
                <h3>Предмет: Облачные технологии и использование Microsoft Azure при разработке приложений (а на самом деле Yandex Cloud и Codespaces)</h3>
                <br>
                <a href="/time">Посмотреть серверное время</a>
            </body>
        </html>
    `);
});

app.get('/time', (req, res) => {
    const currentTime = new Date().toString();
    res.send(`
        <html>
            <head>
                <meta charset="utf-8">
                <style>body { font-family: sans-serif; padding: 20px; }</style>
            </head>
            <body>
                <h1>Текущее время на сервере:</h1>
                <p>${currentTime}</p>
                <a href="/">Назад</a>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Приложение запущено на порту ${port}`);
});
