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
		Compromiso: string;
		Objetivo: string;
		'mejora-continua': string;
		'satisfaccion-cliente': string;
		cumplimiento: string;
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
		id_no_conformidad: string;
		fecha_deteccion: string;
		descripcion: string;
		area_proceso: string;
		causa_raiz: string;
		accion_correctiva: string;
		responsable: string;
		fecha_implementacion: string;
		seguimiento: string;
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
		Objetivo_y_Alcance: string;
		Responsabilidades: string;
		Planificación_de_Auditorías: string;
		Ejecución_de_la_Auditoría: string;
		Informe_de_Auditoría: string;
		Seguimiento_y_Cierre: string;
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
		periodo: string;
		objetivo1: string;
		indicador1: string;
		meta1: string;
		objetivo2: string;
		indicador2: string;
		meta2: string;
		objetivo3: string;
		indicador3: string;
		meta3: string;
		recursos: string;
		responsables: string;
		revision: string;
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
		'nombre-empresa': string;
		alcance: string;
		'politica-calidad': string;
		'objetivos-calidad': string;
		'estructura-organizacional': string;
		procesos: string;
		documentacion: string;
		'mejora-continua': string;
	};
}
