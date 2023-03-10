package org.polytech.covid.Entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor @NoArgsConstructor
@Table(name = "reservation")
public class Reservation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reservation")
    private long idReservation;

    @Column(name = "reservation_date")
    private Date reservationDate;

    @ManyToOne @JoinColumn(name = "center")
    private VaccinationCenter center;

    private String nom;

    private String prenom;

    private String email;

    @Column(name = "validee")
    @Value("${false}")
    private boolean approved;


}
