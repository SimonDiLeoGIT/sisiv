'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';

import {
	Search,
	FileText,
	Info,
	PlusCircle,
	Bell,
	MessageSquare,
	BookOpen,
	Trash2,
	ChevronLeft,
	ChevronRight,
	X,
	Edit,
	Eye,
} from 'lucide-react';

import ReactMarkdown from 'react-markdown';

// Document templates and samples
const documentTemplates = {
	Políticas: `# Política de [Nombre de la Política]

## 1. Propósito
[Describir el propósito principal de esta política]

## 2. Alcance
[Definir el alcance de aplicación de la política]

## 3. Declaración de la Política
[Detallar los principios y directrices clave de la política]

## 4. Responsabilidades
[Enumerar las responsabilidades de los diferentes roles en relación con esta política]

## 5. Procedimientos Relacionados
[Listar los procedimientos relacionados con esta política]

## 6. Revisión y Actualización
[Especificar la frecuencia y el proceso de revisión de esta política]

## 7. Aprobación
[Incluir la fecha de aprobación y los responsables de la aprobación]`,

	Procedimientos: `# Procedimiento de [Nombre del Procedimiento]

## 1. Objetivo
[Describir el objetivo principal de este procedimiento]

## 2. Alcance
[Definir el alcance de aplicación del procedimiento]

## 3. Responsabilidades
[Enumerar las responsabilidades de los diferentes roles involucrados]

## 4. Definiciones
[Proporcionar definiciones de términos clave utilizados en el procedimiento]

## 5. Descripción del Procedimiento
[Detallar los pasos del procedimiento en orden secuencial]

## 6. Registros
[Listar los registros que se generan como resultado de este procedimiento]

## 7. Referencias
[Incluir referencias a otros documentos relacionados]

## 8. Control de Cambios
[Registrar las modificaciones realizadas al procedimiento]`,

	Registros: `# Registro de [Nombre del Registro]

| Fecha | Descripción | Responsable | Observaciones |
|-------|-------------|-------------|---------------|
|       |             |             |               |
|       |             |             |               |
|       |             |             |               |

## Instrucciones:
1. Completar todos los campos para cada entrada.
2. Asegurarse de que la información sea precisa y completa.
3. Mantener este registro actualizado y accesible para auditorías.`,

	Manuales: `# Manual de [Nombre del Manual]

## 1. Introducción
[Proporcionar una introducción general al manual]

## 2. Objetivo
[Describir el objetivo principal de este manual]

## 3. Alcance
[Definir el alcance de aplicación del manual]

## 4. Responsabilidades
[Enumerar las responsabilidades de los diferentes roles]

## 5. Contenido Principal
[Desarrollar las secciones principales del manual]

## 6. Procedimientos Relacionados
[Listar y describir brevemente los procedimientos relacionados]

## 7. Anexos
[Incluir cualquier información adicional relevante]

## 8. Control de Revisiones
[Registrar las revisiones y actualizaciones del manual]`,

	Objetivos: `# Objetivos de [Área o Departamento]

## Período: [Especificar el período de los objetivos]

| Objetivo | Indicador | Meta | Responsable | Fecha Límite | Estado |
|----------|-----------|------|-------------|--------------|--------|
|          |           |      |             |              |        |
|          |           |      |             |              |        |
|          |           |      |             |              |        |

## Instrucciones:
1. Definir objetivos SMART (Específicos, Medibles, Alcanzables, Relevantes y Temporales).
2. Asignar responsables para cada objetivo.
3. Realizar seguimiento regular y actualizar el estado.
4. Revisar y ajustar los objetivos según sea necesario.`,
};

