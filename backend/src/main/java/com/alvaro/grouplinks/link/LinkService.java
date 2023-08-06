package com.alvaro.grouplinks.link;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class LinkService {
    private final LinkRepository linkRepository;

    @Autowired
    public LinkService(LinkRepository repo) {
        this.linkRepository = repo;
    }

    public Long addLink(Link link) {
        linkRepository.save(link);
        return link.getId();
    }

    public List<Link> obtainLink(String urlAccess) {
        return linkRepository.findAllByUrlAccess(urlAccess);
    }

}
