package com.service;

import com.pojo.User;

import java.util.List;

public interface UserService {
    int addUser(User user);
    int deleteUser(int userid);
    User findUser(String userName);
    List<User> queryAllUsers();
}
