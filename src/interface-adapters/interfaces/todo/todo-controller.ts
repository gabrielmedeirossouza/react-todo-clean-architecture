export interface ITodoController {
	createTodo(title: string, description: string): Promise<void>;
	removeTodo(id: string): Promise<void>;
}
