import { NotificationsRepository } from '@/domain/notification/application/repositories/notification-repository'
import { Notification } from '@/domain/notification/enterprise/entities/notification'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  async findById(id: string): Promise<Notification | null> {
    throw new Error('Method not implemented.')
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async create(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
