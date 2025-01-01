import {
  DevtoolsCredentials,
  DevtoolsUserPrincipal,
} from '@devtools/backend-plugin-api';

export interface TodoItem {
  title: string;
  id: string;
  createdBy: string;
  createdAt: string;
}

export interface TodoListService {
  createTodo(
    input: {
      title: string;
      entityRef?: string;
    },
    options: {
      credentials: DevtoolsCredentials<DevtoolsUserPrincipal>;
    },
  ): Promise<TodoItem>;

  listTodos(): Promise<{ items: TodoItem[] }>;

  getTodo(request: { id: string }): Promise<TodoItem>;
}
