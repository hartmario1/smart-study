FROM node:18-alpine
LABEL name "smartstudy"

WORKDIR /usr/services/dash

EXPOSE 3000

COPY . .
RUN yarn install --production

CMD npm run dev
