export interface ITodoController {
	checkCreateTodoTitle(title: string): void;
	checkCreateTodoDescription(description: string): void;
	createTodo(title: string, description: string): Promise<void>;
	removeTodo(id: string): Promise<void>;
}
