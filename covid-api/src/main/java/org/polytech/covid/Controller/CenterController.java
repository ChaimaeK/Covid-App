package org.polytech.covid.Controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import org.polytech.covid.Entities.Center;
import org.polytech.covid.services.CenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;

@RestController
@RequestMapping("/center")
public class CenterController {
    private final CenterService centerService;

    @Autowired
    public CenterController(CenterService centerService) {
        this.centerService = centerService;
    }

    @GetMapping()
    public ResponseEntity<?> getCenter(@RequestParam(value = "q", required = false) String name) {
        if (name == null) {
            return ResponseEntity.ok(this.centerService.getAllCenters());
        } else {
            return ResponseEntity.ok(this.centerService.getCentersByName(name));
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllCenters() {
        return ResponseEntity.ok(this.centerService.getAllCenters());
    }

    @PostMapping("/add")
    public ResponseEntity<?> addCenter(@RequestBody ObjectNode body) {
        String name = body.get("name").asText();
        Long cityId = body.get("cityId").asLong();
        System.out.println(name + cityId);
        return ResponseEntity.ok(this.centerService.addCenter(name, cityId));
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateCenter(@RequestBody Center center) {
        return ResponseEntity.ok(this.centerService.updateCenter(center));
    }

    @RolesAllowed("ROLE_ADMIN")
    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteCenter(@RequestParam Long id) {
        this.centerService.deleteCenterById(id);
        return ResponseEntity.ok().build();
    }
}

