package org.haxwell.trackin.demo.controllers.ui;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value={"/"})
public class HomeController {

	@Autowired
	HomeController() { 
		 
	}

	@GetMapping
	public String getTemplateUIName(HttpServletRequest request, Model model) {
//		HomeObject homeObj = new HomeObject();
//
//		homeObj.setLoggedIn(!(request.getRemoteUser() == null));
//		model.addAttribute("homeObj", homeObj);
		
		return "home";
	}

//	public class HomeObject {
//
//		private boolean loggedIn;
//
//		public boolean getLoggedIn() {
//			return loggedIn;
//		}
//
//		public void setLoggedIn(boolean isLoggedIn) {
//			this.loggedIn = isLoggedIn;
//		}
//
//		public HomeObject() {
//			
//		} 
//		
//	}
}