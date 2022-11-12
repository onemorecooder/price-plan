# ESTRUCTURA DEL PROYECTO

He decidido dividir el proyecto en varios componentes para que sea lo más
reutilizable posible, como es el caso de cada carta, en las cuales se ha
creado un aplantilla para cargar la distinta información de cada plan.

Para cargar la información, he creado un fichero de configuración en el
cual see introduce toda la información y luego en cada carta se mapea 
dicha información dependiendo del plan que se decida introducir, así será
posible poder utilizar las cartas creadas con distintos propósitos.

En el caso de los iconos, creo un componente llamado icono para no tener
que importar los iconos uno por uno, sino que con el componente se carga
el nombre clave de cada icono y se carga el icono que se desee.

Para el tema de las animaciones he decidido crear una transformación del
eje Y para que al clickar en el botón de cada plan la carta gire y se muestre
una información distinta, en este caso la información para introducir el correo
electrónico. También se utiliza useState para saber cuando una carta está 
girada o no y poder cambiar su estado de forma más fácil.

He instalado la librería framer-motion para que las animaciones sean más suaves
y sean visualmente más interesantes.

También he utilizado la librería de react-modal para crear el "pop-up" que aparece
al clickar en el botón del formulario que nos aparece al girar la carta para 
que el usuario se suscriba a uno de los diferentes planes.

# NOTA SONARCLOUD
PASSED

Adjunto una captura de pantalla del resultado del análisis del proyecto. `/nota_sonarCloud.png`;