const documentSamples = {
	Políticas: `# Política de Seguridad de la Información

## 1. Propósito
Esta política establece los principios y directrices para proteger la información de nuestra organización contra amenazas internas y externas.

## 2. Alcance
Esta política se aplica a todos los empleados, contratistas y terceros que tengan acceso a los sistemas de información de la empresa.

## 3. Declaración de la Política
Nuestra organización se compromete a:
- Proteger la confidencialidad, integridad y disponibilidad de la información.
- Cumplir con los requisitos legales y regulatorios aplicables.
- Proporcionar formación en seguridad de la información a todos los empleados.
- Gestionar los incidentes de seguridad de manera efectiva.

## 4. Responsabilidades
- Dirección: Aprobar y respaldar esta política.
- Departamento de TI: Implementar y mantener las medidas de seguridad.
- Empleados: Cumplir con esta política y reportar incidentes de seguridad.

## 5. Procedimientos Relacionados
- Procedimiento de Gestión de Accesos
- Procedimiento de Respuesta a Incidentes
- Procedimiento de Copias de Seguridad

## 6. Revisión y Actualización
Esta política será revisada anualmente o cuando se produzcan cambios significativos.

## 7. Aprobación
Aprobado por: Juan Pérez, Director General
Fecha: 15 de enero de 2024`,

	Procedimientos: `# Procedimiento de Auditoría Interna

## 1. Objetivo
Establecer un proceso sistemático para realizar auditorías internas que evalúen la conformidad y eficacia del sistema de gestión de calidad.

## 2. Alcance
Este procedimiento se aplica a todas las auditorías internas realizadas en la organización.

## 3. Responsabilidades
- Gerente de Calidad: Planificar y supervisar el programa de auditorías.
- Auditores Internos: Realizar las auditorías según lo planificado.
- Responsables de Área: Implementar acciones correctivas.

## 4. Definiciones
- Auditoría: Proceso sistemático, independiente y documentado para obtener evidencias y evaluarlas de manera objetiva.
- No Conformidad: Incumplimiento de un requisito.

## 5. Descripción del Procedimiento
1. Planificación de la auditoría
2. Preparación de la auditoría
3. Ejecución de la auditoría
4. Elaboración del informe de auditoría
5. Seguimiento de las acciones correctivas

## 6. Registros
- Plan anual de auditorías
- Informes de auditoría
- Registro de no conformidades y acciones correctivas

## 7. Referencias
- Norma ISO 9001:2015
- Manual de Calidad de la organización

## 8. Control de Cambios
Versión 1.0 - Creación del documento (01/02/2024)
Versión 1.1 - Actualización de responsabilidades (15/05/2024)`,

	Registros: `# Registro de No Conformidades

| Fecha | Descripción | Responsable | Observaciones |
|-------|-------------|-------------|---------------|
| 05/03/2024 | Producto fuera de especificaciones | Ana Gómez | Se detectó en control de calidad |
| 12/03/2024 | Documentación incompleta | Carlos Ruiz | Falta firma de aprobación |
| 20/03/2024 | Retraso en entrega | María López | Cliente notificado del retraso |

## Instrucciones:
1. Completar todos los campos para cada entrada.
2. Asegurarse de que la información sea precisa y completa.
3. Mantener este registro actualizado y accesible para auditorías.`,

	Manuales: `# Manual de Calidad

## 1. Introducción
Este manual describe el Sistema de Gestión de Calidad (SGC) de nuestra organización, diseñado para cumplir con los requisitos de la norma ISO 9001:2015.

## 2. Objetivo
Proporcionar una guía completa sobre nuestro SGC para asegurar la calidad de nuestros productos y servicios, y la satisfacción del cliente.

## 3. Alcance
Este manual abarca todos los procesos y actividades relacionados con el diseño, producción y entrega de nuestros productos y servicios.

## 4. Responsabilidades
- Alta Dirección: Proporcionar recursos y liderazgo para el SGC.
- Gerente de Calidad: Mantener y mejorar el SGC.
- Empleados: Cumplir con los procedimientos y contribuir a la mejora continua.

## 5. Contenido Principal
5.1 Contexto de la Organización
5.2 Liderazgo
5.3 Planificación
5.4 Apoyo
5.5 Operación
5.6 Evaluación del Desempeño
5.7 Mejora

## 6. Procedimientos Relacionados
- Procedimiento de Control de Documentos
- Procedimiento de Auditoría Interna
- Procedimiento de Acciones Correctivas y Preventivas

## 7. Anexos
- Política de Calidad
- Objetivos de Calidad
- Mapa de Procesos

## 8. Control de Revisiones
Revisión 1.0 - Creación inicial del manual (01/01/2024)
Revisión 1.1 - Actualización de la sección de liderazgo (15/04/2024)`,

	Objetivos: `# Objetivos de Calidad

## Período: Año 2024

| Objetivo | Indicador | Meta | Responsable | Fecha Límite | Estado |
|----------|-----------|------|-------------|--------------|--------|
| Reducir reclamaciones de clientes | Número de reclamaciones mensuales | < 5 | Dpto. Atención al Cliente | 31/12/2024 | En progreso |
| Mejorar eficiencia de producción | Tasa de productos conformes | > 98% | Dpto. Producción | 30/06/2024 | Alcanzado |
| Aumentar satisfacción del cliente | Puntuación en encuestas | > 4.5/5 | Dpto. Marketing | 31/12/2024 | En progreso |

## Instrucciones:
1. Definir objetivos SMART (Específicos, Medibles, Alcanzables, Relevantes y Temporales).
2. Asignar responsables para cada objetivo.
3. Realizar seguimiento regular y actualizar el estado.
4. Revisar y ajustar los objetivos según sea necesario.`,
};

