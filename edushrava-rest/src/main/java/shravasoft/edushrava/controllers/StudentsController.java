package shravasoft.edushrava.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class StudentsController {
    @GetMapping("/students")
    public List<Object> GetAll() {
        return new ArrayList<>();
    }
}
