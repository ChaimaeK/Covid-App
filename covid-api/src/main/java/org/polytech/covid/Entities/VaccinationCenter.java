package org.polytech.covid.Entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.List;

@Entity
@Data
@AllArgsConstructor @NoArgsConstructor
@Table(name = "center", schema = "covid")

public class VaccinationCenter implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long idCenter;
    @Column(name = "name")
    private String name;
    @Column(name = "address")
    private String address;
    @Column(name = "postal_code")
    private int postalCode;
    @Column(name = "city")
    private String city;

    /*@OneToMany(mappedBy = "center")
    private Collection<Reservation> reservations;*/
}
