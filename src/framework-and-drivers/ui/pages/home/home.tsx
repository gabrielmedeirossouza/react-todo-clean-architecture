import { todoFactory } from "@/framework-and-drivers/factories/todo-factory";
import { useState } from "react";

type TTodo = {
	id: string;
	title: string;
	description: string;
};

export const Home = () => {
	const [todos, setTodos] = useState<TTodo[]>([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const todo = todoFactory((({ viewModel }) => {
			if (viewModel.ok)
				setTodos([...todos, viewModel.value]);
		}));

		todo.createTodo(title, description);
	};

	return (
		<div>
			<h1>Home</h1>
			<form onSubmit={handleAddTodo}>
				<input type="text" placeholder="título" value={title} onChange={(e) => setTitle(e.target.value)} />
				<input type="text" placeholder="descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
				<button>Adicionar</button>
			</form>

			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<h3>{todo.title}</h3>
						<p>{todo.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};
