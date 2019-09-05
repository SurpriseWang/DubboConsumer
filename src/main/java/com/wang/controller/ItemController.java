package com.wang.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wang.service.ItemsService;
import com.wang.vo.ItemVo;

/**
 * @author SurpriseWang
 * @date 2019年9月4日下午6:11:05
 */
@Controller
public class ItemController {
	@Autowired
	private ItemsService itemservice;
	
	@ResponseBody
	@RequestMapping("/queryItem.action")
	public ItemVo queryItemById(Integer Id) {
		ItemVo itemVo = itemservice.queryItems(Id);
		return itemVo;
	}
}
