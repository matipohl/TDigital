import java.util.HashMap;
import java.util.Set;


public class MapaHashmatique {
	HashMap<String,String> track = new HashMap<>();

	public static void main(String[] args) {
		MapaHashmatique mh = new MapaHashmatique();

		mh.addSong("makarena", "Dale a tu cuerpo alegría makarena");
		mh.addSong("mayonesa", "Mayoooonesa, ella asdadsadas como haciendo mayonesa");
		mh.addSong("Rompe", "Rompe rompe rompe asdasda rompe rompe rompe");
		mh.addSong("Perritos", "Yo tenía 10 perritos, yo tenía 10 perritos...");

		System.out.println(mh.getSong("makarena"));

		mh.printSongs();
	}

	void addSong(String title, String lyrics){
		track.put(title,lyrics);
	}

	String getSong(String title){
		return track.get(title);
	}

	void printSongs(){
		Set<String> keys = track.keySet();

		for(String key : keys){
			System.out.println(key +": " +  track.get(key));
		}
	}
}
