package com.alvaro.grouplinks.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Link {

    @Id
    @GeneratedValue
    private Long id;
    private String website;
    private String text;
    private String ulr;


}
