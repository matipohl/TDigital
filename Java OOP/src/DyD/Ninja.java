package DyD;

public class Ninja extends Human{

	public Ninja(){
		setSte(10);
	}

	public void stealth(Human enemy){
		enemy.setHp(enemy.getHp()-getSte());
		setHp(getHp()+getSte());
	}

	public void runAway(){
		setHp(getHp()-10);
	}
}

