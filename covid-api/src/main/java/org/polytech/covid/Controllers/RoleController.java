package org.polytech.covid.Controllers;

import org.polytech.covid.Entities.Role;
import org.polytech.covid.Entities.User;
import org.polytech.covid.Services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RoleController {

    @Autowired
    private RoleService roleService;

    @PostMapping({"/createNewRole"})
    public Role createNewRole(@RequestBody Role role) {
        return roleService.createNewRole(role);
    }

    @GetMapping("/roles")
    //@PreAuthorize("hasAnyRole('Super_Admin','Admin')")
    public ResponseEntity<List<Role>> getRoles(){
        return new ResponseEntity<>(roleService.getRoles(), HttpStatus.OK);
    }
}
