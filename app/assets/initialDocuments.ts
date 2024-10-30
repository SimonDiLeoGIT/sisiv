export const initialDocuments = [
  {
    id: 1,
    name: "Política de Calidad",
    category: "Políticas",
    status: "high",
    lastUpdated: "2023-10-15",
    employee: {
      name: "Ana García",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 5,
    },
    content: {
      Objetivo:
        "Establecer un marco para la gestión de la calidad dentro de la organización.",
      Alcance:
        "Aplicable a todas las áreas de la organización que impactan en la calidad.",
      Responsabilidades:
        "Todos los empleados deben cumplir con la política de calidad.",
      Procedimiento:
        "Se implementarán prácticas consistentes de evaluación y mejora de calidad.",
      Revisión:
        "Esta política se revisará anualmente para asegurar su vigencia.",
    },
  },
  {
    id: 2,
    name: "Procedimiento de Auditoría Interna",
    category: "Procedimientos",
    status: "medium",
    lastUpdated: "2023-09-22",
    employee: {
      name: "Carlos López",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 3,
    },
    content: {
      Objetivo_y_Alcance: "Definir el proceso para llevar a cabo auditorías internas en todos los departamentos de la organización.",
      Responsabilidades: null,
      Planificación_de_Auditorías: null,
      Ejecución_de_la_Auditoría: "Incluir reunión de apertura, recolección de evidencias, y reunión de cierre.",
      Informe_de_Auditoría: null,
      Seguimiento_y_Cierre: "Incluir plazos para implementar acciones correctivas y verificar su eficacia.",
    },
  },
  {
    id: 3,
    name: "Registro de No Conformidades",
    category: "Registros",
    status: "low",
    lastUpdated: "2023-10-01",
    employee: {
      name: "María Rodríguez",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 1,
    },
    content: {
      Objetivo: null,
      Alcance: null,
      Responsabilidad: null,
      Requisitos_de_Documentación: null,
      Retención_y_Eliminación: null,
    },
  },
  {
    id: 4,
    name: "Manual de Calidad",
    category: "Manuales",
    status: "high",
    lastUpdated: "2023-08-30",
    employee: {
      name: "Juan Martínez",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 5,
    },
    content: {
      Introducción:
        "Este manual define los lineamientos de calidad para todos los procesos.",
      Alcance: "Aplica a todos los procesos operativos dentro de la empresa.",
      Responsabilidades:
        "La alta dirección es responsable de supervisar el cumplimiento de este manual.",
      Descripción_de_Procesos:
        "Incluye descripciones detalladas de cada proceso crítico de calidad.",
      Documentación_y_Registros:
        "Los registros deben completarse para evidenciar cumplimiento de calidad.",
      Revisión: "El manual se revisa cada dos años.",
    },
  },
  {
    id: 5,
    name: "Objetivos de Calidad",
    category: "Objetivos",
    status: "medium",
    lastUpdated: "2023-10-10",
    employee: {
      name: "Laura Sánchez",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 3,
    },
    content: {
      Declaración_de_Objetivo:
        "Aumentar la satisfacción del cliente en un 10% anual.",
      Alcance: "Aplica al departamento de atención al cliente.",
      Indicadores_Clave_de_Desempeño: null,
      Responsabilidades:
        "El departamento de calidad supervisará el progreso de los objetivos.",
      Revisión_y_Evaluación: null,
    },
  },
  {
    id: 6,
    name: "Procedimiento de Control de Documentos",
    category: "Procedimientos",
    status: "high",
    lastUpdated: "2023-11-05",
    employee: {
      name: "Pedro Gómez",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 4,
    },
    content: {
      Objetivo_y_Alcance: "Establecer un proceso para el control de documentos dentro del sistema de gestión de calidad, aplicando a todos los documentos críticos para la calidad.",
      Responsabilidades: "Cada departamento es responsable de actualizar y archivar sus documentos.",
      Planificación_de_Auditorías: "1. Verificación, 2. Aprobación, 3. Archivo, 4. Revisión periódica.",
      Ejecución_de_la_Auditoría: "Incluir reunión de apertura, recolección de evidencias, y reunión de cierre.",
      Informe_de_Auditoría: "Especificar qué debe incluir el informe y cómo se comunica.",
      Seguimiento_y_Cierre: "Anualmente o según cambios en la normativa.",
    },
  },
  {
    id: 7,
    name: "Registro de Capacitación del Personal",
    category: "Registros",
    status: "medium",
    lastUpdated: "2023-11-12",
    employee: {
      name: "Sofia Herrera",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 2,
    },
    content: {
      Objetivo: "Mantener un registro de todas las capacitaciones realizadas.",
      Alcance: null,
      Responsabilidad:
        "El departamento de RRHH mantiene y actualiza el registro.",
      Requisitos_de_Documentación: null,
      Retención_y_Eliminación: null,
    },
  },
  {
    id: 8,
    name: "Política de Seguridad de la Información",
    category: "Políticas",
    status: "low",
    lastUpdated: "2023-11-20",
    employee: {
      name: "Diego Torres",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 1,
    },
    content: {
      Objetivo: null,
      Alcance: null,
      Responsabilidades: null,
      Procedimiento: null,
      Revisión: null,
    },
  },
  {
    id: 9,
    name: "Manual de Procedimientos Operativos",
    category: "Manuales",
    status: "medium",
    lastUpdated: "2023-11-25",
    employee: {
      name: "Carmen Vega",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 3,
    },
    content: {
      Introducción:
        "Manual para describir los procedimientos operativos clave.",
      Alcance: null,
      Responsabilidades:
        "Cada gerente de área debe asegurarse de la implementación de los procedimientos.",
      Descripción_de_Procesos: null,
      Documentación_y_Registros: null,
      Revisión: null,
    },
  },
  {
    id: 10,
    name: "Objetivos Estratégicos Anuales",
    category: "Objetivos",
    status: "high",
    lastUpdated: "2023-12-01",
    employee: {
      name: "Javier Mendoza",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 5,
    },
    content: {
      Declaración_de_Objetivo:
        "Lograr un crecimiento anual del 15% en eficiencia operativa.",
      Alcance: "Abarca todas las operaciones de producción.",
      Indicadores_Clave_de_Desempeño:
        "Productividad, reducción de costos, satisfacción del cliente.",
      Responsabilidades: "El equipo de operaciones monitorizará el progreso.",
      Revisión_y_Evaluación:
        "Trimestralmente se evalúa el avance y se ajustan los planes.",
    },
  },
  {
    id: 11,
    name: "Procedimiento de Gestión de Riesgos",
    category: "Procedimientos",
    status: "medium",
    lastUpdated: "2023-12-05",
    employee: {
      name: "Elena Vargas",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 3,
    },
    content: {
      Objetivo: "Definir un proceso para identificar y gestionar riesgos.",
      Alcance: "Incluye todos los procesos críticos.",
      Definiciones: null,
      Responsabilidades:
        "Cada área debe realizar una evaluación de riesgos periódica.",
      Pasos_del_Procedimiento: null,
      Revisión: null,
    },
  },
  {
    id: 12,
    name: "Registro de Acciones Correctivas",
    category: "Registros",
    status: "low",
    lastUpdated: "2023-12-10",
    employee: {
      name: "Roberto Jiménez",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 2,
    },
    content: {
      Objetivo: null,
      Alcance: null,
      Responsabilidad: null,
      Requisitos_de_Documentación: null,
      Retención_y_Eliminación: null,
    },
  },
]