// Initial documents data with more examples
const initialDocuments = [
	{
		id: 1,
		name: 'Política de Calidad',
		category: 'Políticas',
		status: 'high',
		lastUpdated: '2023-10-15',
		employee: {
			name: 'Ana García',
			avatar: '/placeholder.svg?height=32&width=32',
			points: 5,
		},
	},
	{
		id: 2,
		name: 'Procedimiento de Auditoría Interna',
		category: 'Procedimientos',
		status: 'medium',
		lastUpdated: '2023-09-22',
		employee: {
			name: 'Carlos López',
			avatar: '/placeholder.svg?height=32&width=32',
			points: 3,
		},
	},
	{
		id: 3,
		name: 'Registro de No Conformidades',
		category: 'Registros',
		status: 'low',
		lastUpdated: '2023-10-01',
		employee: {
			name: 'María Rodríguez',
			avatar: '/placeholder.svg?height=32&width=32',
			points: 1,
		},
	},
	{
		id: 4,
		name: 'Manual de Calidad',
		category: 'Manuales',
		status: 'high',
		lastUpdated: '2023-08-30',
		employee: {
			name: 'Juan Martínez',
			avatar: '/placeholder.svg?height=32&width=32',
			points: 5,
		},
	},
	{
		id: 5,
		name: 'Objetivos de Calidad',
		category: 'Objetivos',
		status: 'medium',
		lastUpdated: '2023-10-10',
		employee: {
			name: 'Laura Sánchez',
			avatar: '/placeholder.svg?height=32&width=32',
			points: 3,
		},
	},
	{
		id: 6,
		name: 'Procedimiento de Control de Documentos',
		category: 'Procedimientos',
		status: 'high',
		lastUpdated: '2023-11-05',
		employee: {
			name: 'Pedro Gómez',
			avatar: '/placeholder.svg?height=32&width=32',
			points: 4,
		},
	},
	{
		id: 7,
		name: 'Registro de Capacitación del Personal',
		category: 'Registros',
		status: 'medium',
		lastUpdated: '2023-11-12',
		employee: {
			name: 'Sofia Herrera',
			avatar: '/placeholder.svg?height=32&width=32',
			points: 2,
		},
	},
	{
		id: 8,
		name: 'Política de Seguridad de la Información',
		category: 'Políticas',
		status: 'low',
		lastUpdated: '2023-11-20',
		employee: {
			name: 'Diego Torres',
			avatar: '/placeholder.svg?height=32&width=32',
			points: 1,
		},
	},
	{
		id: 9,
		name: 'Manual de Procedimientos Operativos',
		category: 'Manuales',
		status: 'medium',
		lastUpdated: '2023-11-25',
		employee: {
			name: 'Carmen Vega',
			avatar: '/placeholder.svg?height=32&width=32',
			points: 3,
		},
	},
	{
		id: 10,
		name: 'Objetivos Estratégicos Anuales',
		category: 'Objetivos',
		status: 'high',
		lastUpdated: '2023-12-01',
		employee: {
			name: 'Javier Mendoza',
			avatar: '/placeholder.svg?height=32&width=32',
			points: 5,
		},
	},
	{
		id: 11,
		name: 'Procedimiento de Gestión de Riesgos',
		category: 'Procedimientos',
		status: 'medium',
		lastUpdated: '2023-12-05',
		employee: {
			name: 'Elena Vargas',
			avatar: '/placeholder.svg?height=32&width=32',
			points: 3,
		},
	},
	{
		id: 12,
		name: 'Registro de Acciones Correctivas',
		category: 'Registros',
		status: 'low',
		lastUpdated: '2023-12-10',
		employee: {
			name: 'Roberto Jiménez',
			avatar: '/placeholder.svg?height=32&width=32',
			points: 2,
		},
	},
];

