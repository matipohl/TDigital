package Calculadora;

public class Calculadora implements java.io.Serializable {
	private String operación;
	private double valor1;
	private double valor2;

	public Calculadora() {
	}

	public String getOperación() {
		return operación;
	}

	public void setOperación(String operación) {
		this.operación = operación;
	}

	public double getValor1() {
		return valor1;
	}

	public void setValor1(double valor1) {
		this.valor1 = valor1;
	}

	public double getValor2() {
		return valor2;
	}

	public void setValor2(double valor2) {
		this.valor2 = valor2;
	}

	public double performOperation(){
		if(operación == "+")
			return valor1+valor2;
		else
			return valor1-valor2;
	}

	public void getResult(){
		System.out.println(performOperation());
	}
}
