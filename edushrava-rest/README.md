# Edushrava-Rest

## Local Mode

Run `shravasoft.edushrava.EdushravaApplication` from your IDE

- Check for a heartbeat response via the heartbeat endpoint
    - curl [localhost:8080/api/heartbeat](http://localhost:8080/actuator/health)

## Packaged Mode

- Run `mvn package` from project root
- Executable JAR: `target/edushrava-<version>.jar`

