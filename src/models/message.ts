import { Profile } from './profile';

export interface Message {
  profile: Profile;
  date: Date;
  lastMessage: string;
}