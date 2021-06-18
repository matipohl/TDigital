package Pokemon;

import java.util.ArrayList;

public class Pokedex extends AbstractPokemon{

	@Override
	public void listPokemon() {
		int myPokemon = Pokemon.getCount();
		System.out.println("Tengo " + myPokemon + " pokemones");
	}
}
