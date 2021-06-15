package zoo;

public class Mammal {
	private int energy;

	public Mammal(){
		energy = 100;
	}

	public int getEnergy() {
		return energy;
	}

	public void setEnergy(int energy) {
		if(energy > 100){
			this.energy = 100;
		} else{
		this.energy = energy;
		}
	}

	public void displayEnergy(){
		System.out.println("La energía del animal es de " + getEnergy());
	}

	public void manageEnergy(int amount){
		setEnergy(energy+amount);
	}

}
