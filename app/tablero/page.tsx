'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, Trophy, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

interface Tarea {
	id: string;
	titulo: string;
	puntos: number;
	completada: boolean;
	fechaLimite: Date;
	equipoResponsable: string;
}

const tareasMensuales: Tarea[] = [
	{
		id: 'm1',
		titulo: 'Revisar y actualizar la política de calidad',
		puntos: 50,
		completada: false,
		fechaLimite: new Date(2023, 11, 31),
		equipoResponsable: 'Equipo de Calidad',
	},
	{
		id: 'm2',
		titulo: 'Realizar auditoría interna',
		puntos: 100,
		completada: false,
		fechaLimite: new Date(2023, 11, 15),
		equipoResponsable: 'Equipo de Auditoría',
	},
	{
		id: 'm3',
		titulo: 'Analizar retroalimentación del cliente',
		puntos: 75,
		completada: false,
		fechaLimite: new Date(2023, 11, 20),
		equipoResponsable: 'Equipo de Atención al Cliente',
	},
	{
		id: 'm4',
		titulo: 'Actualizar evaluación de riesgos',
		puntos: 80,
		completada: false,
		fechaLimite: new Date(2023, 11, 25),
		equipoResponsable: 'Equipo de Gestión de Riesgos',
	},
];

const tareasSemanaless: Tarea[] = [
	{
		id: 's1',
		titulo: 'Revisar no conformidades',
		puntos: 30,
		completada: false,
		fechaLimite: new Date(2023, 11, 10),
		equipoResponsable: 'Equipo de Calidad',
	},
	{
		id: 's2',
		titulo: 'Actualizar documentación de procesos',
		puntos: 40,
		completada: false,
		fechaLimite: new Date(2023, 11, 12),
		equipoResponsable: 'Equipo de Documentación',
	},
	{
		id: 's3',
		titulo: 'Realizar sesión de capacitación del equipo',
		puntos: 50,
		completada: false,
		fechaLimite: new Date(2023, 11, 14),
		equipoResponsable: 'Equipo de Recursos Humanos',
	},
	{
		id: 's4',
		titulo: 'Verificar calibración de equipos de medición',
		puntos: 25,
		completada: false,
		fechaLimite: new Date(2023, 11, 11),
		equipoResponsable: 'Equipo de Mantenimiento',
	},
];

