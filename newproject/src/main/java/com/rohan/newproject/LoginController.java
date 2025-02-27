package com.rohan.newproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "*")
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Map<String, Boolean>> login(@RequestBody User user) {
        boolean success = userService.authenticateUser(user.getEmail(), user.getPassword());
        return ResponseEntity.ok(Collections.singletonMap("success", success));
    }
}
