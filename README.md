# webview_electron


EN POCAS PALABRAS:
Este proyecto exporta un .exe de una URL que le pongamos en modo Webview
Usando la tecnologia electron. Se puede modificar icono y algunas cosas mas.
Ademas exporta un instalador que funciona en todas las maquinas con windows 32 y 64 bits
(Probe desarrollando en ubuntu)

MODUS OPERANDI:
1. Instalar NODE, bajar de la web oficial e instalar. Revisar que instale NPM (en consola: npm --version).
2. Abrir la consola (CMD O TERMINAL) e ir al directorio y ejecutar los siguientes comandos
3. npm install
4. npm run dist
5. Revisar en el directorio, creo una carpeta llamada dist, dentro de ella hay un archivo que contiene la palabra setup para distribuir e instalar en entornos windows

COMO EDITAR:
- En main.js buscar   mainWindow.loadURL('https://admin.osunlar.org'); y modificar a gusto la url
- Se puede cambiar el icono, siempre y cuando tenga una resolucion de 256x256
- Se puede hacer que lea el html y css en main.js cambiando la funcion que se usa por la que esta comntada
- En main.js Ucultamos barra de menu y pusimos que se ejecute maximizado pero lo segundo no funcionó
- En packaje.json se pone el nombre de la app, descripcion y demas
- Se puede exportar para linux y mac pero no probamos. Forkear, editar y testear
