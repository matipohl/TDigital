public class StringManipulatorTest {
	public static void main(String[] args) {
		StringManipulator sm = new StringManipulator();
		//Trim and Concat
		System.out.println(sm.trimAndConcat("Hola ", "mundo"));

		//getIndexOrNull
		System.out.println(sm.getIndexOrNull("Coding", 'n'));
		System.out.println(sm.getIndexOrNull("Hola Mundo", 'n'));
		System.out.println(sm.getIndexOrNull("Saludar", 'n'));
		System.out.println(sm.getIndexOrNull("Hola", "la"));
		System.out.println(sm.getIndexOrNull("Hola", "mundo"));

		//concatSubstring
		System.out.println(sm.concatSubstring("Hola", 1,3, "mundo"));

	}
}
