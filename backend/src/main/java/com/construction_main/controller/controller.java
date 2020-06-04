package com.construction_main.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.construction_main.services.service;
import com.construction_main.model.user;
import com.construction_main.Repository.userRepository;
import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api/con")
public class controller {

    @Autowired
    private service service;

    @Autowired
    private userRepository userRepository;

    @PostMapping("/Create")
    public ResponseEntity<user> createuser(@RequestBody user user){
        try {
            user _tutorial = userRepository.save(new user(user.getId(),user.getName(),user.getEmail(),user.getPassword(),user.getConpass()));
            return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @Autowired
    @GetMapping("/allUser")
    public ResponseEntity<List<user>> displaylist(){
        List<user> result=service.findAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping("/updateData/{email}")
    public ResponseEntity<user> updateTutorial(@PathVariable("email") String email, @RequestBody user users) {
        Optional<user> tutorialData = userRepository.findByEmail(email);

        if (tutorialData.isPresent()) {
            user user = tutorialData.get();
            user.setName(users.getName());
            user.setEmail(users.getEmail());
            user.setPassword(users.getPassword());
            user.setConpass(users.getConpass());
            return new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delet")
    public ResponseEntity<HttpStatus> deleteTutorial(@RequestBody String email){
        try {
            userRepository.deleteByEmail(email);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }


}
