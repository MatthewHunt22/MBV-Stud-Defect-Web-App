package com.studs.defecttracker.web.controllers;

import com.studs.defecttracker.model.Stud;
import com.studs.defecttracker.repository.StudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
public class StudController {

    @Autowired
    StudRepository repository;

    /*
     * CrossOrigin annotation that allows requests to come in from another port, specifically 3000 from React
     * Get Request Method that returns all stud objects from the database
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value="/studs")
    public @ResponseBody Iterable<Stud> getAllStuds() {
        return repository.findAll();
    }

    /*
     * CrossOrigin annotation that allows requests to come in from another port, specifically 3000 from React
     * Get Request Method that returns a stud object from the database using the stud ID
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value="/studs/{id}")
    public @ResponseBody Optional<Stud> getStud(@PathVariable String id) {
        return repository.findById(Integer.parseInt(id));
    }

    /*
     * CrossOrigin annotation that allows requests to come in from another port, specifically 3000 from React
     * Put Request Method that updates the stud object in the database.
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping(value="/studs/{id}")
    public @ResponseBody Stud editStud(@RequestBody Stud stud) {

        return repository.save(stud);
    }

    /*
     * CrossOrigin annotation that allows requests to come in from another port, specifically 3000 from React
     * Post Request Method that adds a new stud to the database.
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/addstud")
    public @ResponseBody Stud addStud(@RequestBody Stud stud) {

        return repository.save(stud);
    }
}
