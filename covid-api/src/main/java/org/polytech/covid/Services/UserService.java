package org.polytech.covid.Services;

import org.polytech.covid.Entities.Reservation;
import org.polytech.covid.Entities.Role;
import org.polytech.covid.Entities.User;
import org.polytech.covid.Entities.VaccinationCenter;
import org.polytech.covid.Repositories.ReservationRepository;
import org.polytech.covid.Repositories.RoleRepository;
import org.polytech.covid.Repositories.UserRepository;
import org.polytech.covid.Repositories.VaccinationCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userDao;

    @Autowired
    private RoleRepository roleDao;

    @Autowired
    private VaccinationCenterRepository centerDao;

    @Autowired
    private ReservationRepository reservationDao;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin role");
        roleDao.save(adminRole);

        Role superRole = new Role();
        superRole.setRoleName("Super_Admin");
        superRole.setRoleDescription("Super Admin role");
        roleDao.save(superRole);

        Role medRole = new Role();
        medRole.setRoleName("Medecin");
        medRole.setRoleDescription("Medecin role");
        roleDao.save(medRole);

        VaccinationCenter center1 = new VaccinationCenter();
        center1.setIdCenter(1);
        center1.setName("HCL");
        center1.setAddress("3 Quai des Célestins");
        center1.setCity("Lyon");
        center1.setPostalCode(69002);
        centerDao.save(center1);

        VaccinationCenter center2 = new VaccinationCenter();
        center2.setIdCenter(2);
        center2.setName("Hôpital Pierre Wertheimer");
        center2.setAddress("59 Bd Pinel");
        center2.setCity("Bron");
        center2.setPostalCode(69500);
        centerDao.save(center2);

        VaccinationCenter center3 = new VaccinationCenter();
        center3.setIdCenter(3);
        center3.setName("CHR Metz - Thionville");
        center3.setAddress("1 All. du Château");
        center3.setCity("Metz");
        center3.setPostalCode(57530);
        centerDao.save(center3);

        User adminUser = new User();
        adminUser.setUserName("admin123");
        adminUser.setUserPassword(getEncodedPassword("admin@pass"));
        adminUser.setUserFirstName("admin");
        adminUser.setUserLastName("adminLast");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        adminUser.setCenter(center1);
        userDao.save(adminUser);

        User superUser = new User();
        superUser.setUserName("super123");
        superUser.setUserPassword(getEncodedPassword("super@pass"));
        superUser.setUserFirstName("super");
        superUser.setUserLastName("superLast");
        Set<Role> superRoles = new HashSet<>();
        superRoles.add(superRole);
        superUser.setRole(superRoles);
        userDao.save(superUser);

        User medUser = new User();
        medUser.setUserName("medecin123");
        medUser.setUserPassword(getEncodedPassword("medecin@pass"));
        medUser.setUserFirstName("medecin");
        medUser.setUserLastName("medecinLast");
        Set<Role> medRoles = new HashSet<>();
        medRoles.add(medRole);
        medUser.setRole(medRoles);
        medUser.setCenter(center2);
        userDao.save(medUser);

        User medUser1 = new User();
        medUser1.setUserName("medecin1234");
        medUser1.setUserPassword(getEncodedPassword("medecin1@pass"));
        medUser1.setUserFirstName("medecin1");
        medUser1.setUserLastName("medecin1Last");
        Set<Role> medRoles1 = new HashSet<>();
        medRoles1.add(medRole);
        medUser1.setRole(medRoles1);
        medUser1.setCenter(center1);
        userDao.save(medUser1);
    }

    public User registerNewUser(User user) {
        Role role = roleDao.findById("User").get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRole(userRoles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));
        return userDao.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }

    public List<User> getUsers(long centerId){
        return userDao.findByCenter_IdCenter(centerId);
    }
}
