export const initialDocuments = [
  {
    id: 1,
    name: "Política de Calidad",
    category: "Politicas",
    status: "high",
    lastUpdated: "2023-10-15",
    employee: {
      name: "Ana García",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 5,
    },
    content: {
      "Compromiso": "La alta dirección se compromete a promover una cultura de calidad en toda la organización.",
      "Objetivo": "Establecer un marco para la gestión de la calidad dentro de la organización.",
      "mejora-continua": "La organización se compromete a mejorar continuamente sus procesos y servicios.",
      "satisfaccion-cliente": "Nos enfocamos en cumplir y superar las expectativas del cliente.",
      "cumplimiento": "Cumpliremos con los requisitos legales, reglamentarios y del cliente."
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
      "id_no_conformidad": null,
      "fecha_deteccion": null,
      "descripcion": null,
      "area_proceso": null,
      "causa_raiz": null,
      "accion_correctiva": null,
      "responsable": null,
      "fecha_implementacion": null,
      "seguimiento": null
  }
  },
  {
    "id": 4,
    "name": "Manual de Calidad",
    "category": "Manuales",
    "status": "high",
    "lastUpdated": "2023-08-30",
    "employee": {
      "name": "Juan Martínez",
      "avatar": "/placeholder.svg?height=32&width=32",
      "points": 5
    },
    "content": {
      "nombre-empresa": null,
      "alcance": "Aplica a todos los procesos operativos dentro de la empresa.",
      "politica-calidad": "Este manual define los lineamientos de calidad para todos los procesos.",
      "objetivos-calidad": null,
      "estructura-organizacional": "La alta dirección es responsable de supervisar el cumplimiento de este manual.",
      "procesos": "Incluye descripciones detalladas de cada proceso crítico de calidad.",
      "documentacion": "Los registros deben completarse para evidenciar cumplimiento de calidad.",
      "mejora-continua": "El manual se revisa cada dos años."
    }
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
      periodo: "2024",
      objetivo1: "Lograr un crecimiento anual del 15% en eficiencia operativa.",
      indicador1: "Productividad, reducción de costos, satisfacción del cliente.",
      meta1: "Mejorar en un 15% la eficiencia operativa",
      objetivo2: null,
      indicador2: null,
      meta2: null,
      objetivo3: null,
      indicador3: null,
      meta3: null,
      recursos: "Recursos de operaciones para el crecimiento en eficiencia.",
      responsables: "El equipo de operaciones monitorizará el progreso.",
      revision: "Trimestral"
    }
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
        "id_no_conformidad": null,
        "fecha_deteccion": null,
        "descripcion": null,
        "area_proceso": null,
        "causa_raiz": null,
        "accion_correctiva": null,
        "responsable": null,
        "fecha_implementacion": null,
        "seguimiento": null
    },
  },
  {
    id: 8,
    name: "Política de Seguridad de la Información",
    category: "Politicas",
    status: "low",
    lastUpdated: "2023-11-20",
    employee: {
      name: "Diego Torres",
      avatar: "/placeholder.svg?height=32&width=32",
      points: 1,
    },
    content: {
      "Compromiso": null,
      "Objetivo": null,
      "mejora-continua": null,
      "satisfaccion-cliente": null,
      "cumplimiento": null
  },
  },
  {
    "id": 9,
    "name": "Manual de Procedimientos Operativos",
    "category": "Manuales",
    "status": "medium",
    "lastUpdated": "2023-11-25",
    "employee": {
      "name": "Carmen Vega",
      "avatar": "/placeholder.svg?height=32&width=32",
      "points": 3
    },
    "content": {
      "nombre-empresa": null,
      "alcance": null,
      "politica-calidad": "Manual para describir los procedimientos operativos clave.",
      "objetivos-calidad": null,
      "estructura-organizacional": "Cada gerente de área debe asegurarse de la implementación de los procedimientos.",
      "procesos": null,
      "documentacion": null,
      "mejora-continua": null
    }
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
      "periodo": "2023",
      "objetivo1": "Aumentar la satisfacción del cliente en un 10% anual.",
      "indicador1": "Porcentaje de satisfacción del cliente",
      "meta1": "Alcanzar un 95% de satisfacción del cliente",
      "objetivo2": null,
      "indicador2": null,
      "meta2": null,
      "objetivo3": null,
      "indicador3": null,
      "meta3": null,
      "recursos": "Recursos necesarios para cumplir con la satisfacción del cliente.",
      "responsables": "El departamento de calidad supervisará el progreso de los objetivos.",
      "revision": "N/A"
    }
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
      "id_no_conformidad": null,
      "fecha_deteccion": null,
      "descripcion": null,
      "area_proceso": null,
      "causa_raiz": null,
      "accion_correctiva": null,
      "responsable": null,
      "fecha_implementacion": null,
      "seguimiento": null
    },
  },
]