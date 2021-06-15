package zoo;

public class Mammal {
	private int energy;

	public Mammal(){

	}

	public int getEnergy() {
		return energy;
	}

	public void setEnergy(int energy) {
		this.energy = energy;
	}

	public void displayEnergy(){
		System.out.println("La energía del animal es de " + getEnergy());
	}

	public void manageEnergy(int amount){
		setEnergy(energy+amount);
	}

	public void sleep(){
		setEnergy(100);
		System.out.println("El animal está durmiendo");
	}
}
