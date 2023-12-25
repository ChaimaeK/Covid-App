FROM gradle:7.5.1 AS build
COPY --chown=gradle:gradle . /covid-api
WORKDIR /covid-api
RUN gradle init
RUN gradle build --no-daemon

FROM openjdk:17
RUN mkdir /api
WORKDIR /api
COPY ./gradle/wrapper/gradle-wrapper.jar .
EXPOSE 8080
ENTRYPOINT ["java","-jar","gradle-wrapper.jar"]

#FROM eclipse-temurin:17-jre-alpine
#RUN mkdir /api
#WORKDIR /api
#COPY ./build/libs/covid-api-0.0.1-SNAPSHOT.jar .
#EXPOSE 8080
#CMD ["java", "-Dspring.profiles.active=docker", "-jar","covid-api-0.0.1-SNAPSHOT.jar"]
