package com.wang.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wang.service.AdminService;

/**
 * @author SurpriseWang
 * @date 2019年9月3日上午10:07:11
 */
@Controller
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	@ResponseBody
	@RequestMapping("/queryLoginAdmin.action")
	public Boolean queryLoginAdmin(String adminname, String password) {
		Boolean admin = adminService.queryAdmin(adminname, password);
		if (admin) {
			return true;
		} else {
			return false;
		}
	}
}
