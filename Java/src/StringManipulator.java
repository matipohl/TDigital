public class StringManipulator {
	String trimAndConcat(String w1, String w2){
		return w1+w2.trim();
	}

	int getIndexOrNull(String cadena, char letra){
		return cadena.indexOf(letra);
	}

	int getIndexOrNull(String cadena, String subcadena){
		return cadena.indexOf(subcadena);
	}

	String concatSubstring(String cadena, int ini, int fin, String cadena2){
		String frase = "";

		while(ini < fin){
			frase = frase + cadena.charAt(ini);
			ini++;
		}
		return frase+cadena2;
	}
}
