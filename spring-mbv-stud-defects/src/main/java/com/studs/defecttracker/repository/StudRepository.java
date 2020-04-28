package com.studs.defecttracker.repository;

import com.studs.defecttracker.model.Stud;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudRepository extends JpaRepository<Stud, Integer> {
}