export function ISO9001Missions() {
	const [tareas, setTareas] = useState({
		mensuales: tareasMensuales,
		semanales: tareasSemanaless,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setTareas((prevTareas) => ({
				mensuales: prevTareas.mensuales.map((tarea) => ({
					...tarea,
					completada: Math.random() < 0.1 ? true : tarea.completada,
				})),
				semanales: prevTareas.semanales.map((tarea) => ({
					...tarea,
					completada: Math.random() < 0.2 ? true : tarea.completada,
				})),
			}));
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const calcularPuntos = (listaTareas: Tarea[]) => {
		return listaTareas.reduce(
			(suma, tarea) => suma + (tarea.completada ? tarea.puntos : 0),
			0
		);
	};

	const calcularDiasRestantes = (fechaLimite: Date) => {
		const hoy = new Date();
		const diferencia = fechaLimite.getTime() - hoy.getTime();
		const diasRestantes = Math.ceil(diferencia / (1000 * 3600 * 24));
		return diasRestantes > 0 ? diasRestantes : 0;
	};

	const ListaTareas = ({ tareas }: { tareas: Tarea[] }) => (
		<ul className='space-y-4'>
			{tareas.map((tarea) => (
				<motion.li
					key={tarea.id}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					className='flex items-center justify-between p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow'
				>
					<div className='flex items-center space-x-3 flex-grow'>
						<div className='text-primary flex-shrink-0'>
							{tarea.completada ? (
								<CheckCircle className='h-6 w-6' />
							) : (
								<Circle className='h-6 w-6' />
							)}
						</div>
						<span
							className={`text-sm ${
								tarea.completada
									? 'line-through text-muted-foreground'
									: ''
							}`}
						>
							{tarea.titulo}
						</span>
					</div>
					<div className='flex items-center space-x-2 flex-shrink-0'>
						<Badge
							variant={tarea.completada ? 'secondary' : 'outline'}
						>
							{tarea.puntos} pts
						</Badge>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<div className='flex items-center space-x-1 text-sm text-muted-foreground'>
										<Clock className='h-4 w-4' />
										<span>
											{calcularDiasRestantes(
												tarea.fechaLimite
											)}{' '}
											días
										</span>
									</div>
								</TooltipTrigger>
								<TooltipContent>
									<p>
										Equipo Responsable:{' '}
										{tarea.equipoResponsable}
									</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
				</motion.li>
			))}
		</ul>
	);

	return (
		<Card className='w-full py-4'>
			<CardContent>
				<div className='bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 rounded'>
					<div className='flex'>
						<div className='flex-shrink-0'>
							<AlertCircle className='h-5 w-5 text-yellow-500' />
						</div>
						<div className='ml-3'>
							<p className='text-sm'>
								Las tareas se marcan automáticamente como
								completadas por los equipos responsables.
							</p>
						</div>
					</div>
				</div>
				<Tabs defaultValue='mensuales' className='w-full'>
					<TabsList className='grid w-full grid-cols-2 mb-4'>
						<TabsTrigger value='mensuales'>
							Misiones Mensuales
						</TabsTrigger>
						<TabsTrigger value='semanales'>
							Misiones Semanales
						</TabsTrigger>
					</TabsList>
					<TabsContent value='mensuales'>
						<ListaTareas tareas={tareas.mensuales} />
					</TabsContent>
					<TabsContent value='semanales'>
						<ListaTareas tareas={tareas.semanales} />
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
}

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

// Updated sample data for the gamification board with real company areas
const gamificationData = {
	areas: [
		'Recursos Humanos',
		'Producción',
		'Ventas',
		'Marketing',
		'Finanzas',
		'Calidad',
	],
	people: [
		'Ana García',
		'Carlos López',
		'María Rodríguez',
		'Juan Martínez',
		'Laura Sánchez',
	],
	scores: [
		[15, 12, 8, 10, 14],
		[20, 18, 15, 17, 19],
		[22, 20, 18, 21, 23],
		[10, 13, 11, 9, 12],
		[18, 16, 14, 17, 15],
		[25, 23, 21, 24, 22],
	],
};

export default function GamificationBoard() {
	const totalScores = gamificationData.scores.map((row) =>
		row.reduce((a, b) => a + b, 0)
	);
	const highestScoreIndex = totalScores.indexOf(Math.max(...totalScores));

	return (
		<div className='space-y-8 w-4/5 mx-auto py-4'>
			<Card>
				<CardHeader>
					<CardTitle className='flex items-center'>
						<Trophy className='mr-2' />
						Tabla de Puntuaciones por Área - ISO 9001
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Área / Persona</TableHead>
								{gamificationData.people.map(
									(person, index) => (
										<TableHead key={index}>
											{person}
										</TableHead>
									)
								)}
								<TableHead>Total</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{gamificationData.areas.map((area, rowIndex) => (
								<TableRow
									key={rowIndex}
									className={
										rowIndex === highestScoreIndex
											? 'bg-primary/10'
											: ''
									}
								>
									<TableCell className='font-medium'>
										{area}
									</TableCell>
									{gamificationData.scores[rowIndex].map(
										(score, colIndex) => (
											<TableCell key={colIndex}>
												{score}
											</TableCell>
										)
									)}
									<TableCell className='font-bold'>
										{totalScores[rowIndex]}
										{rowIndex === highestScoreIndex && (
											<Trophy
												className='inline-block ml-2 text-yellow-500'
												size={16}
											/>
										)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>

			<ISO9001Missions />
		</div>
	);
}
