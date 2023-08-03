package com.alvaro.grouplinks.controllers;


import com.alvaro.grouplinks.entities.Link;
import com.alvaro.grouplinks.service.LinkService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping(path = "/{id}")
public class LinkController {

    public LinkService service;

    public LinkController (LinkService service) {
        this.service = service;
    }

    @GetMapping
    @ResponseStatus(code= HttpStatus.OK)
    public Link obtainLink(@PathVariable Long id) {
        return service.obtainLink(id);
    }

    @PostMapping
    @ResponseStatus(code=HttpStatus.CREATED)
    public Link addInstitute(@RequestBody Link link) {
        service.addLink(link);
        return link;
    }

}
