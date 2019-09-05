package com.wang.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wang.pojo.Category;
import com.wang.service.CategoryService;

/**
 * @author SurpriseWang
 * @date 2019年8月30日上午9:18:33
 */
@Controller
public class CategoryController {
	@Autowired
	private CategoryService categoryService;

	@ResponseBody
	@RequestMapping("/queryCategorys.action")
	public List<Category> queryItems() {
		List<Category> categorys = categoryService.queryAllCategorys();
		return categorys;
	}

}
