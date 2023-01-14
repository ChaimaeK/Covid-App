package org.polytech.covid.Entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "centers")
public class Center {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    @ManyToOne()
    @JoinColumn(name = "city_id")
    @JsonIgnoreProperties("centres")
    City city;
    @OneToMany(mappedBy = "center")
    List<User> users;

    public Center(String name, City city) {
        this.name = name;
        this.city = city;
    }
}
