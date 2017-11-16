import { Message } from '../models/message';
import { userList } from './users.mock';

export const messagesList: Message[] = userList.map(
  user => ({ user, date: new Date(), lastMessage: 'lorem ipsum cod finitum van ponri an catastic vire mori mementum' +
  ' cite' })
);
