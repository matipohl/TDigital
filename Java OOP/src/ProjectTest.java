public class ProjectTest {
	public static void main(String[] args) {
		Project elevatorPitch = new Project();
		Project elevatorPitch2 = new Project("facebook", "es una red social bacán", 60000000);
		Project elevatorPitch3 = new Project("twitter");

		Portfolio p1 = new Portfolio();
		Portfolio p2 = new Portfolio();
		p1.setProjects(elevatorPitch);
		p1.setProjects(elevatorPitch2);
		p1.setProjects(elevatorPitch3);
		p2.setProjects(elevatorPitch);



		elevatorPitch.setNombre("Netflix");
		elevatorPitch.setDescripcion("App para ver películas todo el día");
		elevatorPitch.setInitialCost(25000000);

		elevatorPitch3.setDescripcion("Es una red social hater");
		elevatorPitch3.setInitialCost(30000000);

		System.out.println(elevatorPitch.toString());
		System.out.println(elevatorPitch2.toString());
		System.out.println(elevatorPitch3.toString());

		System.out.println(p1.getPortfolioCost());
		System.out.println(p2.getPortfolioCost());

		p1.showPortfolio();
	}
}
