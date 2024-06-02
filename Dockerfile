FROM node:18-alpine
LABEL author="Egor Bogdanov"
WORKDIR /app/

ENV PORT=3000

COPY package-lock.json /app/
COPY package.json /app/
COPY src /app/src
COPY entrypoint.sh /app/

EXPOSE 3000

RUN npm install
ENTRYPOINT [ "sh", "entrypoint.sh" ]
