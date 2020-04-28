package com.studs.defecttracker.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.TimeZone;

@Entity
public class Defect {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "defect_id")
    private int defectID;

    @Column(name = "stud_id")
    private int studID;

    @Column(name = "defect_type")
    private String defectType;

    @Column(name = "units_affected")
    private int unitsAffected;

    private LocalDate date;

    public int getDefectID() {
        return defectID;
    }

    public void setDefectID(int defectID) {
        this.defectID = defectID;
    }

    public int getStudID() {
        return studID;
    }

    public void setStudID(int studID) {
        this.studID = studID;
    }

    public String getDefectType() {
        return defectType;
    }

    public void setDefectType(String defectType) {
        this.defectType = defectType;
    }

    public int getUnitsAffected() {
        return unitsAffected;
    }

    public void setUnitsAffected(int unitsAffected) { this.unitsAffected = unitsAffected; }

    public LocalDate getDate() { return date; }

    public void setDate(LocalDate date) { this.date = date; }

}
