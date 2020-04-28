package com.studs.defecttracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.TimeZone;

@SpringBootApplication
public class DefectTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(DefectTrackerApplication.class, args);
		TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
	}

}
