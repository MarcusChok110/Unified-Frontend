export class Message {
  id?: number;
  timestamp?: Date;

  constructor(
    public authorId: string,
    public author: string,
    public content: string,
    timestamp?: Date
  ) {
    this.timestamp = timestamp;
  }
}

export const mockMessages = [
  new Message('12390123123', 'someone', 'once told me'),
  new Message(
    'auth0|182390-192sxj',
    'the world',
    'was gonna roll me',
    new Date()
  ),
  new Message('auth0|182390-192sxj', 'help', 'idk what im doing'),
];
