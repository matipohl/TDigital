public class PitagorasTest {
	public static void main(String[] args) {
		Pitagoras pit = new Pitagoras();
		double hipotenusa;

		hipotenusa = pit.calcularHipotenusa(3,4);
		System.out.println("La hipotenusa es: " + hipotenusa);
	}
}
