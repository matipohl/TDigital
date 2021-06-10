import java.util.ArrayList;

public class ListaExcepciones {
	public static void main(String[] args) {
		ArrayList<Object> myList = new ArrayList<>();
		myList.add("13");
		myList.add("Hola Mundo");
		myList.add(48);
		myList.add("Adios Mundo");
		try {
		for(Object item : myList) {
			int castedValue = (int) item;
		}
			} catch (ClassCastException e){
			System.out.println("¡No puedo castear cualquier cosa!");
		}
	}

}
