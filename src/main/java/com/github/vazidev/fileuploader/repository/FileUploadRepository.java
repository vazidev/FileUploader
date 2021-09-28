package com.github.vazidev.fileuploader.repository;

import com.github.vazidev.fileuploader.domain.File;
import org.springframework.data.cassandra.repository.ReactiveCassandraRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

import java.util.logging.Logger;

@Repository
public interface FileUploadRepository  extends ReactiveCassandraRepository<File, String> {
    Logger log = Logger.getLogger("FileStatus");


}
