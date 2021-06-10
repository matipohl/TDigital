import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Random;

public class PuzzleJava {
	public static void main(String[] args) {
		PuzzleJava pj = new PuzzleJava();
		ArrayList<Integer> result1;
		ArrayList<String> result2;
		ArrayList<Integer> result3;
		ArrayList<Integer> result4;

		//Ejercicio 1
		System.out.println("_______________________________");
		result1 = pj.printAndReturnGreaterThan10(new int[]{3,5,1,2,7,9,8,13,25,32});
		System.out.println(result1);
		System.out.println("_______________________________");

		//Ejercicio 2
		System.out.println("_______________________________");
		result2 = pj.shuffleAndReturnGreaterThan5(new String[] {"Nancy", "Jinichi", "Fujibayashi", "Momochi", "Ishikawa"});
		System.out.println(result2);
		System.out.println("_______________________________");

		//Ejercicio 3
		System.out.println("_______________________________");
		pj.alphabet();
		System.out.println("_______________________________");

		//Ejercicio 4
		System.out.println("_______________________________");
		result3 = pj.randomValuesBetweenRange();
		System.out.println(result3);
		System.out.println("_______________________________");

		//Ejercicio 5
		System.out.println("_______________________________");
		result4 = pj.orderedRandomValues(result3);
		System.out.println(result4);
		System.out.println("Primer número: " + result4.get(0));
		System.out.println("_______________________________");

		//Ejercicio 6
		System.out.println("_______________________________");
		System.out.println(pj.createRandomString());
		System.out.println("_______________________________");

		//Ejercicio 7
		System.out.println("_______________________________");
		System.out.println(pj.createArrayRandomString());
		System.out.println("_______________________________");


	}

	ArrayList<Integer> printAndReturnGreaterThan10(int[] arreglo){
		ArrayList<Integer> nuevoArreglo = new ArrayList<>();
		for(int i = 0; i < arreglo.length; i++){
			System.out.println("arreglo["+i+"]:" + arreglo[i]);
			if(arreglo[i]>10){
				nuevoArreglo.add(arreglo[i]);
			}
		}
		return nuevoArreglo;
	}

	ArrayList<String> shuffleAndReturnGreaterThan5(String[] nombres){
		ArrayList<String> nuevoArreglo = new ArrayList<>();
		Collections.shuffle(Arrays.asList(nombres));
		for(String item : nombres){
			System.out.println(item);
			if(item.length() > 5){
				nuevoArreglo.add(item);
			}
		}
		return nuevoArreglo;
	}


	void alphabet(){
		ArrayList<Character> alphabet = new ArrayList<>();
		char[] alphabetC = "abcdefghijklmnopqrstuvwxyz".toCharArray();
		char[] vocales = "aeiou".toCharArray();
		for(char element : alphabetC){
			alphabet.add(element);
		}
		System.out.println("Alfabeto ordenado: " + alphabet);
		Collections.shuffle(alphabet);
		System.out.println("Alfabeto desordenado: " + alphabet);
		System.out.println("Primer elemento: " + alphabet.get(0));
		System.out.println("Segundo elemento: " +alphabet.get(alphabet.size() - 1));

		for(char vocal : vocales){
			if(alphabet.get(0) == vocal){
				System.out.println("Soy una vocal y estoy en el primer lugar");
				break;
			}
		}
	}

	ArrayList<Integer> randomValuesBetweenRange(){
		ArrayList<Integer> list = new ArrayList<>();
		Random number = new Random();
		int max = 100;
		int min = 55;

		for(int i = 1; i<= 10; i++){
			list.add(number.nextInt((max-min)+1) + min);
		}
		return list;
	}

	ArrayList<Integer> orderedRandomValues(ArrayList<Integer> random){
		Collections.sort(random);
		return random;
	}

	String createRandomString(){
		Random rand = new Random();
		String letters = "abcdefghijklmnopqrstuvwxyz1234567890!#$%&/()=?¡¨*[]:_;:";
		String word = "";

		for (int i = 0; i<5; i++){
			word += letters.charAt(rand.nextInt(letters.length()));
		}
		return word;
	}

	ArrayList<String> createArrayRandomString(){
		ArrayList<String> array = new ArrayList<>();
		for(int i = 0; i < 10; i++){
			array.add(createRandomString());
		}
		return array;
	}
}
