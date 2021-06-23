# Edushrava

## Local Mode

### Start REST Server

#### Start from an IDE

Run `edushrava-rest/shravasoft.edushrava.EdushravaApplication` from your IDE. Application starts on port 8080

#### Start from the shell

Run `mvn spring-boot:start` from `edushrava-rest` directory in a shell. Application runs on port 8080

### Start Node Web Server

Run `npm start` from `edushrava-web` directory. Application starts on port 9000

Install dependencies from the `edushrava-web` directory by running `npm i`

## Packaged Mode

### Run `mvn package` from project root

Executable JAR: `edushrava-app/target/edushrava-app-<version>.jar`

Run `java -jar edushrava-app/target/edushrava-app-<version>.jar`

## Deploy to Cloud Foundry

Make sure that latest jar has been built by running `mvn package` from project root

`cf push -f manifest/manifest-local.yml edushrava`
