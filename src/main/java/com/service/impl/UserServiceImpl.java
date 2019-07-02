package com.service.impl;

import com.dao.UserDao;
import com.pojo.User;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public int addUser(User user) {
        return userDao.addUser(user);
    }

    @Override
    public int deleteUser(int userid) {
        return userDao.deleteUser(userid);
    }

    @Override
    public User findUser(String userName){
        return userDao.findUser(userName);
    }

    @Override
    public List<User> queryAllUsers() {
        return userDao.queryAllUsers();
    }
}
