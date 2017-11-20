import { Message } from '../models/message';
import { profiles } from './profiles.mock';

export const messagesList: Message[] = profiles.map(
  profile => ({ profile, date: new Date(), lastMessage: 'lorem ipsum cod finitum van ponri an catastic vire mori mementum' +
  ' cite' })
);
