package org.polytech.covid.Entities;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    private String userName;
    private String userFirstName;
    private String userLastName;
    private String userPassword;
    @ManyToOne @JoinColumn(name = "center")
    private VaccinationCenter center;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "USER_ROLE",
            joinColumns = {
                    @JoinColumn(name = "USER_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "ROLE_ID")
            }
    )
    private Set<Role> role;
    @Value("${true}")
    private boolean activated;
}