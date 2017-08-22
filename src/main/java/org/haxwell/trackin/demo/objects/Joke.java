package org.haxwell.trackin.demo.objects;

public class Joke {

	public String getJoke() {
		return joke;
	}
	
	public void setJoke(String joke) {
		this.joke = joke;
	}

	public String getPunchline() {
		return punchline;
	}
	
	public void setPunchline(String punchline) {
		this.punchline = punchline;
	}
	
	public Joke(String joke, String punchline) {
		this.joke = joke;
		this.punchline = punchline;
	}

	private String joke;
	private String punchline;
}
