package com.rohan.newproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/signup")
@CrossOrigin(origins = "*")
public class SignupController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        boolean success = userService.registerUser(user);
        if (success) {
            // Return JSON { "success": true }
            return ResponseEntity.ok("{\"success\": true}");
        } else {
            // Return JSON { "success": false }
            return ResponseEntity.badRequest().body("{\"success\": false}");
        }
    }
}