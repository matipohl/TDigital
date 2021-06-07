import java.lang.Math;

public class Pitagoras {
	public double calcularHipotenusa(float catA, float catB){
		double c;
		c = Math.sqrt(Math.pow(catA,2) + Math.pow(catB,2));

		return c;
	}
}
