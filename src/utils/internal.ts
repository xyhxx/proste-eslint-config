export type VueVersion = 2 | 3;
export type ReactVersion =
  | 'latest'
  | 'detect'
  | Omit<string, 'latest' | 'detect'>;
