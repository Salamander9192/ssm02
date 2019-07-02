package com.controller;

import com.pojo.User;
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
        String userName = request.getParameter("userName");
        String userPassword = request.getParameter("userPassword");
        User checkedUser = userService.findUser(userName);
        if(userPassword.equals(checkedUser.getUserPassword())){
            request.getSession().setAttribute("loginUser",checkedUser);
            return "welcome";
        }
        else
            return "error";
    }
}
