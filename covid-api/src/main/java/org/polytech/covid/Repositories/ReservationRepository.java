package org.polytech.covid.Repositories;

import org.polytech.covid.Entities.Reservation;
import org.polytech.covid.Entities.VaccinationCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByCenter_IdCenter(final long centerId);
    List<Reservation> findByCenter_IdCenterAndNomContainsIgnoreCase(final long centerId, final String name);
}
