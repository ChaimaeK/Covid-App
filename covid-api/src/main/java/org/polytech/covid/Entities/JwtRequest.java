package org.polytech.covid.Entities;

import lombok.Data;

@Data
public class JwtRequest {
    private String userName;
    private String userPassword;
}
