package org.polytech.covid.DAO;

import org.polytech.covid.Entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IReservation extends JpaRepository<Reservation,Long> {

    Reservation findMeetingByCenter(String name);
}
