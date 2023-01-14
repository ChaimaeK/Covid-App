package org.polytech.covid.Controllers;

import org.polytech.covid.Entities.Reservation;
import org.polytech.covid.Services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/public")
public class ReservationController {
    private final ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping("/addReservation")
    public ResponseEntity<Reservation> addReservation(@RequestBody Reservation reservation){
        return new ResponseEntity<>(reservationService.addReservation(reservation), HttpStatus.CREATED);
    }
}
