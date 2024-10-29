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

import {
	Search,
	FileText,
	Info,
	PlusCircle,
	Bell,
	MessageSquare,
} from 'lucide-react';

// Simulación de documentos con información de empleados y puntuación
const documents = [
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

// Simulación de notificaciones
const notifications = [
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

export default function DocumentRepository() {
	const [searchTerm, setSearchTerm] = useState('');
	const [categoryFilter, setCategoryFilter] = useState('Todas');
	const [isNewDocumentDialogOpen, setIsNewDocumentDialogOpen] =
		useState(false);
	const [isChatbotOpen, setIsChatbotOpen] = useState(false);

	const filteredDocuments = documents.filter(
		(doc) =>
			doc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(categoryFilter === 'Todas' || doc.category === categoryFilter)
	);

	return (
		<div className='container mx-auto p-4 space-y-4'>
			<div className='flex justify-between items-center'>
				<h1 className='text-2xl font-bold'>
					Biblioteca de Documentos ISO 9001
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
											<h3 className='font-medium'>
												Notificaciones
											</h3>
											{notifications.map(
												(notification) => (
													<div
														key={notification.id}
														className='flex items-start space-x-2'
													>
														<Info className='h-5 w-5 text-blue-500 mt-0.5' />
														<div>
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
													</div>
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
						<SelectItem value='Políticas'>Políticas</SelectItem>
						<SelectItem value='Procedimientos'>
							Procedimientos
						</SelectItem>
						<SelectItem value='Registros'>Registros</SelectItem>
						<SelectItem value='Manuales'>Manuales</SelectItem>
						<SelectItem value='Objetivos'>Objetivos</SelectItem>
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
							<DialogTitle>Crear Nuevo Documento</DialogTitle>
							<DialogDescription>
								Ingrese los detalles del nuevo documento ISO
								9001.
							</DialogDescription>
						</DialogHeader>
						<div className='grid gap-4 py-4'>
							<div className='grid grid-cols-4 items-center gap-4'>
								<label htmlFor='name' className='text-right'>
									Nombre
								</label>
								<Input id='name' className='col-span-3' />
							</div>
							<div className='grid grid-cols-4 items-center gap-4'>
								<label
									htmlFor='category'
									className='text-right'
								>
									Categoría
								</label>
								<Select>
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
							<Button type='submit'>Guardar documento</Button>
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
					{filteredDocuments.map((doc) => (
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
													statusColors[doc.status]
												} text-white`}
											>
												{doc.status === 'high'
													? 'Alto'
													: doc.status === 'medium'
													? 'Medio'
													: 'Bajo'}
											</Badge>
										</TooltipTrigger>
										<TooltipContent>
											<p>
												Puntos:{' '}
												{statusPoints[doc.status]}
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
													{doc.employee.points} pts
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
								<Button variant='outline' size='sm'>
									<FileText className='w-4 h-4 mr-2' />
									Ver
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<Dialog open={isChatbotOpen} onOpenChange={setIsChatbotOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Chatbot de Soporte ISO 9001</DialogTitle>
						<DialogDescription>
							Haga sus preguntas sobre ISO 9001 y recibirá
							asistencia experta.
						</DialogDescription>
					</DialogHeader>
					<div className='h-[300px] overflow-y-auto border rounded p-4 mb-4'>
						{/* Aquí iría el historial de chat */}
						<div className='mb-2'>
							<p className='font-bold'>Usuario:</p>
							<p>
								¿Cuáles son los principales requisitos de la ISO
								9001?
							</p>
						</div>
						<div className='mb-2'>
							<p className='font-bold'>Chatbot:</p>
							<p>
								Los principales requisitos de la ISO 9001
								incluyen:
							</p>
							<ul className='list-disc pl-5'>
								<li>Contexto de la organización</li>
								<li>Liderazgo</li>
								<li>Planificación</li>
								<li>Soporte</li>
								<li>Operación</li>
								<li>Evaluación del desempeño</li>
								<li>Mejora</li>
							</ul>
							<p>
								Cada uno de estos requisitos tiene
								sub-requisitos específicos que deben cumplirse
								para la certificación.
							</p>
						</div>
					</div>
					<div className='flex gap-2'>
						<Input placeholder='Escriba su pregunta aquí...' />
						<Button>Enviar</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
