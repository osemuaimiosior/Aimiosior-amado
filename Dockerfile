FROM node:18-alpine

#Create a app directory
WORKDIR /app

#Install app dependencies
COPY package*.json ./

#Run nmp install
RUN npm install

#Bundel app source
COPY . .

EXPOSE 3500

CMD ["npm", "start"]