package DyD;

public class HumanTest {

	public static void main(String[] args) {
		Human h1 = new Human();
		Human h2 = new Human();

		h1.attack(h2);
		System.out.println(h2.getHp());
		System.out.println("________________________");
		Samurai s1 = new Samurai();
		Samurai s2 = new Samurai();
		System.out.println(s1.getHp());
		s1.deathBlow(h1);
		System.out.println(s1.getHp());
		System.out.println(h1.getHp());
		s1.medidate();
		System.out.println(s1.getHp());
		s1.howMany();
	}

}
