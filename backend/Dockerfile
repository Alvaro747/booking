# Establece la imagen base de node
FROM node:18-alpine

# instala ts-node
RUN npm install -g ts-node

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copia los archivos necesarios para compilar e instalar las dependencias
COPY package*.json ./

# Instala las dependencias de producción
RUN npm ci

# Copia el resto de los archivos al directorio de trabajo
COPY . .


# Expone el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
