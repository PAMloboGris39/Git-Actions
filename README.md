# Práctica: Análisis y explicación de una GitHub Action

## 1. Descripción general de la GitHub Action

**Nombre del workflow:** CI - Tests Node

### ¿Qué problema resuelve?
Automatiza la verificación del proyecto ejecutando tests en cada cambio. Evita integrar código que rompa funcionalidades y da feedback inmediato.

### ¿En qué tipo de proyectos se puede usar?
En repositorios donde se quiera una integración continua (CI): librerías, APIs, frontends o cualquier proyecto Node.js (adaptable a otros lenguajes cambiando los pasos).

### ¿Por qué se ha elegido esta action?
Porque representa un caso real de CI sencillo y típico: ejecutar pruebas automáticamente en push y pull request.

---

## 2. Ubicación del workflow
- Ruta: `.github/workflows/`
- Archivo YAML: `ci.yml`

---

## 3. Explicación paso a paso del workflow (archivo YAML)

### `name`
Define el nombre visible del workflow en la pestaña Actions.

### `on` (eventos que disparan la action)
- `push` a la rama `main`
- `pull_request` hacia la rama `main`

### `jobs`
Contiene los trabajos que se ejecutan. En este caso hay un job llamado `test`.

### `runs-on`
Indica el sistema operativo del runner proporcionado por GitHub:
- `ubuntu-latest`

### `steps`
Lista ordenada de pasos que se ejecutan dentro del job.

### Uso de `uses` o `run`
- `uses`: utiliza acciones reutilizables del marketplace (por ejemplo `actions/checkout`).
- `run`: ejecuta comandos en la terminal del runner (por ejemplo `npm test`).

### Variables de entorno (env)
- `NODE_VERSION`: versión de Node que se usa en `setup-node`.
- `CI=true`: modo CI (no interactivo), estándar en pipelines.

---

## 4. Explicación detallada de los pasos

1. **Checkout del repositorio (`actions/checkout@v4`)**
   Descarga el contenido del repositorio dentro del runner para poder trabajar con el código.

2. **Configurar Node.js (`actions/setup-node@v4`)**
   Instala/configura la versión de Node indicada y activa caché de npm para acelerar ejecuciones.

3. **Instalar dependencias (`npm install`)**
   Instala las dependencias necesarias según `package.json`.

4. **Ejecutar tests (`npm test`)**
   Lanza los tests. Si falla algún test, el job se marca como fallido.

5. **Mensaje final**
   Deja un mensaje en logs confirmando finalización y el sistema operativo del runner.

---

## 5. Ejecución de la action

### ¿Cuándo se ejecuta?
- Cuando se hace `push` a `main`.
- Cuando se crea o actualiza un `pull request` hacia `main`.

### ¿Cómo ver la ejecución?
Repositorio -> pestaña **Actions** -> workflow **CI - Tests Node** -> seleccionar el run y revisar logs.

### Evidencias
Se adjuntan capturas/logs durante la presentación (o se ejecuta en directo desde la pestaña Actions).

