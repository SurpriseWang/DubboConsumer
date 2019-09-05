package com.wang.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wang.pojo.Banner;
import com.wang.service.BannerService;

/**
 * @author SurpriseWang
 * @date 2019年8月30日下午7:13:28
 */
@Controller
public class BannerController {
	@Autowired
	private BannerService bannerService;
		@ResponseBody
		@RequestMapping("/queryAllBanner.action")
		public List<Banner> queryAllBanner() {
			List<Banner> banners = bannerService.queryAllBanner();
			return banners;
		}
}
