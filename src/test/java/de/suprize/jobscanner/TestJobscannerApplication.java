package de.suprize.jobscanner;

import org.springframework.boot.SpringApplication;

public class TestJobscannerApplication {

	public static void main(String[] args) {
		SpringApplication.from(JobscannerApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
