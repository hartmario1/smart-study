FROM node:18-alpine
LABEL name "smartstudy postgresql"

EXPOSE 5432

COPY *.sql /docker-entrypoint-initdb.d/
