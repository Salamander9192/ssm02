package com.controller;

import com.pojo.User;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/alluser")
    public String list(Model model){
        List<User> list = userService.queryAllUsers();
        model.addAttribute("list",list);
        return "allUser";
    }

    @RequestMapping("/addPaper")
    public String addPaper(User user){
        userService.addUser(user);
        return "redirect:/user/alluser";
    }

    @RequestMapping(value = "/del",method = RequestMethod.GET)
    public String deletePaper(int id){
        userService.deleteUser(id);
        return "redirect:/user/alluser";
    }
}
