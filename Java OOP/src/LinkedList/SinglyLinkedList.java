package LinkedList;

public class SinglyLinkedList {
	public Node head;

	public SinglyLinkedList() {
		this.head = null;
	}

	public void remove() {
		Node curr = head;

		if (curr == null || curr.next == null) {
			head = null;
		}
		Node nextNode = curr.next;
		while (curr.next != null) {
			if (nextNode.next == null) {
				curr.next = null;
			}
			curr = nextNode;
			nextNode = nextNode.next;
		}

	}

	public void printValues() {
		Node curr = head;

		if (curr == null) {
			System.out.println("No hay nodos");
		}
		while (curr.next != null) {
			System.out.println(curr.value);
			curr = curr.next;
		}
		System.out.println(curr.value);
	}

	public void add(int value) {
		Node n = new Node(value);
		Node curr = head;

		if (curr == null) {
			head = n;
		} else {
			while (curr.next != null) {
				curr = curr.next;
			}
			curr.next = n;
		}
	}

	public Node find(int value) {
		Node curr = head;
		if (curr == null) {
			return null;
		} else if (curr.value == value) {
			return curr;
		}
		while (curr.next != null) {
			if (curr.next.value == value) {
				return curr.next;
			}
			curr = curr.next;
		}
		return null;
	}
}