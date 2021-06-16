package DyD;

public class Samurai extends Human{
	private static int numOfSamurai = 0;
	public Samurai(){
		setHp(200);
		numOfSamurai++;
	}

	public void deathBlow(Human enemy){
		enemy.setHp(0);
		setHp(getHp()/2);
	}

	public void medidate(){
		setHp(getHp()+getHp()/2);
	}

	public void howMany(){
		System.out.println("La cantidad de Samurais es: " + numOfSamurai);
	}

}
