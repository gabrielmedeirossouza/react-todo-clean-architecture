import { useState } from "react";
import { todoFactory } from "../../../factories/todo-factory";
import { ITodo } from "@/entities/interfaces/todo";
import { useFactory } from "../../hooks/use-factory";
import { useObserver } from "../../hooks/use-observer";
import { InputText } from "../../components/input-text";

export const Home = () => {
	const [todoList, setTodoList] = useState<ITodo[]>([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [globalError] = useState("");

	const {
		todoController,
		checkCreateTodoPresenterObservable,
		createTodoPresenterObservable,
		removeTodoPresenterObservable
	} = useFactory(() => todoFactory());

	useObserver(checkCreateTodoPresenterObservable.checkCreateTodoSuccess, () => {
		console.log("All fields are valid");
	});

	useObserver(checkCreateTodoPresenterObservable.checkCreateTodoFailField, (error) => {
		console.log(error);
	});

	useObserver(createTodoPresenterObservable.createTodoSuccess, (todo) => {
		setTodoList([...todoList, todo]);
	});

	useObserver(removeTodoPresenterObservable.removeTodoSuccess, (id) => {
		setTodoList(todoList.filter((todo) => todo.id !== id));
	});

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
				<InputText
					name="title"
					value={title} onChange={(e) => {
						todoController.checkTitleCreateTodo(e);
						setTitle(e);
					}}
					error={{
						onFill: checkCreateTodoPresenterObservable.checkCreateTodoFailField,
						onClear: checkCreateTodoPresenterObservable.checkCreateTodoSuccess
					}}
				/>
				<InputText
					name="description"
					value={description} onChange={(e) => {
						todoController.checkDescriptionCreateTodo(e);
						setDescription(e);
					}}
					error={{
						onFill: checkCreateTodoPresenterObservable.checkCreateTodoFailField,
						onClear: checkCreateTodoPresenterObservable.checkCreateTodoSuccess
					}}
				/>
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

			{globalError && <p style={{ color: "tomato" }}>{globalError}</p>}
		</div>
	);
};
