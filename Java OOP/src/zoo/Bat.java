package zoo;

public class Bat extends Mammal {

	public Bat (){
		setEnergy(300);
	}

	public void fly(){
		int energy = getEnergy();
		if(energy < 0){
			sleep();
		} else{
			manageEnergy(-50);
			System.out.println("zpzpzpzpzpzpzpzp");
		}
	}

	public void eatHumans(){
		int energy = getEnergy();
		if(energy < 0){
			sleep();
		} else{
			manageEnergy(25);
			System.out.println("bueno, no importa");
		}
	}

	public void attackTown(){
		int energy = getEnergy();
		if(energy < 0){
			sleep();
		} else{
			manageEnergy(-100);
			System.out.println("fshhhhshshshshshshshs");
		}
	}
}
