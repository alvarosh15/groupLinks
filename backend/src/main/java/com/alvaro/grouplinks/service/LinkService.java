package com.alvaro.grouplinks.service;

import com.alvaro.grouplinks.entities.Link;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.alvaro.grouplinks.repositories.LinkRepository;

@Service
@Transactional
public class LinkService {
    private LinkRepository linkRepository;

    @Autowired
    public LinkService(LinkRepository repo) {
        this.linkRepository = repo;
    }

    public Long addLink(Link link) {
        linkRepository.save(link);
        return link.getId();
    }

    public Link obtainLink(Long id) {
        var linkOptional = linkRepository.findById(id);
        if(linkOptional.isPresent()) {
            return linkOptional.get();
        } else {
            throw new EntityNotFoundException();
        }
    }

}
