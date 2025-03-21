export interface Recipe {
  id: number;
  name: string;
  description: string;
  time: number;
  difficulty: number;
  averageNote: number;
  image?: string;
}
