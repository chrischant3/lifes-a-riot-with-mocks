# Pull base image.
FROM node:alpine

# Set Work Dir
WORKDIR /app

# Copy files to install
ADD ./bin/ /app/bin/
ADD ./db/ /app/db/
ADD ./models/ /app/models
ADD ./data/ /app/data/
ADD ./routes/ /app/routes/
ADD ./app.js /app
ADD ./package.json /app
ADD ./package-lock.json /app

#Install node modules
RUN cd /app && \
    npm install

# Expose ports
EXPOSE 3000

#Run on build
CMD [ "npm", "start" ]