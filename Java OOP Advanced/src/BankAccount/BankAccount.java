package BankAccount;

public class BankAccount {
	private String nroCuenta;
	private double montoCC;
	private double montoCA;
	private static int cantCuentas=0;
	private static double montoTotal=0;



	public BankAccount(){
		nroCuenta = generateRandomAccount();
		montoCC = 0;
		montoCA = 0;
		cantCuentas++;
	}

	public String getNroCuenta() {
		return nroCuenta;
	}

	public double getMontoCC() {
		return montoCC;
	}

	public void setMontoCC(double montoCC) {
		this.montoCC = montoCC;
	}

	public double getMontoCA() {
		return montoCA;
	}

	public void setMontoCA(double montoCA) {
		this.montoCA = montoCA;
	}

	public static int getCantCuentas() {
		return cantCuentas;
	}

	public static double getMontoTotal() {
		return montoTotal;
	}

	public void deposit(double amount, String typeAccount ){
		if(typeAccount == "CC"){
			montoCC += amount;
			montoTotal += amount;
		}
		else if( typeAccount == "CA"){
			montoCA += amount;
			montoTotal += amount;
		}
	}

	public void withdraw(double amount, String typeAccount){
		if(typeAccount == "CC"){
			if(amount > montoCC){
				System.out.println("No tienes fondos. Tu retiro máximo es:" + montoCC);
			}
			else {
				montoCC -= amount;
				montoTotal -= amount;
			}
		}
		if(typeAccount == "CA"){
			if(amount > montoCA){
				System.out.println("No tienes fondos. Tu retiro máximo es:" + montoCA);
			}
			else {
				montoCA -= amount;
				montoTotal -= amount;
			}
		}
	}

	public void totalAmountByAccount(){
		System.out.println("El dinero de la cuenta es: " + (montoCC+montoCA));
	}

	private String generateRandomAccount(){
		String account = "";
		for (int i = 0; i< 10; i++){
			account += String.valueOf((int)(Math.random()* (9-0)));
		}
		return account;
	}
}
