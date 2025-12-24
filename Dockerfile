FROM node:alpine
WORKDIR /app 
COPY package*.json ./ 
RUN npm install
RUN npm audit fix
RUN npm i baseline-browser-mapping@latest -D
COPY . . 
EXPOSE 5173
CMD [ "npm", "run", "dev" ]

