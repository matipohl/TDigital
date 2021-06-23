package Calculadora;

public class CalcTest {
	public static void main(String[] args) {
		Calculadora c1 = new Calculadora();

		c1.setValor1(10.5);
		c1.setOperación("+");
		c1.setValor2(5.2);
		c1.performOperation();
		c1.getResult();
	}
}
