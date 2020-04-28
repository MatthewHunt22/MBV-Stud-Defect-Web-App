package com.studs.defecttracker.model;

import javax.persistence.*;

@Entity
public class Stud {

    @Id
    @Column(name = "stud_id")
    private Integer studID;
    private String process;
    private String assemblyName;
    private int totalMissing;
    private int totalBroken;
    private int totalPosition;


    public Integer getStudID() {
        return studID;
    }

    public void setStudID(Integer studID) {
        this.studID = studID;
    }

    public String getProcess() {
        return process;
    }

    public void setProcess(String process) {
        this.process = process;
    }

    public String getAssemblyName() {
        return assemblyName;
    }

    public void setAssemblyName(String assemblyName) {
        this.assemblyName = assemblyName;
    }

    public int getTotalMissing() {
        return totalMissing;
    }

    public void setTotalMissing(int totalMissing) {
        this.totalMissing = totalMissing;
    }

    public int getTotalBroken() {
        return totalBroken;
    }

    public void setTotalBroken(int totalBroken) {
        this.totalBroken = totalBroken;
    }

    public int getTotalPosition() {
        return totalPosition;
    }

    public void setTotalPosition(int totalPosition) {
        this.totalPosition = totalPosition;
    }
}
