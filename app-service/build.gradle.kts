plugins {
    id("java")
}

group = "de.suprize"
version = "0.0.1-SNAPSHOT"

repositories {
    mavenCentral()
}

extra["mapstructVersion"] = "1.6.3"

dependencies {
    annotationProcessor("org.mapstruct:mapstruct-processor:${property("mapstructVersion")}")

    implementation("org.mapstruct:mapstruct:${property("mapstructVersion")}")

    testImplementation(platform("org.junit:junit-bom:5.10.0"))
    testImplementation("org.junit.jupiter:junit-jupiter")
}

tasks.test {
    useJUnitPlatform()
}