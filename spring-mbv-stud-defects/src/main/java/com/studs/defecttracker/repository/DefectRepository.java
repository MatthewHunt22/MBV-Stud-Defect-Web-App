package com.studs.defecttracker.repository;

import com.studs.defecttracker.model.Defect;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface DefectRepository extends JpaRepository<Defect, Integer> {

   Iterable<Defect> findAllByStudID(Integer studID);

   //todo query that changes total missing/broken/position

   @Query(value = "SELECT stud_id, sum(units_affected) FROM defect " +
           "WHERE date >= DATE(NOW()) + INTERVAL - 7 DAY GROUP BY stud_id",
           nativeQuery = true)
   Iterable<String> studDefectsPastWeek();

   //todo single day

   //todo 14 days

   //todo 30 days
}