package com.controller;

import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class LoginController {
    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    public String login(HttpServletRequest request, HttpServletResponse response){
        return "logintest";
    }

    @RequestMapping("/testLogin")
    public String testLogin(HttpServletRequest request,HttpServletResponse response){
        String inputUsername = request.getParameter("inputUsername");
        String inputPassword = request.getParameter("inputPassword");
        System.out.println("Got request!inputUsername="+inputUsername+",inputPassword="+inputPassword);
//        User checkedUser = userService.findUser(inputUsername);
////        if(inputPassword.equals(checkedUser.getUserPassword())){
////            request.getSession().setAttribute("loginUser",checkedUser);
////            return "manage";
////        }
////        else
////            return "error";
        return "manage";
    }
}
