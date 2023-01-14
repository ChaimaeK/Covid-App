package org.polytech.covid.DAO;

import org.polytech.covid.Entities.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICity extends JpaRepository<City,Long> {

    City findCityByName(String name);

}
