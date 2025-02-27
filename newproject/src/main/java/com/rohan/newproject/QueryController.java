package com.rohan.newproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/submit-query")
@CrossOrigin(origins = "*")
public class QueryController {

    @Autowired
    private QueryService queryService;

    @PostMapping
    public ResponseEntity<?> submitQuery(@RequestBody Query query) {
        query.setStatus("Pending"); // ✅ Ensure status is set before saving
        Query savedQuery = queryService.saveQuery(query);
        return ResponseEntity.ok("{\"success\": true, \"id\": " + savedQuery.getId() + "}");
    }
}