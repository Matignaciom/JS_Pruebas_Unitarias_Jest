# Guía de Instalación y Pruebas con npm, js y Jest en Visual Studio Code

Esta guía te mostrará cómo instalar npm (Node Package Manager) y Jest en Visual Studio Code. También te proporcionará un ejemplo de código para realizar pruebas unitarias en JavaScript.

## Que es una prueba unitaria y para que sirve

Una prueba unitaria en JavaScript, con Jest, evalúa funciones o métodos aislados para asegurar su correcto funcionamiento, detectar errores tempranos y mejorar la calidad del código.

## Instalación de npm en Visual Studio Code

Para trabajar con npm en Visual Studio Code, sigue estos pasos:

1. **Instala Node.js**: Antes de usar npm, asegúrate de tener Node.js instalado en tu sistema. Puedes descargar la última versión de Node.js desde [el sitio web oficial](https://nodejs.org/).

2. **Verificación de la instalación**: Abre la terminal en Visual Studio Code e ingresa los siguientes comandos para verificar que Node.js y npm estén instalados correctamente:

   ```bash
   node -v
   npm -v
   ```

   Deberías ver las versiones de Node.js y npm en la consola.

## Instalación de Jest

[Jest](https://jestjs.io/) es una biblioteca de pruebas ampliamente utilizada para JavaScript. Para instalar Jest en tu proyecto, sigue estos pasos:

1. **Inicia tu proyecto**: Asegúrate de que tu proyecto tenga un archivo `package.json`. Si no lo tienes, puedes crearlo ejecutando `npm init`.

2. **Instalación de Jest**: Ejecuta el siguiente comando para instalar Jest como una dependencia de desarrollo en tu proyecto:

   ```bash
   npm install --save-dev jest
   ```

   Esto descargará Jest y lo añadirá como una dependencia en tu archivo `package.json`.

## Realización de Pruebas

A continuación, se proporciona un ejemplo de código para realizar pruebas unitarias en JavaScript con Jest. Puedes utilizar este código como punto de partida para tus pruebas.

**app.js**:

```javascript
function fibonacci(n) {
  if (n <= 0) return 'Invalid input';
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
      const nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
  }

  return sequence;
}

module.exports = fibonacci;
```

**fibonacci.test.js**:

```javascript
const fibonacci = require('./app');

test('Fibonacci de 1 debería ser [0]', () => {
  expect(fibonacci(1)).toEqual([0]);
});

test('Fibonacci de 2 debería ser [0, 1]', () => {
  expect(fibonacci(2)).toEqual([0, 1]);
});

test('Fibonacci de 5 debería ser [0, 1, 1, 2, 3]', () => {
  expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
});

test('Fibonacci de 10 debería ser [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
  expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('Fibonacci de 0 debería ser un mensaje de error', () => {
  expect(fibonacci(0)).toBe('Invalid input');
});
```

Para ejecutar las pruebas, abre la terminal en Visual Studio Code y ejecuta el siguiente comando en la raíz de tu proyecto:

```bash
npx jest
```

Jest ejecutará las pruebas y mostrará los resultados en la consola. Puedes personalizar y expandir estas pruebas según las necesidades de tu proyecto.

¡Ahora estás listo para escribir y ejecutar pruebas unitarias en JavaScript con Jest en Visual Studio Code!

## Agradecimientos

Hecho con ❤️ por Matias Ignacio - https://github.com/Matignaciom
