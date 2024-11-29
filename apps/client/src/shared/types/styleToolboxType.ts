export type TBlock = { kind: string; type: string; enabled: boolean };

export type TToolboxConfig = {
  kind: string;
  contents: TBlock[];
};
