package BankAccount;

public class BankAccountTest {
	public static void main(String[] args) {
		BankAccount b1 = new BankAccount();
		BankAccount b2 = new BankAccount();

		b1.deposit(1000000, "CC");
		b1.deposit(25000000, "CA");

		b1.withdraw(340000, "CC");
		b1.withdraw(40000000, "CA");

		System.out.println(b1.getMontoCA());
		System.out.println(b1.getMontoCC());
		System.out.println(b1.getNroCuenta());

		b1.totalAmountByAccount();

		System.out.println(BankAccount.getCantCuentas());
		System.out.println(BankAccount.getMontoTotal());

	}
}
