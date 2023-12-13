import {  useState } from "react";
import { todoFactory } from "../../factories/todo-factory";
import { ITodo } from "@/entities/interfaces/todo";
import { useOnce } from "../../hooks/use-once";

export const Home = () => {
	const [todoList, setTodoList] = useState<ITodo[]>([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [globalError, setGlobalError] = useState("");

	const todoController = useOnce(() => todoFactory({
		create: {
			onCreateTodoSuccess(response) {
				setTodoList((prev) => [...prev, response]);
				setTitle("");
				setDescription("");
				setGlobalError("");
			},
			onCreateTodoFailField(response) {
				console.log(response);
			},
			onCreateTodoFailMessage(response) {
				console.log(response);
				setGlobalError(response.message);
			}
		},
		remove: {
			onRemoveTodoSuccess(response) {
				setTodoList((prev) => prev.filter((todo) => todo.id !== response));
			},
			onRemoveTodoFailMessage(response) {
				console.log(response);
			}
		}
	}));

	const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		todoController.createTodo(title, description);
	};

	const handleRemoveTodo = (id: string) => {
		todoController.removeTodo(id);
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
						<button type="button" onClick={() => handleRemoveTodo(todo.id)}>Excluir</button>
					</li>
				))}
			</ul>

			{globalError && <p style={{color: "tomato"}}>{globalError}</p>}
		</div>
	);
};
