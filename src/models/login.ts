export interface Login {
  result?: {
    email?: string;
    uid$: string;
  },
  error?: {
    code?: string;
    message?: string;
  }
}