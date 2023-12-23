import { useState } from "react";
import { todoFactory } from "../../../factories/todo-factory";
import { ITodo } from "@/entities/interfaces/todo";
import { useFactory } from "../../hooks/use-factory";
import { useObserver } from "../../hooks/use-observer";
import { InputTextPrefab } from "../../prefabs/input-text-prefab";
import "./home.scss";
import { TextHeadingComponent } from "../../components/text-heading-component";
import { ContainerMainComponent, ContainerShapeComponent } from "../../components";

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

	useObserver(createTodoPresenterObservable.createTodo, (result) => {
		if (result.ok) setTodoList([...todoList, result.okValue]);
	});

	useObserver(removeTodoPresenterObservable.removeTodo, (result) => {
		if (result.ok) setTodoList(todoList.filter((todo) => todo.id !== result.okValue));
	});

	const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		todoController.createTodo(title, description);
	};

	const handleRemoveTodo = (id: string) => {
		todoController.removeTodo(id);
	};

	return (
		<ContainerMainComponent>
			<TextHeadingComponent text="Home!" level="unique" />
			<form onSubmit={handleAddTodo}>
				<ContainerShapeComponent>
					<InputTextPrefab
						label="Título"
						name="title"
						value={title}
						onChange={(e) => {
							todoController.checkCreateTodoTitle(e);
							setTitle(e);
						}}
						error={checkCreateTodoPresenterObservable.checkCreateTodoField}
					/>
				</ContainerShapeComponent>

				<InputTextPrefab
					label="Descrição"
					name="description"
					value={description}
					onChange={(e) => {
						todoController.checkCreateTodoDescription(e);
						setDescription(e);
					}}
					error={checkCreateTodoPresenterObservable.checkCreateTodoField}
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
		</ContainerMainComponent>
	);
};
