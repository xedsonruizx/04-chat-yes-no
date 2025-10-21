export interface ChatMessage {
  id: number;
  text: string;
  image?: string;
  itsMine: boolean;
}