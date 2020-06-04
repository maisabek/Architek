package com.construction_main.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.construction_main.model.user;
import java.util.*;
import com.construction_main.Repository.userRepository;
@Service
public class service {
    @Autowired
    private  userRepository userRepository;
    public List<user> findAll(){
        return userRepository.findAll();
    }
}
