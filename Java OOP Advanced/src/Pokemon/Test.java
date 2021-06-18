package Pokemon;

import java.util.ArrayList;

public class Test {
	public static void main(String[] args) {

		Pokedex pokedex = new Pokedex();
		Pokemon bulb;
		Pokemon charm;

		bulb = pokedex.createPokemon("Bulbasaur", 100, "Hierba");
		charm = pokedex.createPokemon("Charmander", 90, "Fuego");
		pokedex.listPokemon();

		bulb.attackPokemon(charm);
		System.out.println(pokedex.pokemonInfo(bulb));
		System.out.println(pokedex.pokemonInfo(charm));

	}
}
