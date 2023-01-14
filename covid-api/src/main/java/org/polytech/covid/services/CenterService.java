package org.polytech.covid.services;

import org.polytech.covid.Entities.Center;
import org.polytech.covid.DAO.ICenter;
import org.polytech.covid.DAO.ICity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CenterService {
    private final ICenter iCenter;
    private final ICity iCity;

    public CenterService(ICenter iCenter, ICity iCity) {
        this.iCenter = iCenter;

        this.iCity = iCity;
    }

    public List<Center> getAllCenters() {
        return this.iCenter.findAll();
    }

    public List<Center> getCentersByName(String name) {
        //return all centers with the name containing the string name
        return this.iCenter.findAllByNameContaining(name);
    }

    public Center addCenter(String name, Long cityId) {
        Center center = new Center();
        center.setName(name);
        center.setCity(this.iCity.findById(cityId).orElse(null));

        return this.iCenter.save(center);
    }

    public Center updateCenter(Center center) {
        return this.iCenter.save(center);
    }

    public void deleteCenterById(Long id) {
        this.iCenter.deleteById(id);
    }

}


