package org.polytech.covid.Services;

import net.bytebuddy.implementation.bytecode.Throw;
import org.polytech.covid.Entities.Reservation;
import org.polytech.covid.Entities.VaccinationCenter;
import org.polytech.covid.Repositories.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final VaccinationCenterService vaccinationCenterService;

    @Autowired
    public ReservationService(ReservationRepository reservationRepository, VaccinationCenterService vaccinationCenterService) {
        this.reservationRepository = reservationRepository;
        this.vaccinationCenterService = vaccinationCenterService;
    }

    public List<Reservation> findAllByCenter(final long centerId) {
        return reservationRepository.findByCenter_IdCenter(centerId);
    }

    public List<Reservation> findAllByCenterAndPatient(final long centerId, final String name) {
        return reservationRepository.findByCenter_IdCenterAndNomContainsIgnoreCase(centerId, name);
    }

    public Reservation addReservation(final Reservation reservation){
        return reservationRepository.save(reservation);
    }

    public Reservation approveVaccination(final Reservation reservation){
        reservation.setApproved(true);
        return reservationRepository.save(reservation);
    }
}