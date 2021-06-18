package Telefonos;

public class Iphone extends Phone implements Ringable {
	public Iphone(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
		super(versionNumber, batteryPercentage, carrier, ringTone);
	}
	@Override
	public String ring() {
		return getRingTone();
	}
	@Override
	public String unlock() {
		return "Unlocking via facial recognition";
	}
	@Override
	public void displayInfo() {
		System.out.println("Iphone " + getVersionNumber() + " from " + getCarrier());
	}
}
