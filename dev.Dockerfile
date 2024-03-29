FROM node:16-buster
RUN npm install -g @vue/cli@4.5.13

WORKDIR /home/project

COPY ./project/package*.json ./
RUN npm install


CMD npm run serve
# CMD tail -f /dev/null