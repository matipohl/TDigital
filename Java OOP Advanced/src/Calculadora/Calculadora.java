package Calculadora;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class Calculadora implements java.io.Serializable {
	private String operacion = "";
	private Object result;
	ScriptEngineManager manager = new ScriptEngineManager();
	ScriptEngine engine = manager.getEngineByName("js");

	public String getOperacion() {
		return operacion;
	}

	public void setOperacion(String operacion) {
		this.operacion = operacion;
	}

	public Calculadora(){

	}

	public void performOperation(String cadena) {
		if(cadena != "=")
			operacion = operacion + cadena;
		else
		{
			evaluate(operacion);
		}
	}

	public void evaluate(String cadena)  {
		try {
			System.out.println(engine.eval(operacion));
		} catch (ScriptException e) {
			e.printStackTrace();
		}
	}




}
