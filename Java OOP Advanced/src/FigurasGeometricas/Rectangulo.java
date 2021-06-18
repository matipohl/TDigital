package FigurasGeometricas;

public class Rectangulo {

	private double ladoA;
	private double ladoB;

	public Rectangulo(double ladoA, double ladoB) {
		this.ladoA = ladoA;
		this.ladoB = ladoB;
	}

	public double getLadoA() {
		return ladoA;
	}

	public void setLadoA(double ladoA) {
		this.ladoA = ladoA;
	}

	public double getLadoB() {
		return ladoB;
	}

	public void setLadoB(double ladoB) {
		this.ladoB = ladoB;
	}

	public double calcularArea(){
		return ladoA*ladoB;
	}

	public double calcularPerimetro(){
		return 2*(ladoA+ladoB);
	}

	@Override
	public String toString(){
		return "Area: " + calcularArea() +"\n"+
				"Perímetro: " + calcularPerimetro();
	}
}
