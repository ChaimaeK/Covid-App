package org.polytech.covid.Services;

import org.polytech.covid.Entities.VaccinationCenter;
import org.polytech.covid.Repositories.VaccinationCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VaccinationCenterService {

    private final VaccinationCenterRepository vaccinationCenterRepository;

    @Autowired
    public VaccinationCenterService(VaccinationCenterRepository vaccinationCenterRepo){this.vaccinationCenterRepository = vaccinationCenterRepo;}

    public List<VaccinationCenter> findAllCenters(){return vaccinationCenterRepository.findAll();}
}