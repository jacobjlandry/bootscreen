# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

# install app dependencies
RUN npm install --silent

RUN npm install -g serve

RUN npm run build

CMD ["serve", "-S", "build"]