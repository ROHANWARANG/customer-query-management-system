package com.rohan.newproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QueryService {

    @Autowired
    private QueryRepository queryRepository;

    public Query saveQuery(Query query) {
        return queryRepository.save(query); // ✅ Saving query in database
    }
}
