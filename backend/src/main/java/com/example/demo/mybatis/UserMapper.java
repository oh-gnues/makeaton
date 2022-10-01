package com.example.demo.mybatis;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.UserDO;

@Mapper
public interface UserMapper {
    public List<UserDO> getUsers();
}
