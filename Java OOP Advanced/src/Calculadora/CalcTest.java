package Calculadora;

public class CalcTest {
	public static void main(String[] args) {
		Calculadora c1 = new Calculadora();

		c1.performOperation("10.5");
		c1.performOperation("+");
		c1.performOperation("5.2");
		c1.performOperation("*");
		c1.performOperation("10");
		c1.performOperation("=");


	}
}
