import { Folder } from './folder/folder.model';
import { Todo } from './todo/todo.model';

export const statusList = [
  {
    id: 1,
    title: 'Planned',
  },
  {
    id: 2,
    title: 'Active',
  },
  {
    id: 3,
    title: 'Done',
  },
] as const;

export const foldersList: Folder[] = [
  {
    id: 1,
    title: 'Work',
  },
  {
    id: 2,
    title: 'Study',
  },
  {
    id: 3,
    title: 'Personal',
  },
];

export const todoList: Todo[] = [];
