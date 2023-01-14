package org.polytech.covid.Entities;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data @AllArgsConstructor
public class JwtResponse {
    private User user;
    private String jwtToken;
}
