package org.polytech.covid.Controllers;

import org.polytech.covid.Entities.User;
import org.polytech.covid.Entities.VaccinationCenter;
import org.polytech.covid.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PostMapping({"/registerNewUser"})
    public User registerNewUser(@RequestBody User user) {
        return userService.registerNewUser(user);
    }

    @GetMapping({"/forAdmin"})
    @PreAuthorize("hasRole('Admin')")
    public String forAdmin(){
        return "This URL is only accessible to the admin";
    }


    @GetMapping("/users")
    @PreAuthorize("hasRole('Super_Admin')")
    public ResponseEntity<List<User>> getUsers(@RequestParam final long centerId){
        return new ResponseEntity<>(userService.getUsers(centerId), HttpStatus.OK);
    }
}
