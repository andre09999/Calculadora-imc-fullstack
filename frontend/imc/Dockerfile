FROM node:14-alpine
EXPOSE 3001
WORKDIR frontend/imc/
COPY . .
RUN npm install
ADD node_modules.tar.gz ./
CMD ["npm", "start"]
