package zoo;

public class Gorilla extends Mammal{

	public void throwSomething(){
		int energy = getEnergy();
		if(energy <= 0){
			sleep();
		} else{
			manageEnergy(-5);
			System.out.println("El gorila lanzo algo");
		}
	}

	public void eatBananas(){
		int energy = getEnergy();
		if(energy <= 0){
			sleep();
		} else {
			manageEnergy(10);
			System.out.println("El gorila come banana");
		}
	}

	public void climb(){
		int energy = getEnergy();
		if(energy <= 0){
			sleep();
		} else {
			manageEnergy(-10);
			System.out.println("El gorila trepa");
		}
	}

	public void sleep(){
		this.setEnergy(100);
		System.out.println("El gorila está durmiendo");
	}

}
