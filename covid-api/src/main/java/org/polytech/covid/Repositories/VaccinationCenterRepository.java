package org.polytech.covid.Repositories;

import org.polytech.covid.Entities.VaccinationCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VaccinationCenterRepository extends JpaRepository<VaccinationCenter, Long> {
    List<VaccinationCenter> findByCityContains(final String city);
}
