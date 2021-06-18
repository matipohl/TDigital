package FigurasGeometricas;

import java.util.Scanner;

public class Test {
	public static void main(String[] args) {

		Circulo c1 = new Circulo(5);
		Circulo c2 = new Circulo(7);
		Rectangulo r1 = new Rectangulo(2,4);
		Rectangulo r2 = new Rectangulo(3,6);
		Triangulo t1 = new Triangulo(4);
		Triangulo t2 = new Triangulo(2);

		Scanner myObj = new Scanner(System.in);

		do {
			System.out.println("1. Circulo");
			System.out.println("2. Rectángulo");
			System.out.println("3. Triángulo");
			System.out.print("Ingrese la opción:");
			String option = myObj.nextLine();

			switch (Integer.parseInt(option)) {
				case 1:
					System.out.println("______________________");
					System.out.println(c1.toString());
					System.out.println(c2.toString());
					System.out.println("______________________");
					break;
				case 2:
					System.out.println("______________________");
					System.out.println(r1.toString());
					System.out.println(r2.toString());
					System.out.println("______________________");
					break;
				case 3:
					System.out.println("______________________");
					System.out.println(t1.toString());
					System.out.println(t2.toString());
					System.out.println("______________________");
					break;
			}
		}while(true);


















	}
}
