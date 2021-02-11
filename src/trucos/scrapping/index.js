//todo puppeteer funciona de manera asincrona
const puppeteer = require('puppeteer');

//funcion anonima asincrona que la volvemos expresion
//de esta manera corre automaticamente
(async () => {
  //coddigo 
  console.log('Lanzamos el navegador!');
  const browser = await puppeteer.launch({ headless: false }); //queremos abrir el navegadr

  const page = await browser.newPage(); //que el navegador abra una pagina
  await page.goto('https://es.wikipedia.org/wiki/Node.js'); //que esa pagina tenga esta url

  var titulo1 = await page.evaluate(() => { //page.evaluate corre un script
    const h1 = document.querySelector('h1'); //con esto obtenemos el h1
    console.log(h1.innerHTML); //en consola del navegador ve3mos que tenemos el h1
    return h1.innerHTML
  });

  console.log(titulo1)

  console.log('Cerramos el navegador!');
  browser.close(); //y que la cierre
  console.log('navegador cerrado!');
})();