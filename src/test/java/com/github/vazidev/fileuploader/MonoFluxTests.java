package com.github.vazidev.fileuploader;

import net.minidev.json.JSONUtil;
import org.junit.jupiter.api.Test;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;

public class MonoFluxTests {
    List<?> arrayList = new ArrayList<String>();

    //        ("Tim", "Tam", "Tom", "Twit", "Twot", "Twut");

    public void setArrayList(List<?> arrayList) {
        this.arrayList = arrayList;
    }

    @Test
    public void testMono(){
        Mono<?> monoString = Mono.just("I am number One")
                .then(Mono.error(new RuntimeException("Runtime Exception Testing")))
                .log();

        monoString.subscribe(System.out::println, (e) -> System.out.println(e.getMessage()));

    }


    @Test
    public void testFlux(){
        Flux<String> fluxTest = Flux.just("Tim", "Tam", "Tom", "Twit", "Twot", "Twut")
                .concatWithValues("Twem")
                .concatWith(Flux.error(new RuntimeException("Runtime Exception Testing in flux")))
               // .doOnNext(System.out.println("Hello"))
                .log();
        fluxTest.subscribe(System.out::println, (e) -> System.out.println(e.getMessage()));
    }


}
