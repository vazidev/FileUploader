package com.github.vazidev.fileuploader.domain;

import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;
import org.springframework.lang.NonNull;

import java.sql.Timestamp;
import java.util.Objects;
import java.util.UUID;

@Table("uploads")
public class File {


    @PrimaryKey private String fileName;
    String userId;
    String location;
    UUID fileId;
    Timestamp timestamp;

    public File(){}

    @NonNull
    public static File from(File f){
        return new File (f.fileName, f.userId, f.location, f.fileId, f.timestamp);
    }

    @PersistenceConstructor
    public File( String fileName, String userId, String location, UUID fileId, Timestamp timestamp) {
        this.fileName = fileName;
        this.fileId = fileId;
        this.timestamp = timestamp;
        this.location = location;
        this.userId = userId;
    }

    public File(String userId, String fileName, String location){
        this.userId = userId;
        this.fileName = fileName;
        this.location = location;
    }

    /**
     * Getter and setters
     */

    public UUID getFileId() {
        return fileId;
    }

    public void setFileId(UUID fileId) {
        this.fileId = UUID.randomUUID();
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return " FileName: " + fileName
                + "File ID: " +  fileId
                + "Location: " + location
                + "Uploaded by: " + userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        File file = (File) o;
        return Objects.equals(this.fileName, file.fileName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(fileName, location, timestamp, userId);
    }


}
