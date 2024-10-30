export interface PolitciesType {
  id: number;
  name: string;
  category: string;
  status: string;
  lastUpdated: string;
  employee: {
    name: string;
    avatar: string;
    points: number;
  };
  content: {
    "Compromiso": string | null
    "Objetivo": string | null
    "mejora-continua": string | null
    "satisfaccion-cliente": string | null
    "cumplimiento": string | null
};
}

export interface RecordsType {
  id: number;
  name: string;
  category: string;
  status: string;
  lastUpdated: string;
  employee: {
    name: string;
    avatar: string;
    points: number;
  };
  content: {
    "id_no_conformidad": string | null
    "fecha_deteccion": string | null
    "descripcion": string | null
    "area_proceso": string | null
    "causa_raiz": string | null
    "accion_correctiva": string | null
    "responsable": string | null
    "fecha_implementacion": string | null
    "seguimiento": string | null
};
}

export interface ProcedureType {
  id: number;
  name: string;
  category: string;
  status: string;
  lastUpdated: string;
  employee: {
    name: string;
    avatar: string;
    points: number;
  };
  content: {
    Objetivo_y_Alcance: string | null
    Responsabilidades: string | null
    Planificación_de_Auditorías: string | null
    Ejecución_de_la_Auditoría: string | null
    Informe_de_Auditoría: string | null
    Seguimiento_y_Cierre: string | null
  };
}

export interface GoalsType {
  id: number;
  name: string;
  category: string;
  status: string;
  lastUpdated: string;
  employee: {
    name: string;
    avatar: string;
    points: number;
  };
  content: {
    periodo: string | null
    objetivo1: string | null
    indicador1: string | null
    meta1: string | null
    objetivo2: string | null
    indicador2: string | null
    meta2: string | null
    objetivo3: string | null
    indicador3: string | null
    meta3: string | null
    recursos: string | null
    responsables: string | null
    revision: string | null
  };
}

export interface ManualType {
  id: number;
  name: string;
  category: string;
  status: string;
  lastUpdated: string;
  employee: {
    name: string;
    avatar: string;
    points: number;
  };
  content: {
    "nombre-empresa": string | null
    "alcance": string | null
    "politica-calidad": string | null
    "objetivos-calidad": string | null
    "estructura-organizacional": string | null
    "procesos": string | null
    "documentacion": string | null
    "mejora-continua": string | null
  };
}