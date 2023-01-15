package org.polytech.covid.Controllers;

        import org.polytech.covid.Entities.VaccinationCenter;
        import org.polytech.covid.Services.VaccinationCenterService;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.security.access.prepost.PreAuthorize;
        import org.springframework.web.bind.annotation.*;

        import javax.annotation.security.RolesAllowed;
        import java.util.List;
        import java.util.Optional;

//@CrossOrigin("*")
@RestController
//@RequestMapping("/public")
public class VaccinationCenterController {

    public final VaccinationCenterService vaccinationCenterService;

    @Autowired
    public VaccinationCenterController(VaccinationCenterService vaccinationCenterService) {
        this.vaccinationCenterService = vaccinationCenterService;
    }

    @GetMapping("/public/centers")
    public ResponseEntity<List<VaccinationCenter>> getAllCenters(){
        return new ResponseEntity<>(vaccinationCenterService.findAllCenters(), HttpStatus.OK);
    }

    @GetMapping("/public/centersByCity")
    public ResponseEntity<List<VaccinationCenter>> getCentersByCity(@RequestParam final String city){
        return new ResponseEntity<>(vaccinationCenterService.findCentersByCity(city), HttpStatus.OK);
    }

    @GetMapping("/centerById")
    @PreAuthorize("hasAnyRole('Admin','Medecin')")
    public ResponseEntity<VaccinationCenter> getCenterById(@RequestParam final long id){
        Optional<VaccinationCenter> center = vaccinationCenterService.findById(id);
        if (center.isPresent()) {
            return new ResponseEntity<>(center.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
