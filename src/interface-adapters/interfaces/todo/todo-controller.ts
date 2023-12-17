export interface ITodoController {
	checkTitleCreateTodo(title: string): void;
	checkDescriptionCreateTodo(description: string): void;
	createTodo(title: string, description: string): Promise<void>;
	removeTodo(id: string): Promise<void>;
}
