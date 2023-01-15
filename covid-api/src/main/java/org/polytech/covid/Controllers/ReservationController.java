package org.polytech.covid.Controllers;

import org.polytech.covid.Entities.Reservation;
import org.polytech.covid.Entities.VaccinationCenter;
import org.polytech.covid.Services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
//@RequestMapping("/private")
public class ReservationController {
    private final ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping("/reservations")
    @PreAuthorize("hasAnyRole('Admin','Medecin')")
    public ResponseEntity<List<Reservation>> getReservationsByCenter(@RequestParam final long centerId){
        return new ResponseEntity<>(reservationService.findAllByCenter(centerId), HttpStatus.OK);
    }

    @GetMapping("/reservationsByPatient")
    @PreAuthorize("hasAnyRole('Admin','Medecin')")
    public ResponseEntity<List<Reservation>> getReservationsByCenterAndPatient(@RequestParam final long centerId, @RequestParam final String name){
        return new ResponseEntity<>(reservationService.findAllByCenterAndPatient(centerId, name), HttpStatus.OK);
    }

    @PostMapping("public/addReservation")
    public ResponseEntity<Reservation> addReservation(@RequestBody final Reservation reservation){
        if (reservation.getReservationDate().after(new Date())) {
            return new ResponseEntity<>(reservationService.addReservation(reservation), HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    @PutMapping("/approveVaccination")
    @PreAuthorize("hasAnyRole('Admin','Medecin')")
    public Reservation approveVaccination(@RequestBody final Reservation reservation){
        return reservationService.approveVaccination(reservation);
    }
}
