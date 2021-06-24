package Calculadora;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class Calculadora implements java.io.Serializable {
	private String operación = "";
	private Object result;
	ScriptEngineManager manager = new ScriptEngineManager();
	ScriptEngine engine = manager.getEngineByName("js");

	public String getOperación() {
		return operación;
	}

	public void setOperación(String operación) {
		this.operación = operación;
	}

	public Calculadora(){

	}

	public void performOperation(String cadena) {
		if(cadena != "=")
			operación = operación + cadena;
		else
		{
			evaluate(operación);
		}
	}

	public void evaluate(String cadena)  {
		try {
			System.out.println(engine.eval(operación));
		} catch (ScriptException e) {
			e.printStackTrace();
		}
	}




}
