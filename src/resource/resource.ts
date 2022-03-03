export interface Resource {
  name: string;
  value: number;
  level?: number;
  active?: boolean;
  auto?: boolean;
  progress?: number;
  nextLevel?: number;
}