const statusColors = {
	high: 'bg-green-500',
	medium: 'bg-yellow-500',
	low: 'bg-red-500',
};

const statusPoints = {
	high: 5,
	medium: 3,
	low: 1,
};

// Simulated initial notifications
const initialNotifications = [
	{
		id: 1,
		message: 'Nuevo documento añadido: Política de Seguridad',
		time: '2 horas atrás',
	},
	{
		id: 2,
		message: 'Documento actualizado: Manual de Calidad',
		time: '1 día atrás',
	},
	{
		id: 3,
		message: 'Recordatorio: Revisión anual de documentos',
		time: '3 días atrás',
	},
];

// Simulated training modules
const trainingModules = [
	{ id: 1, title: 'Introducción a ISO 9001', progress: 0 },
	{ id: 2, title: 'Principios de Gestión de Calidad', progress: 30 },
	{ id: 3, title: 'Implementación de Procesos', progress: 60 },
	{ id: 4, title: 'Auditoría Interna', progress: 0 },
	{ id: 5, title: 'Mejora Continua', progress: 90 },
];

export default function EnhancedDocumentRepository() {
	const [searchTerm, setSearchTerm] = useState('');
	const [categoryFilter, setCategoryFilter] = useState('Todas');
	const [isNewDocumentDialogOpen, setIsNewDocumentDialogOpen] =
		useState(false);
	const [isChatbotOpen, setIsChatbotOpen] = useState(false);
	const [chatMessages, setChatMessages] = useState([
		{ role: 'bot', content: '¡Hola! ¿En qué puedo ayudarte con ISO 9001?' },
	]);
	const [userMessage, setUserMessage] = useState('');
	const [documents, setDocuments] = useState(initialDocuments);
	const [newDocument, setNewDocument] = useState({
		name: '',
		category: '',
		status: 'low',
		lastUpdated: new Date().toISOString().split('T')[0],
		employee: {
			name: 'Usuario Actual',
			avatar: '/placeholder.svg?height=32&width=32',
			points: 0,
		},
	});
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(5);
	const [notifications, setNotifications] = useState(initialNotifications);
	const [selectedDocument, setSelectedDocument] = useState(null);
	const [isDocumentDialogOpen, setIsDocumentDialogOpen] = useState(false);
	const [isEditMode, setIsEditMode] = useState(false);
	const [editedContent, setEditedContent] = useState('');

	const filteredDocuments = documents.filter(
		(doc) =>
			doc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(categoryFilter === 'Todas' || doc.category === categoryFilter)
	);

	const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);
	const paginatedDocuments = filteredDocuments.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const handleSendMessage = () => {
		if (userMessage.trim()) {
			setChatMessages([
				...chatMessages,
				{ role: 'user', content: userMessage },
			]);
			// Simulate bot response (in a real app, this would call an AI service)
			setTimeout(() => {
				setChatMessages((prev) => [
					...prev,
					{
						role: 'bot',
						content:
							'Gracias por tu pregunta. Estoy procesando la información para darte la mejor respuesta posible sobre ISO 9001.',
					},
				]);
			}, 1000);
			setUserMessage('');
		}
	};

	const handleNewDocument = () => {
		if (newDocument.name && newDocument.category) {
			const newId = Math.max(...documents.map((doc) => doc.id)) + 1;
			setDocuments([
				...documents,
				{ ...newDocument, id: newId, status: 'low' },
			]);
			setNewDocument({
				name: '',
				category: '',
				status: 'low',
				lastUpdated: new Date().toISOString().split('T')[0],
				employee: {
					name: 'Usuario Actual',
					avatar: '/placeholder.svg?height=32&width=32',
					points: 0,
				},
			});
			setIsNewDocumentDialogOpen(false);
		}
	};

	const clearChatHistory = () => {
		setChatMessages([
			{
				role: 'bot',
				content: '¡Hola! ¿En qué puedo ayudarte con ISO 9001?',
			},
		]);
	};

	const handleItemsPerPageChange = (value: string) => {
		setItemsPerPage(Number(value));
		setCurrentPage(1); // Reset to first page when changing items per page
	};

	const clearNotification = (id: number) => {
		setNotifications(
			notifications.filter((notification) => notification.id !== id)
		);
	};

	const clearAllNotifications = () => {
		setNotifications([]);
	};

	const handleViewDocument = (doc) => {
		setSelectedDocument(doc);
		setEditedContent(
			doc.status === 'low'
				? documentTemplates[doc.category]
				: documentSamples[doc.category]
		);
		setIsEditMode(false);
		setIsDocumentDialogOpen(true);
	};

	const handleEditDocument = () => {
		setIsEditMode(true);
	};

	const handleSaveDocument = () => {
		// Here you would typically save the changes to your backend
		// For this example, we'll just update the local state
		setDocuments(
			documents.map((doc) =>
				doc.id === selectedDocument.id
					? {
							...doc,
							status: 'medium',
							lastUpdated: new Date().toISOString().split('T')[0],
					  }
					: doc
			)
		);
		setIsEditMode(false);
		setIsDocumentDialogOpen(false);
	};

	return (
		<div className='container mx-auto p-4 space-y-4'>
			<div className='flex justify-between items-center'>
				<h1 className='text-2xl font-bold'>
					Sistema de Gestión ISO 9001
				</h1>
				<div className='flex space-x-2'>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Popover>
									<PopoverTrigger asChild>
										<Button variant='outline' size='icon'>
											<Bell className='h-4 w-4' />
										</Button>
									</PopoverTrigger>
									<PopoverContent className='w-80'>
										<div className='space-y-4'>
											<div className='flex justify-between items-center'>
												<h3 className='font-medium'>
													Notificaciones
												</h3>
												<Button
													variant='ghost'
													size='sm'
													onClick={
														clearAllNotifications
													}
												>
													Limpiar todo
												</Button>
											</div>
											{notifications.length === 0 ? (
												<p className='text-sm text-gray-500'>
													No hay notificaciones
												</p>
											) : (
												notifications.map(
													(notification) => (
														<div
															key={
																notification.id
															}
															className='flex items-start space-x-2'
														>
															<Info className='h-5 w-5 text-blue-500 mt-0.5' />
															<div className='flex-grow'>
																<p className='text-sm'>
																	{
																		notification.message
																	}
																</p>
																<p className='text-xs text-gray-500'>
																	{
																		notification.time
																	}
																</p>
															</div>
															<Button
																variant='ghost'
																size='sm'
																onClick={() =>
																	clearNotification(
																		notification.id
																	)
																}
															>
																<X className='h-4 w-4' />
															</Button>
														</div>
													)
												)
											)}
										</div>
									</PopoverContent>
								</Popover>
							</TooltipTrigger>
							<TooltipContent>
								<p>Notificaciones</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>

					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant='outline'
									size='icon'
									onClick={() => setIsChatbotOpen(true)}
								>
									<MessageSquare className='h-4 w-4' />
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Chatbot de Soporte ISO 9001</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			</div>

			<Tabs defaultValue='documents' className='space-y-4'>
				<TabsList>
					<TabsTrigger value='documents'>Documentos</TabsTrigger>
					<TabsTrigger value='training'>
						Módulos de Capacitación
					</TabsTrigger>
				</TabsList>

				<TabsContent value='documents' className='space-y-4'>
					<div className='flex flex-col md:flex-row gap-4'>
						<div className='relative flex-grow'>
							<Input
								type='text'
								placeholder='Buscar documentos...'
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className='pl-10'
							/>
							<Search
								className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
								size={20}
							/>
						</div>

						<Select
							value={categoryFilter}
							onValueChange={setCategoryFilter}
						>
							<SelectTrigger className='w-full md:w-[200px]'>
								<SelectValue placeholder='Filtrar por categoría' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='Todas'>
									Todas las categorías
								</SelectItem>
								<SelectItem value='Políticas'>
									Políticas
								</SelectItem>
								<SelectItem value='Procedimientos'>
									Procedimientos
								</SelectItem>
								<SelectItem value='Registros'>
									Registros
								</SelectItem>
								<SelectItem value='Manuales'>
									Manuales
								</SelectItem>
								<SelectItem value='Objetivos'>
									Objetivos
								</SelectItem>
							</SelectContent>
						</Select>

						<Dialog
							open={isNewDocumentDialogOpen}
							onOpenChange={setIsNewDocumentDialogOpen}
						>
							<DialogTrigger asChild>
								<Button>
									<PlusCircle className='mr-2 h-4 w-4' />
									Nuevo Documento
								</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>
										Crear Nuevo Documento
									</DialogTitle>
									<DialogDescription>
										Ingrese los detalles del nuevo documento
										ISO 9001.
									</DialogDescription>
								</DialogHeader>
								<div className='grid gap-4 py-4'>
									<div className='grid grid-cols-4 items-center gap-4'>
										<label
											htmlFor='name'
											className='text-right'
										>
											Nombre
										</label>
										<Input
											id='name'
											className='col-span-3'
											value={newDocument.name}
											onChange={(e) =>
												setNewDocument({
													...newDocument,
													name: e.target.value,
												})
											}
										/>
									</div>
									<div className='grid grid-cols-4 items-center gap-4'>
										<label
											htmlFor='category'
											className='text-right'
										>
											Categoría
										</label>
										<Select
											value={newDocument.category}
											onValueChange={(value) =>
												setNewDocument({
													...newDocument,
													category: value,
												})
											}
										>
											<SelectTrigger className='w-full col-span-3'>
												<SelectValue placeholder='Seleccionar categoría' />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='Políticas'>
													Políticas
												</SelectItem>
												<SelectItem value='Procedimientos'>
													Procedimientos
												</SelectItem>
												<SelectItem value='Registros'>
													Registros
												</SelectItem>
												<SelectItem value='Manuales'>
													Manuales
												</SelectItem>
												<SelectItem value='Objetivos'>
													Objetivos
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>
								<DialogFooter>
									<Button
										type='submit'
										onClick={handleNewDocument}
									>
										Guardar documento
									</Button>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					</div>

					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Nombre del Documento</TableHead>
								<TableHead>Categoría</TableHead>
								<TableHead>Estado de Cumplimiento</TableHead>
								<TableHead>Última Actualización</TableHead>
								<TableHead>Empleado Responsable</TableHead>
								<TableHead>Acciones</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{paginatedDocuments.map((doc) => (
								<TableRow key={doc.id}>
									<TableCell className='font-medium'>
										{doc.name}
									</TableCell>
									<TableCell>{doc.category}</TableCell>
									<TableCell>
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger>
													<Badge
														className={`${
															statusColors[
																doc.status
															]
														} text-white`}
													>
														{doc.status === 'high'
															? 'Alto'
															: doc.status ===
															  'medium'
															? 'Medio'
															: 'Bajo'}
													</Badge>
												</TooltipTrigger>
												<TooltipContent>
													<p>
														Puntos:{' '}
														{
															statusPoints[
																doc.status
															]
														}
													</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</TableCell>
									<TableCell>{doc.lastUpdated}</TableCell>
									<TableCell>
										<div className='flex items-center space-x-2'>
											<Avatar>
												<AvatarImage
													src={doc.employee.avatar}
													alt={doc.employee.name}
												/>
												<AvatarFallback>
													{doc.employee.name
														.split(' ')
														.map((n) => n[0])
														.join('')}
												</AvatarFallback>
											</Avatar>
											<span>{doc.employee.name}</span>
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger>
														<Badge
															variant='outline'
															className='ml-2'
														>
															{
																doc.employee
																	.points
															}{' '}
															pts
														</Badge>
													</TooltipTrigger>
													<TooltipContent>
														<p>Puntos acumulados</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</div>
									</TableCell>
									<TableCell>
										<Button
											variant='outline'
											size='sm'
											onClick={() =>
												handleViewDocument(doc)
											}
										>
											<FileText className='w-4 h-4 mr-2' />
											Ver
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>

					<div className='flex items-center justify-between'>
						<div className='flex items-center space-x-2'>
							<p className='text-sm text-gray-500'>Mostrar</p>
							<Select
								value={itemsPerPage.toString()}
								onValueChange={handleItemsPerPageChange}
							>
								<SelectTrigger className='w-[70px]'>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='5'>5</SelectItem>
									<SelectItem value='10'>10</SelectItem>
									<SelectItem value='20'>20</SelectItem>
									<SelectItem value='50'>50</SelectItem>
								</SelectContent>
							</Select>
							<p className='text-sm text-gray-500'>por página</p>
						</div>
						<p className='text-sm text-gray-500'>
							Mostrando {(currentPage - 1) * itemsPerPage + 1} -{' '}
							{Math.min(
								currentPage * itemsPerPage,
								filteredDocuments.length
							)}{' '}
							de {filteredDocuments.length} documentos
						</p>
						<div className='flex space-x-2'>
							<Button
								variant='outline'
								size='sm'
								onClick={() =>
									setCurrentPage((prev) =>
										Math.max(1, prev - 1)
									)
								}
								disabled={currentPage === 1}
							>
								<ChevronLeft className='h-4 w-4 mr-2' />
								Anterior
							</Button>
							<Button
								variant='outline'
								size='sm'
								onClick={() =>
									setCurrentPage((prev) =>
										Math.min(totalPages, prev + 1)
									)
								}
								disabled={currentPage === totalPages}
							>
								Siguiente
								<ChevronRight className='h-4 w-4 ml-2' />
							</Button>
						</div>
					</div>
				</TabsContent>

				<TabsContent value='training' className='space-y-4'>
					<h2 className='text-xl font-semibold mb-4'>
						Módulos de Capacitación Interactivos
					</h2>
					<div className='grid gap-4'>
						{trainingModules.map((module) => (
							<div
								key={module.id}
								className='border rounded-lg p-4 space-y-2'
							>
								<div className='flex justify-between items-center'>
									<h3 className='font-medium'>
										{module.title}
									</h3>
									<Button variant='outline' size='sm'>
										<BookOpen className='w-4 h-4 mr-2' />
										{module.progress === 0
											? 'Comenzar'
											: 'Continuar'}
									</Button>
								</div>
								<Progress
									value={module.progress}
									className='w-full'
								/>
								<p className='text-sm text-gray-500'>
									{module.progress}% completado
								</p>
							</div>
						))}
					</div>
				</TabsContent>
			</Tabs>

			<Dialog open={isChatbotOpen} onOpenChange={setIsChatbotOpen}>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Chatbot de Soporte ISO 9001</DialogTitle>
						<DialogDescription>
							Haga sus preguntas sobre ISO 9001 y recibirá
							asistencia experta en tiempo real.
						</DialogDescription>
					</DialogHeader>
					<div className='h-[300px] overflow-y-auto border rounded p-4 mb-4'>
						{chatMessages.map((msg, index) => (
							<div
								key={index}
								className={`mb-2 ${
									msg.role === 'user' ? 'text-right' : ''
								}`}
							>
								<p className='font-bold'>
									{msg.role === 'user'
										? 'Usuario:'
										: 'Chatbot:'}
								</p>
								<p
									className={`inline-block p-2 rounded-lg ${
										msg.role === 'user'
											? 'bg-blue-100'
											: 'bg-gray-100'
									}`}
								>
									{msg.content}
								</p>
							</div>
						))}
					</div>
					<div className='flex gap-2'>
						<Input
							placeholder='Escriba su pregunta aquí...'
							value={userMessage}
							onChange={(e) => setUserMessage(e.target.value)}
							onKeyPress={(e) =>
								e.key === 'Enter' && handleSendMessage()
							}
						/>
						<Button onClick={handleSendMessage}>Enviar</Button>
					</div>
					<div className='mt-4 flex justify-end'>
						<Button variant='outline' onClick={clearChatHistory}>
							<Trash2 className='h-4 w-4 mr-2' />
							Limpiar historial
						</Button>
					</div>
				</DialogContent>
			</Dialog>

			<Dialog
				open={isDocumentDialogOpen}
				onOpenChange={setIsDocumentDialogOpen}
			>
				<DialogContent className='max-w-4xl h-[80vh] flex flex-col'>
					<DialogHeader>
						<DialogTitle className='flex items-center'>
							{selectedDocument?.name}
							<Badge
								className={`${
									statusColors[selectedDocument?.status]
								} text-white ml-2`}
							>
								{selectedDocument?.status === 'high'
									? 'Alto'
									: selectedDocument?.status === 'medium'
									? 'Medio'
									: 'Bajo'}
							</Badge>
						</DialogTitle>
						<DialogDescription>
							Categoría: {selectedDocument?.category} | Última
							actualización: {selectedDocument?.lastUpdated}
						</DialogDescription>
					</DialogHeader>
					<div className='flex-grow overflow-y-auto mt-4'>
						{isEditMode ? (
							<Textarea
								className='w-full h-full font-mono text-sm'
								value={editedContent}
								onChange={(e) =>
									setEditedContent(e.target.value)
								}
							/>
						) : (
							<div className='prose max-w-none'>
								<ReactMarkdown>{editedContent}</ReactMarkdown>
							</div>
						)}
					</div>
					<DialogFooter className='mt-4'>
						{isEditMode ? (
							<Button onClick={handleSaveDocument}>
								Guardar cambios
							</Button>
						) : (
							<Button onClick={handleEditDocument}>
								<Edit className='w-4 h-4 mr-2' />
								Editar
							</Button>
						)}
						<Button
							variant='outline'
							onClick={() => setIsDocumentDialogOpen(false)}
						>
							<Eye className='w-4 h-4 mr-2' />
							Cerrar
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
