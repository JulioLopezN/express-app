FROM sonarsource/sonar-scanner-cli AS sonarqube
ARG PROJECT_VERSION
ARG SONAR_PROJECT_KEY
ARG SONAR_HOST_URL
ARG SONAR_TOKEN
ARG SONAR_DEBUG=false
COPY [".", "/usr/src/"]
WORKDIR /usr/src
RUN sonar-scanner \
  -Dsonar.projectKey=$SONAR_PROJECT_KEY \
  -Dsonar.projectVersion=$PROJECT_VERSION \
  -Dsonar.host.url=$SONAR_HOST_URL \
  -Dsonar.login=$SONAR_TOKEN \
  -Dsonar.projectBaseDir=./ \
  -Dsonar.scm.disabled=true \
  -Dsonar.verbose=$SONAR_DEBUG

FROM node:16-alpine
WORKDIR /usr/src
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
