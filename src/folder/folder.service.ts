import { Injectable } from '@nestjs/common';
import { foldersList } from 'src/_db';
import { AddFolderInput } from './inputs/add-folder.input';

@Injectable()
export class FolderService {
  async findAll() {
    return foldersList;
  }

  async findOne(id: number) {
    const folder = foldersList.find((folder) => folder.id === id);
    if (folder) return folder;
    else throw new Error('Folder does not exist');
  }

  async addFolder(addFolderInput: AddFolderInput) {
    const id = Date.now();
    foldersList.push({ id, ...addFolderInput });
    return foldersList.find((folder) => folder.id === id);
  }
}
