package com.github.vazidev.fileuploader.service;

import com.datastax.oss.driver.api.core.time.TimestampGenerator;
import com.github.vazidev.fileuploader.domain.File;
import com.github.vazidev.fileuploader.repository.FileUploadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.UUID;

@Service
public class FileUploadService {

   @Autowired
    private final FileUploadRepository fileRepo;


    public FileUploadService(FileUploadRepository fileRepo) {
        this.fileRepo = fileRepo;
    }

    public Flux<File> getAll(){
        return fileRepo.findAll();
    }

    /**
   public Mono<File> singleFileUpload(String userId, String fileName, String filePath){
        String fileId = String.valueOf(UUID.randomUUID());
        Timestamp timestamp = Timestamp.valueOf(LocalDateTime.now());
       // Mono<File> newFile(fileName + " " + userId + " " + filePath + " " + fileId + " " + timestamp);
        //Mono<File> newFile(fileName, userId, filePath, fileId, timestamp);
        return fileRepo.save(userId, fileName, filePath);
    }
     **/

    public Mono<File> getByName(String fileName){
        return fileRepo.findById(fileName);
    }

    public Flux<File> getAllByID(String fileName){
        return fileRepo.findAllById(Collections.singleton(fileName));
    }


}
