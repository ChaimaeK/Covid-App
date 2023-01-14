package org.polytech.covid.services;

import org.polytech.covid.Entities.City;
import org.polytech.covid.DAO.ICity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService {

    private final ICity cityRepository;

    public CityService(ICity cityRepository) {
        this.cityRepository = cityRepository;
    }

    public List<City> getAllCities() {
        return this.cityRepository.findAll();
    }

    public City addCity(City city) {
        return this.cityRepository.save(city);
    }

    public City updateCity(City city) {
        return this.cityRepository.save(city);
    }

    public void deleteCityById(Long id) {
        this.cityRepository.deleteById(id);
    }


}
