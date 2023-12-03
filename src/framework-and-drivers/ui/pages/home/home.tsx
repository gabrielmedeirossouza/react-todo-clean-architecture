import { useState } from "react";
import { todoControllerFactory } from "../../factories/todo-controller-factory";
import { todoPresenterFactory } from "../../factories/todo-presenter-factory";

type TTodo = {
	id: string;
	title: string;
	description: string;
};

export const Home = () => {
	const [todos, setTodos] = useState<TTodo[]>([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState("");

	const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const todoController = todoControllerFactory();
		const todoModel = await todoController.createTodo(title, description);
		const presenter = todoPresenterFactory();
		const newTodo = presenter.present(todoModel);

		if (newTodo.ok) {
			setTodos([...todos, newTodo.value]);
			setTitle("");
			setDescription("");
			setError("");
			return;
		}

		setError(newTodo.error);
	};

	return (
		<div>
			<h1>Home</h1>
			<form onSubmit={handleAddTodo}>
				<input type="text" placeholder="título" value={title} onChange={(e) => setTitle(e.target.value)} />
				<input type="text" placeholder="descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
				<button>Adicionar</button>
			</form>
			{error && <div style={{color: "tomato"}}>{error}</div>}
		</div>
	);
};
