#Build stage
FROM gradle:latest AS BUILD
WORKDIR /usr/app/
COPY . . 
RUN gradle init
RUN gradle build

# Package stage
FROM openjdk:latest
ENV JAR_NAME=covid-api-0.0.1-SNAPSHOT.jar
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
COPY --from=BUILD $APP_HOME .
EXPOSE 8080
ENTRYPOINT exec java -jar $APP_HOME/build/libs/$JAR_NAME

#FROM gradle:7.5.1 AS build
#COPY --chown=gradle:gradle . /covid-api
#WORKDIR /covid-api
#RUN gradle init
#RUN gradle build --no-daemon

#FROM openjdk:17
#ARG JAR_FILE=./covid-api/build/libs/*.jar
#EXPOSE 8080
#COPY ${JAR_FILE} application.jar
#ENTRYPOINT ["java", "-jar", "application.jar"]

#FROM eclipse-temurin:17-jre-alpine
#RUN mkdir /api
#WORKDIR /api
#COPY ./covid-api/build/libs/covid-api-0.0.1-SNAPSHOT.jar .
#CMD ["java", "-Dspring.profiles.active=docker", "-jar","covid-api-0.0.1-SNAPSHOT.jar"]
#EXPOSE 8080
