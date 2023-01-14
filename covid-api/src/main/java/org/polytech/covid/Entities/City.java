package org.polytech.covid.Entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(unique = true)
    String name;
    Integer zipCode;
    @OneToMany(mappedBy = "city")
    @JsonIgnoreProperties("users")
    List<Center> centres;

    public City(String name, Integer zipCode){
        this.name = name;
        this.zipCode = zipCode;
    }

}
