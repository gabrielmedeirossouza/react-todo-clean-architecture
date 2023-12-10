export interface ITodoController {
	createTodo(title: string, description: string): Promise<void>;
	deleteTodoById(id: string): Promise<void>;
}
