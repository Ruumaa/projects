FROM node:18-alpine3.18

WORKDIR /app

COPY package.json package-lock.json ./

# COPY . .
# RUN npm install --production
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]