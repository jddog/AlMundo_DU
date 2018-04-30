#ALMundo_DU
Aplicacion Front End en Ionic 5/Angular 5 con capa de persistencia FireBase para prueba de ingreso de AlMundo


- Para utilizar este proyecto se necesita tener las siguientes herramientas


- Instalar npm y node js en la version (6.11.0 en adelante)

```sh

https://nodejs.org/en/

```

- Instalar Ionic Framework

```sh

https://ionicframework.com/docs/intro/installation/

```


- Clonar proyecto
- Se debe ejecutar el siguiente comando estando en el directorio que se desee obetener el codigo
```sh

git clone https://github.com/jddog/AlMundo_DU.git

```

- Luego ingresar a la carpeta generada y ejecutar para instalar todas las dependencias

```sh

npm install --save

```


# Lanzar Cliente


- Ejecutar en la linea de comandos a nivel donde se encuentra el proyecto

```sh

ionic serve

```

# Consideraciones

- Se implemento funcionalidad para ver el detalle del hotel al dar click en le botton "Ver Hotel"
- Se implemento funcionalidad en real time, para visualizar cuantos usuarios se encuentran viendo el detalle del hotel en el mismo momento
- En los filtros si aun se encuentra activo el check de "Consultar Todos" siempre traera todos los hoteles
- Hubo imagenes que no se encontraban fisicamente, se implemento funcionalidad para mostrar una imagen comun en este caso