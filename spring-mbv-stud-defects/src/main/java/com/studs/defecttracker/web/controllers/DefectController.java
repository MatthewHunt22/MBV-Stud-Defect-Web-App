package com.studs.defecttracker.web.controllers;

import com.studs.defecttracker.model.Defect;
import com.studs.defecttracker.repository.DefectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@Controller
public class DefectController {

    @Autowired
    DefectRepository repository;

    /*
     * CrossOrigin annotation that allows requests to come in from another port, specifically 3000 from React
     * Get Request Method that returns all defect objects from the database
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value="/defects")
    public @ResponseBody
    Iterable<Defect> getAllDefects() {
        return repository.findAll();
    }

    /*
     * CrossOrigin annotation that allows requests to come in from another port, specifically 3000 from React
     * Get Request Method that returns all defect objects from the database that match the stud ID
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value="/defects/{id}")
    public @ResponseBody Iterable<Defect> getDefectsById(@PathVariable String id) {

        return repository.findAllByStudID(Integer.parseInt(id));
    }

    /*
     * CrossOrigin annotation that allows requests to come in from another port, specifically 3000 from React
     * Get Request Method that returns all defect objects from the database that occurred within the past week
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value="/defects/week")
    public @ResponseBody
    Iterable<String> studDefectsPastWeek() {
        return repository.studDefectsPastWeek();
    }

    /*
     * CrossOrigin annotation that allows requests to come in from another port, specifically 3000 from React
     * Post Request Method that adds a defect to the database
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/adddefect")
    public @ResponseBody
    Defect addDefect(@RequestBody Defect defect) {

        return repository.save(defect);
    }

}
