package com.wang.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wang.pojo.Picture;
import com.wang.service.PictureService;

/**
 * @author SurpriseWang
 * @date 2019年9月3日上午10:07:11
 */
@Controller
public class PictureController {
	@Autowired
	private PictureService pictureService;
	
	@ResponseBody
	@RequestMapping("/queryPicture.action")
	public List<Picture> queryLoginAdmin(Integer categoryId) {
		List<Picture> pictures = pictureService.queryPictures(categoryId);
		return pictures;
	}
}
