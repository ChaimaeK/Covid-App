package org.polytech.covid.Repositories;

import org.polytech.covid.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    List<User> findByCenter_IdCenter(long centerId);
}
