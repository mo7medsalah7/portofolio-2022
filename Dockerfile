FROM node:lts-alpine3.14 AS build

Run mkdir -p /app
WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . /app
RUN npm run build

#final stage
#pull the official nginx:1.19.0 base image
FROM nginx:alpine
#copies React to the container directory
# Set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static resources
RUN rm -rf ./*


# Copies static resources from build stage(the above stage, i named is AS build so it's build)
COPY --from=build /app /usr/share/nginx/html/
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

