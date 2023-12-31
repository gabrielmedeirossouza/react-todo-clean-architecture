import { ITodo } from "../interfaces/todo";

export class Todo implements ITodo {
	public constructor(
		public readonly id: string,
		public title: string,
		public description: string,
		public isCompleted: boolean,
	) {}
}
