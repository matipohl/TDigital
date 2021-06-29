public class MhTest {
	public static void main(String[] args) {
		MapaHashmatique mh = new MapaHashmatique();
		MapaHashmatique premiumtrack = new MapaHashmatique();

		mh.addSong("makarena", "Dale a tu cuerpo alegría makarena");
		mh.addSong("mayonesa", "Mayoooonesa, ella asdadsadas como haciendo mayonesa");
		mh.addSong("Rompe", "Rompe rompe rompe asdasda rompe rompe rompe");
		mh.addSong("Perritos", "Yo tenía 10 perritos, yo tenía 10 perritos...");

		premiumtrack.addSong("asddasdas","asdasdad");

		System.out.println(mh.getSong("makarena"));

		mh.printSongs();

	}
}
