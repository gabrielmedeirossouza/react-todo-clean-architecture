export interface ITodoController {
	createTodo(title: string, description: string): Promise<void>;
	deleteTodo(id: string): Promise<void>;
}
