export interface User {
  id: number;
  age: number;
  firstName: string;
  lastName: string;
}

export interface getUserByIdResponse {
  data: User | null;
  error: string | null;
}
