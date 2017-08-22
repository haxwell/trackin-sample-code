package org.haxwell.trackin.demo;

import org.springframework.boot.SpringApplication;	
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;

import org.haxwell.trackin.demo._servletFilters.CorsFilter;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	@Bean
	public FilterRegistrationBean corsFilter() {
		FilterRegistrationBean frb = new FilterRegistrationBean();
		frb.setFilter(new CorsFilter());
		frb.setOrder(Ordered.HIGHEST_PRECEDENCE);
		return frb;	
	}	
}
