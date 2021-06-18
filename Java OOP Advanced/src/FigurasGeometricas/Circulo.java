package FigurasGeometricas;

public class Circulo {

	private int radio;
	private final double pi = 3.1415926535;

	public double  calcularArea(){
		return Math.pow(radio,2)*pi;
	}

	public double calcularPerimetro(){
		return 2*pi*radio;
	}

	public int getRadio() {
		return radio;
	}

	public void setRadio(int radio) {
		this.radio = radio;
	}

	public Circulo(int radio){
		this.radio = radio;
	}

	@Override
	public String toString(){
		return "Area: " + calcularArea() +"\n"+
				"Perímetro: " + calcularPerimetro();
	}

}
