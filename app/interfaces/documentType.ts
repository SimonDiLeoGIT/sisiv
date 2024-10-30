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