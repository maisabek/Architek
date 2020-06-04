package com.construction_main.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.construction_main.model.user;
import java.util.*;
@Repository
public interface userRepository extends MongoRepository<user,String> {
    Optional<user> findById(String id);
    Optional<user> findByEmail(String id);
    void deleteByEmail(String email);
}
