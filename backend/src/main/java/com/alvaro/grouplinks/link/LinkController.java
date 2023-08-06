package com.alvaro.grouplinks.link;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/{id}")
public class LinkController {

    private final LinkService service;

    public LinkController (LinkService service) {
        this.service = service;
    }

    @GetMapping
    @ResponseStatus(code=HttpStatus.OK)
    public List<Link> obtainLink(@PathVariable String id) {
        return service.obtainLink(id);
    }

    @PostMapping(path = "/add")
    @ResponseStatus(code=HttpStatus.CREATED)
    public Link addInstitute(@RequestBody Link link) {
        service.addLink(link);
        return link;
    }

}
