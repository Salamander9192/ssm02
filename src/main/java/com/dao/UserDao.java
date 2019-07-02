package com.dao;

import com.pojo.User;

import java.util.List;

public interface UserDao {
    int addUser(User user);
    int deleteUser(int userid);
    User findUser(String userName);
    List<User> queryAllUsers();
}
