package DyD;

public class Wizard extends Human {

	public Wizard(){
		setHp(50);
		setInte(8);
	}

	public void heal(Human ally){
		ally.setHp(ally.getHp()+getInte());
	}

	public void fireball (Human enemy){
		enemy.setHp(enemy.getHp()-getStr()*3);
	}
}
