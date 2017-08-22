package org.haxwell.trackin.demo.services;

import java.util.ArrayList;

import org.haxwell.trackin.demo.objects.Joke;
import org.springframework.stereotype.Service;

@Service
public class JokeService {

	ArrayList<Joke> list;
	
	public JokeService() {
		this.list =	new ArrayList<>();
		
		this.list.add(new Joke("Where should a 500 pound alien go?", "On a diet "));
		this.list.add(new Joke("What did one toilet say to the other?", "You look a bit flushed. "));
		this.list.add(new Joke("Why did the picture go to jail?", "Because it was framed. "));
		this.list.add(new Joke("What did one wall say to the other wall?", "I'll meet you at the corner. "));
		this.list.add(new Joke("What did the paper say to the pencil?", "Write on! "));
		this.list.add(new Joke("What do you call a boy named Lee that no one talks to?", "Lonely "));
		this.list.add(new Joke("What gets wetter the more it dries?", "A towel. "));
		this.list.add(new Joke("Why do bicycles fall over?", "Because they are two-tired! "));
		this.list.add(new Joke("Why do dragons sleep during the day?", "So they can fight knights! "));
		this.list.add(new Joke("What did Cinderella say when her photos did not show up?", "Someday my prints will come! "));
		this.list.add(new Joke("Why was the broom late?", "It over swept! "));
		this.list.add(new Joke("What part of the car is the laziest?", "The wheels, because they are always tired! "));
		this.list.add(new Joke("What did the stamp say to the envelope?", "Stick with me and we will go places! "));
		this.list.add(new Joke("What is blue and goes ding dong?", "An Avon lady at the North Pole! "));
		this.list.add(new Joke("We're you long in the hospital?", "No, I was the same size I am now! "));
		this.list.add(new Joke("Why couldn't the pirate play cards?", "Because he was sitting on the deck! "));
		this.list.add(new Joke("What did the laundryman say to the impatient customer?", "Keep your shirt on! "));
		this.list.add(new Joke("What's the difference between a TV and a newspaper?", "Ever tried swatting a fly with a TV? "));
		this.list.add(new Joke("What did one elevator say to the other elevator?", "I think I'm coming down with something! "));
		this.list.add(new Joke("Why was the belt arrested?", "Because it held up some pants! "));
		this.list.add(new Joke("Why was everyone so tired on April 1st?", "They had just finished a March of 31 days. "));
		this.list.add(new Joke("Which hand is it better to write with?", "Neither, it's best to write with a pen! "));
		this.list.add(new Joke("Why can't your nose be 12 inches long?", "Because then it would be a foot! "));
		this.list.add(new Joke("What makes the calendar seem so popular?", "Because it has a lot of dates! "));
		this.list.add(new Joke("Why did Mickey Mouse take a trip into space?", "He wanted to find Pluto! "));
		this.list.add(new Joke("What is green and has yellow wheels?", "Grass…..I lied about the wheels! "));
		this.list.add(new Joke("What is it that even the most careful person overlooks?", "Her nose! "));
		this.list.add(new Joke("Did you hear about the robbery last night?", "Two clothes pins held up a pair of pants! "));
		this.list.add(new Joke("Why do you go to bed every night?", "Because the bed won't come to you! "));
		this.list.add(new Joke("Why did Billy go out with a prune?", "Because he couldn't find a date! "));
		this.list.add(new Joke("Why do eskimos do their laundry in Tide?", "Because it's too cold out-tide! "));
		this.list.add(new Joke("How do you cure a headache?", "Put your head through a window and the pane will just disappear! "));
		this.list.add(new Joke("What has four wheels and flies?", "A garbage truck! "));
		this.list.add(new Joke("What kind of car does Mickey Mouse's wife drive?", "A minnie van! "));
		this.list.add(new Joke("Why don't traffic lights ever go swimming?", "Because they take too long to change! "));
		this.list.add(new Joke("Why did the man run around his bed?", "To catch up on his sleep! "));
		this.list.add(new Joke("Why did the robber take a bath before he stole from the bank?", "He wanted to make a clean get away! "));
		this.list.add(new Joke("What is green and has yellow wheels?", "Grass…..I lied about the wheels! "));
		this.list.add(new Joke("What is it that even the most careful person overlooks?", "Her nose! "));
		this.list.add(new Joke("Did you hear about the robbery last night?", "Two clothes pins held up a pair of pants! "));
		this.list.add(new Joke("Why do you go to bed every night?", "Because the bed won't come to you! "));
		this.list.add(new Joke("Why did Billy go out with a prune?", "Because he couldn't find a date! "));
		this.list.add(new Joke("Why do eskimos do their laundry in Tide?", "Because it's too cold out-tide! "));
		this.list.add(new Joke("How do you cure a headache?", "Put your head through a window and the pane will just disappear! "));
		this.list.add(new Joke("What has four wheels and flies?", "A garbage truck! "));
		this.list.add(new Joke("What kind of car does Mickey Mouse's wife drive?", "A minnie van! "));
		this.list.add(new Joke("Why don't traffic lights ever go swimming?", "Because they take too long to change! "));
		this.list.add(new Joke("Why did the man run around his bed?", "To catch up on his sleep! "));
		this.list.add(new Joke("Why did the robber take a bath before he stole from the bank?", "He wanted to make a clean get away! "));
		this.list.add(new Joke("What did Cinderella say when her photos did not show up?", "Someday my prints will come! "));
		this.list.add(new Joke("Why was the broom late?", "It over swept! "));
	}
	
	public Joke getJoke(int index) {
		return list.get(index);
	}
}
