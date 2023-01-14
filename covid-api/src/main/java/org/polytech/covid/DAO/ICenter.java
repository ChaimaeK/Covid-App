package org.polytech.covid.DAO;

import org.polytech.covid.Entities.Center;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICenter extends JpaRepository<Center, Long> {
    List<Center> findAllByNameContaining(String name);
}
