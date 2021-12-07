FROM mhart/alpine-node:14

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Then we copy over the modules from above onto a `slim` image
#FROM mhart/alpine-node:slim-12

#WORKDIR /home/node/app
#COPY --from=0 /app/dist .
EXPOSE 3001
CMD ["node", "dist/index.js"]