package com.github.vazidev.fileuploader.controller;


import io.netty.util.internal.logging.Log4JLoggerFactory;

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
@RequestMapping("upload")
public class UploadController {
    private static final Logger log =  Logger.getLogger("uploader") ;
    private final Path basePath = Paths.get("./src/main/resources/TestDirectory/Tmp2");

    @PostMapping("file/single")
    public Mono<Void> upload(@RequestPart("userID") String name,
                             @RequestPart("fileToUpload") Mono<FilePart> filePartMono){
        log.info("user: " + name);
        return filePartMono
                .doOnNext(fp -> log.info("Received File : "+ fp.filename()))
                .flatMap(fp -> fp.transferTo(basePath.resolve(fp.filename())))
                .then();
    }
    @PostMapping("file/multi")
    public Mono<Void> upload (@RequestPart("files") Flux<FilePart> partFlux){
        return partFlux
                .doOnNext(fp -> System.out.println(fp.filename()))
                .flatMap(fp -> fp.transferTo(basePath.resolve(fp.filename())))
                .then();
    }
}
