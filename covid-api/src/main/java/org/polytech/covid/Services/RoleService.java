package org.polytech.covid.Services;

import org.polytech.covid.Entities.Role;
import org.polytech.covid.Entities.VaccinationCenter;
import org.polytech.covid.Repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleDao;

    public Role createNewRole(Role role) {
        return roleDao.save(role);
    }

    public List<Role> getRoles(){return roleDao.findAll();}
}