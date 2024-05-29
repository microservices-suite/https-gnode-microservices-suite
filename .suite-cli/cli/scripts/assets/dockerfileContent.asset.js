module.exports = () =>`
FROM node:18-alpine3.18

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

CMD [ "yarn","dev" ]
`