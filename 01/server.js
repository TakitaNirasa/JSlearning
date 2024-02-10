/**
 * @brief Отображение иконки страницы и, непосредственно, страницы в HTML виде
 */
var http = require ("http");
var path = require('path');
var fs = require('fs');

/*v! Серверная информация */
const host = 'localhost';
const port = 8000;

/*v! Пути к файлам*/
var faviconPath = path.join(__dirname, 'favicon.ico');
var htmlPath = path.join(__dirname, 'index.html');

/**
 * Функция-обработчик события сервера
 * @param {*} req  Указатель на класс запроса
 * @param {*} res  Указатель на класс ответа
 */
const requestListener = function (req, res)
{
    //  Обработка запроса иконки
    if (req.method === 'GET' && req.url === '/favicon.ico')
    {
      console.log ("Get favicon request");
      res.setHeader('Content-Type', 'image/x-icon');
      fs.createReadStream(faviconPath).pipe(res);
      return;
    }
    console.log ("Get html");
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(indexHtml).pipe(res);
    // end  вызываесяи из пайпа,на на всякй случай эта строка тут остаётся
    res.end ();
}

/*v! Запуск сервера */
const server = http.createServer (requestListener);

server.listen (port, host);
