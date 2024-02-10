
!!! Пересмотреть 06 видос и разобраться с  Promise

const http = require ("http");
const fs = require ("fs");


function handler (request, response)
{
  switch (request.url)
  {
  case '/home':
    {
    fs.readFile ('pages/home.html', (err,data) =>
    {
      if (err)
        response.write ('Failed');
      else
        response.write (data);
    response.end ();
    });
    break;
    }
  case '/about':
    setTimeout (()=>{} 3000);
    break;

    )
  default:
    const data = fs.readFileSync ('pages/about.html');
    response.write (data);
    response.end ();
  }

}
const server = http.createServer (handler);
server.listen (8000);
