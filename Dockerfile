FROM node:14

RUN mkdir -p /app
WORKDIR /app

RUN groupadd -g 2000 appgroup \
    && useradd -m -u 2001 -g appgroup app
RUN chown -R app:appgroup /app

RUN apt-get update && \
    apt-get -y install libgconf2-dev \
    libnss3 \
    libasound2 \
    libxtst-dev \
    libxss1 \
    libatk-bridge2.0-0 \
    libgtk-3.0 \
    libx11-xcb1 && \    
    apt-get clean

RUN npm install --quiet node-gyp npm-check-updates -g

USER app

EXPOSE 8000