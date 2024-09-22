import type { Result } from "../types.ts";

export interface AreasResult extends Result {
  areas: Area[];
}

interface AreaBase {
  id: number;
  name: string;
  flag: string | null;
}

interface ChildArea extends AreaBase {
  countryCode: string;
  parentAreaId: number;
  parentArea: string;
}

export interface Area extends AreaBase {
  code: string;
  parentAreaId: number;
  parentArea: string;
  childAreas: ChildArea[];
}

export interface AreaRefernece extends ChildArea {
  code: string;
}
