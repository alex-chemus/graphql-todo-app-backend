import { Injectable } from '@nestjs/common';
import { statusList } from 'src/_db';

@Injectable()
export class StatusService {
  async findAll() {
    return statusList
  }

  async findOne(id: number) {
    const status = statusList.find(status => status.id === id)
    if (!status) throw new Error('status does not exist')
    else return status
  }
}
