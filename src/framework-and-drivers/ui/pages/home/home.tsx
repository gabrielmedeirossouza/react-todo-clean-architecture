import { useState } from "react";
import { useTodoStore } from "../../store/use-todo-store";

export const Home = () => {
	const { todoList, createTodo, deleteTodoById } = useTodoStore();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createTodo(title, description);
	};

	const handleDeleteTodo = async (id: string) => {
		deleteTodoById(id);
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
				{todoList.map((todo) => (
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
