## Ejecución del Proyecto en Entorno Local

### Requisitos Previos

Antes de comenzar, asegúrate de tener instalado `Node.js`

### Instrucciones

#### 1. Accede al Directorio del Proyecto

Abre una terminal (CMD) y navega hasta la carpeta raíz del proyecto. Sustituye la siguiente ruta con la ubicación correspondiente en tu equipo:

```bash
cd C:\Users\zoovane\Documents\gamerlab\_front\_2295\_1\Frontend-FeriaGamer-main\feria-gamer
```

#### 2. Instala las Dependencias del Proyecto

Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

#### 3. Instala React Router DOM

```bash
npm install react-router-dom
```

#### 4. Instala los Tipos para React Router DOM

```bash
npm install --save-dev @types/react-router-dom
```

#### 5. Configuración de Permisos (opcional)

Si experimentas errores relacionados con permisos, abre PowerShell en el mismo directorio del proyecto y ejecuta:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### 6. Abrir el Proyecto en Visual Studio Code

Desde Visual Studio Code, abre el directorio raíz del proyecto. Luego, asegúrate de que la terminal esté posicionada en el subdirectorio `feria-gamer`:

```bash
cd feria-gamer
```

#### 7. Iniciar el Servidor de Desarrollo

Para iniciar la aplicación en modo desarrollo, ejecuta:

```bash
npm run dev
```

### Acceso a la Aplicación

Una vez iniciado el servidor, deberías ver una salida similar a la siguiente:

```
VITE v4.x.x  ready in x ms

  ➜  Local:   http://localhost:5173/
```

Abre el enlace en tu navegador para visualizar la aplicación en funcionamiento.
