package LinkedList;

public class Test {
	public static void main(String[] args) {
		SinglyLinkedList sll = new SinglyLinkedList();
		sll.add(3);
		sll.add(4);
		sll.add(4);
		sll.add(7);
		sll.add(10);
		sll.add(15);
		sll.remove();
		sll.printValues();
		System.out.println("_________________");
		Node n = sll.find(7);
		System.out.println(n.value);
		System.out.println("_________________");
	}
}
