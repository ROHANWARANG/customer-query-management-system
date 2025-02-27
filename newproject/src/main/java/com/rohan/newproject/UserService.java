package com.rohan.newproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Signup: Create a new user
    public boolean registerUser(User user) {
        // Check if email already exists
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            return false; // Email already registered
        }
        userRepository.save(user);
        return true;
    }

    // Login: Authenticate user
    public boolean authenticateUser(String email, String password) {
        Optional<User> userOpt = userRepository.findByEmail(email);
        return userOpt.isPresent() && userOpt.get().getPassword().equals(password);
    }
}
