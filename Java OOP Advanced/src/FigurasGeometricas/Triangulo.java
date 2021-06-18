package FigurasGeometricas;

public class Triangulo {

	private double base;


	public Triangulo(double base) {
		this.base = base;
	}

	public double getBase() {
		return base;
	}

	public void setBase(double base) {
		this.base = base;
	}

	public double calcularArea(){
		return (Math.pow(base,2)*Math.sqrt(3))/4;
	}

	public double calcularPerimetro(){
		return 3*base;
	}

	@Override
	public String toString(){
		return "Area: " + calcularArea() +"\n"+
		"Perímetro: " + calcularPerimetro();
	}
}
