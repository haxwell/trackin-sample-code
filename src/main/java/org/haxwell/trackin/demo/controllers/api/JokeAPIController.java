package org.haxwell.trackin.demo.controllers.api;

import org.haxwell.trackin.demo.objects.Joke;
import org.haxwell.trackin.demo.services.JokeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = { "/api/jokes" })
public class JokeAPIController {

	private final JokeService js;
	
	@Autowired
	JokeAPIController(JokeService js) {
		this.js = js;
	}
	
	@RequestMapping(value = { "/{jokeId}" })
	public Joke get(@PathVariable Integer jokeId) {
		return js.getJoke(jokeId);
	}
}
