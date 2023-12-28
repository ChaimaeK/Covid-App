# Build stage
FROM gradle:7.5.1 AS build
RUN mkdir /app
WORKDIR /app
COPY /covid-api/settings.gradle /covid-api/build.gradle /covid-api/gradlew .
COPY /covid-api .
RUN gradle clean bootJar

# Package stage
FROM eclipse-temurin:17-jre-alpine
RUN mkdir /api
WORKDIR /api
COPY --from=build /app/build/libs/covid-api-0.0.1-SNAPSHOT.jar .
CMD ["java", "-Dspring.profiles.active=docker", "-jar","covid-api-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080