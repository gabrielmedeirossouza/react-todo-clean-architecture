import { todoFactory } from "@/framework-and-drivers/factories/todo-factory";
import { useMemo, useState } from "react";

type TTodo = {
	id: string;
	title: string;
	description: string;
};

export const Home = () => {
	const [todos, setTodos] = useState<TTodo[]>([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const todo = useMemo(() => todoFactory(
		(({ viewModel }) => {
			if (viewModel.ok) {
				setTodos((prev) => [...prev, viewModel.value]);
				setTitle("");
				setDescription("");
			} else {
				console.log(viewModel.error);
			}
		}),
		(({viewModel}) => {
			if (viewModel.ok)
				setTodos((prev) => prev.filter((todo) => todo.id !== viewModel.value));
			else
				console.log(viewModel.error);
		})
	), []);

	const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		todo.createTodo(title, description);
	};

	const handleDeleteTodo = async (id: string) => {
		todo.deleteTodoById(id);
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
					<li key={todo.id} style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
						<h3>{todo.title}</h3>
						<p>{todo.description}</p>
						<button type="button" onClick={() => handleDeleteTodo(todo.id)}>Excluir</button>
					</li>
				))}
			</ul>
		</div>
	);
};
