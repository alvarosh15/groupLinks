package com.alvaro.grouplinks.link;

import com.alvaro.grouplinks.user.User;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "_link")
public class Link {

    @Id
    @GeneratedValue
    private Long id;
    private String website;
    private String text;
    private String url;
    private String urlAccess;
    @ManyToOne
    private User user;



}
