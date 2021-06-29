import java.util.HashMap;
import java.util.Set;

public class MapaHashmatique {
	HashMap<String,String> track = new HashMap<>();

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
