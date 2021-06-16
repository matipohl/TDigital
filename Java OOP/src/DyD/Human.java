package DyD;

public class Human {

	private int str;
	private int inte;
	private int ste;
	private int hp;

	public Human() {
		hp = 100;
		str = 3;
		inte = 3;
		ste = 3;

	}

	public int getStr() {
		return str;
	}

	public void setStr(int str) {
		this.str = str;
	}

	public int getInte() {
		return inte;
	}

	public void setInte(int inte) {
		this.inte = inte;
	}

	public int getSte() {
		return ste;
	}

	public void setSte(int ste) {
		this.ste = ste;
	}

	public int getHp() {
		return hp;
	}

	public void setHp(int hp) {
		this.hp = hp;
	}

	public void attack(Human enemy){
		enemy.setHp(enemy.getHp()-getStr());
	}
}
