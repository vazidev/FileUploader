package com.github.vazidev.fileuploader.controller;


import com.github.vazidev.fileuploader.service.FileUploadService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.logging.Logger;

@RestController
@PropertySource("classpath:application.properties")
@RequestMapping(value ="upload")
public class UploadController {
    private static final Logger log =  Logger.getLogger("uploader");
    private final Path basePath = Paths.get("./src/main/resources/FileDirectory/Tmp2");
    String filePath;

    @Value("${spring.data.rest.base-path}")
    public String setFilePath(String filePath){
        return  this.filePath = filePath;
    }

    @Autowired
    private final FileUploadService fileService;

    public UploadController( FileUploadService fileService) {
            this.fileService = fileService;
    }

    @PostMapping("file/single")
    public Mono<Void> upload(@RequestPart("userID") String userId,
                             @RequestPart("fileToUpload") Mono<FilePart> filePartMono){
        log.info("user: " + userId);
        return filePartMono
                .doOnNext(fp -> log.info("Received File : "+ fp.filename()))
                .doOnNext(fp -> System.out.println("File Name : "+ fp.filename()))
                .doOnNext(fp -> System.out.println("Base File Directory : "+ basePath))
                .doOnNext(fp -> log.info("Base FilePath : " +  filePath))
                .flatMap(fp -> fp.transferTo(basePath.resolve(fp.filename())))
                //.doOnNext(fp -> fileService.singleFileUpload(userId, filePartMono, filePath))
                .then();
    }
    @PostMapping("file/multi")
    public Mono<Void> upload (@RequestPart("files") Flux<FilePart> partFlux){
        return partFlux
                .doOnNext(fp -> System.out.println(fp.filename()))
                .doOnNext(fp ->log.info("Files Downloaded: " + fp.filename()))
                .doOnNext(fp -> log.info("FilePath: " +  filePath))
                .flatMap(fp -> fp.transferTo(basePath.resolve(fp.filename())))
                .then();
    }

}
