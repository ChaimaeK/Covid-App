package org.polytech.covid.Controller;


import org.polytech.covid.services.ReservationService;
import org.polytech.covid.Entities.Reservation;
import org.polytech.covid.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Reservation")
public class ReservationController {

    private final ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllReservations() {
        return ResponseEntity.ok(this.reservationService.getAllReservations());
    }

    @PostMapping("/add")
    public ResponseEntity<?> addReservation(@RequestBody Reservation Reservation) {
        return ResponseEntity.ok(this.reservationService.addReservation(Reservation));
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateReservation(@RequestBody Reservation Reservation) {
        return ResponseEntity.ok(this.reservationService.updateReservation(Reservation));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteReservation(@RequestParam Long id) {
        this.reservationService.deleteReservationById(id);
        return ResponseEntity.ok().build();
    }
}

