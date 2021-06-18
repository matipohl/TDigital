package Pokemon;
import java.util.ArrayList;

public abstract class AbstractPokemon implements PokemonInterface {

	ArrayList<Pokemon> pokemones = new ArrayList<>();

	@Override
	public Pokemon createPokemon(String name, int health, String type) {
		return new Pokemon(name, health,type);
	}

	@Override
	public String pokemonInfo(Pokemon pokemon) {
		return pokemon.getName() + " posee " + pokemon.getHealth() + " y es de tipo " + pokemon.getType();
	}
}
