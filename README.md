## Qué es nodeJS
Es un entorno de ejecución para JS construido por el motor V8 de Chrome.

Un entorno de ejecución o Runtime System, es una capa por ensima del sistema operativo que ejecuta una pieza de software. Esta capa esta encargada de decidir cómo consume la memoria, cómo accede a las variables, cómo debe pasar los parametros entre los diferentes procedimientos, además de cuándo y cómo debe ejecutar el Garbage Collector.

Chrome V8 es un motor es un motor Open Source de JavaScript, desarrollado para los navegadores Chrome y Chromium, que gracias a su tecnología Just In Time Compailer compila código JavaScrip para hacerlo más rápido, ya que JS no fue pensado como un lenguaje compilado sino interpretado.

NodeJS es el resultado de tomar el motor de JS V8 para crear un entorno de ejecución y así ejecutar código JS del lado del servidor.

## NodeJS VS JavaScript
Cosas de JS que no existen en NodeJS:
- Tiene el DOM con su objeto Window
- CSSOM que es la capa de CSS
- fetch API: peticiones resultando promesas
- Web Storage: session storage
- Modulo de Canvas API
- Las APIs del navegador: audio, web autentication

Cosas que tiene NodeJS que no tiene el navegador
- Modulo http, os, utils, debugger, 

Cosas que tienen en común y es importante recalcar
- Streams y sus manejadores para grandes cantidades de datos
- ECMA script modules
- Consola que es muy similar

## Arquitectura orientada a eventos