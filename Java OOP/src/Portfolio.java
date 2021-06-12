import java.util.ArrayList;

public class Portfolio {
	private ArrayList<Project> projects = new ArrayList<Project>();

	public Portfolio() {

	}

	public ArrayList<Project> getProjects() {
		return projects;
	}

	public void setProjects(Project project) {
		projects.add(project);
	}

	public int getPortfolioCost(){
		int cost = 0;
		for (Project project : projects){
			cost += project.getInitialCost();
		}
		return cost;
	}

	public void showPortfolio(){
		System.out.println("Datos del portafolio:");
		for (Project project: projects){
			System.out.println(project.toString());
		}
		System.out.println("Costo total: " + getPortfolioCost());
	}

}
