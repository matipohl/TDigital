import java.lang.Math;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.OptionalDouble;

public class Ejercicios1 {

	public static void main(String[] args) {
		Ejercicios1 ej = new Ejercicios1();

		ej.print255();
		System.out.println("------------------------------");
		ej.printOdd();
		System.out.println("------------------------------");
		ej.printSum();
		System.out.println("------------------------------");
		ej.travelArray(new int[]{1,2,4,5,6});
		System.out.println("------------------------------");
		ej.findMaxArray(new int[]{1,-2,3,5,7,123,63421,231});
		System.out.println("------------------------------");
		ej.meanArray(new float[]{1,2,3,5,2,-10,123,42});
		System.out.println("------------------------------");
		ej.arrayOddNumbers();
		System.out.println("------------------------------");
		ej.greaterThanY(23, new int[]{1,56,1,51,23,63,12,2});
		System.out.println("------------------------------");
		System.out.println(Arrays.toString(ej.square(new float[]{1,2,3,4,5,6,7,8,5,3,123,123,12,51,23,12})));
		System.out.println("------------------------------");
		System.out.println(Arrays.toString(ej.notNegative(new float[]{1,2,-3,4,5,6,7,-8,5,3,-123,123,-12,-51,-23,12})));
		System.out.println("------------------------------");
		System.out.println(ej.maxMinMean(new float[]{1,2,3,5,3,123,1225,5,4235,-423}));
		System.out.println("------------------------------");
		System.out.println(Arrays.toString(ej.changingValues(new float[]{1,2,3,4,5,6,7,8,5,3,123,123,12,51,23,12})));
	}

	//imprimir 1-255
	void print255(){
		for(int i = 1 ; i<= 255; i++)
			System.out.println(i);
	}

	void printOdd(){
		for(int i = 1 ; i<= 255 ; i++){
			if(i % 2 != 0)
				System.out.println(i);
		}
	}

	void printSum(){
		int suma = 0;
		for(int i = 0; i <= 255 ; i++){
			suma += i;
			System.out.println("Nuevo numero: " + i + " Suma: " + suma);
		}
	}

	void travelArray(int[] array){
		for(int i=0; i< array.length; i++)
			System.out.println(array[i]);
	}

	void findMaxArray(int[] array){
		int max = array[0];
		for(int i = 1; i<array.length; i++)
			max = Math.max(max, array[i]);
		System.out.println(max);
	}

	void meanArray(float[] array){
		float suma = 0;
		float mean = 0;
		for(float element : array)
			suma+= element;
		mean = suma/array.length;
		System.out.println("Promedio de: " + mean);
	}

	void arrayOddNumbers(){
		ArrayList<Integer> arreglo = new ArrayList<Integer>();

		for(int i = 1; i< 256; i++){
			if(i % 2 != 0)
				arreglo.add(i);
		}
		System.out.println(arreglo);
	}

	void greaterThanY(int y, int[] array){
		for(int i = 0; i<array.length ; i++){
			if(array[i]> y)
				System.out.println(array[i]);
		}
	}

	float[] square(float[] array){
		for(int i = 0; i<array.length; i++)
			array[i] *=array[i];
		return array;
	}

	float[] notNegative(float[] array){
		for(int i = 0; i<array.length; i++){
			if(array[i]<0){
				array[i] = 0;
			}
		}
		return array;
	}

	ArrayList<Float> maxMinMean(float[] array) {
		ArrayList<Float> sol = new ArrayList<Float>();
		float min = array[0];
		float max = array[0];
		float mean = 0;
		for (int i = 0; i<array.length; i++){
			max = Math.max(max, array[i]);
			min = Math.min(min,array[i]);
			mean += array[i];
		}
		sol.add(min);
		sol.add(max);
		sol.add(mean/array.length);
		return sol;
	}

	float[] changingValues(float[] array){
		for(int i = 0; i< array.length-1;i++)
			array[i] = array[i+1];
		array[array.length-1] = 0;
		return array;
	}






}
