package org.polytech.covid.Entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "role", schema = "covid")
public class Role {
    @Id
    private String roleName;
    private String roleDescription;
}
