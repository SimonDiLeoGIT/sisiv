'use client';

import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { InfoIcon } from 'lucide-react';
import Link from 'next/link';
import { initialDocuments } from '@/app/assets/initialDocuments';
import { useRouter } from 'next/navigation';
import { ManualType } from '@/app/interfaces/documentType';
import { Badge } from '@/components/ui/badge';

export default function ManualDeCalidadTemplate({
	params,
}: {
	params: { documentId: string };
}) {
	const [doc, setDoc] = React.useState<ManualType | undefined>(
		initialDocuments.find(
			(document) => document.id === parseInt(params.documentId)
		)
	);

	// Calculate the percentage of fields filled
	const calculatePercentageFilled = () => {
		if (!doc) return 0;
		const totalFields = Object.keys(doc.content).length;
		const filledFields = Object.values(doc.content).filter(
			(value) => value.trim() !== ''
		).length;
		return Math.round((filledFields / totalFields) * 100);
	};

	const percentageFilled = calculatePercentageFilled();

	// Determine badge color based on percentage
	const getBadgeColor = (percentage: number) => {
		if (percentage === 100) return 'bg-green-500';
		if (percentage >= 50) return 'bg-yellow-500';
		return 'bg-red-500';
	};

	function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		if (!doc) return;

		const updatedContent = {
			...doc.content,
			[e.target.id]: e.target.value,
		};

		setDoc((prevDoc) =>
			prevDoc ? { ...prevDoc, content: updatedContent } : undefined
		);
	}

	const router = useRouter();

	function handleSubmit() {
		router.replace('/');
	}

	return (
		<Card className='w-full max-w-4xl mx-auto my-4'>
			<CardHeader>
				<div className='flex justify-between items-center'>
					<CardTitle>Plantilla de Manual de Calidad</CardTitle>
					<Badge
						className={`${getBadgeColor(
							percentageFilled
						)} text-white`}
					>
						{percentageFilled}% Completado
					</Badge>
				</div>
				<CardDescription>
					Complete las siguientes secciones para crear su Manual de
					Calidad ISO 9001
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-6'>
				<div>
					<Label htmlFor='nombre-empresa'>Nombre de la Empresa</Label>
					<Textarea
						id='nombre-empresa'
						placeholder='Ingrese el nombre de su empresa...'
						value={doc?.content['nombre-empresa'] || ''}
						onChange={handleInputChange}
					/>
				</div>

				<div>
					<Label htmlFor='alcance'>
						Alcance del Sistema de Gestión de Calidad
					</Label>
					<Textarea
						id='alcance'
						placeholder='Defina el alcance de su Sistema de Gestión de Calidad...'
						value={doc?.content['alcance'] || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya productos/servicios cubiertos y cualquier
						exclusión justificada
					</p>
				</div>

				<div>
					<Label htmlFor='politica-calidad'>
						Política de Calidad
					</Label>
					<Textarea
						id='politica-calidad'
						placeholder='Incluya la política de calidad de su organización...'
						value={doc?.content['politica-calidad'] || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Asegúrese de que sea apropiada al propósito y contexto
						de la organización
					</p>
				</div>

				<div>
					<Label htmlFor='objetivos-calidad'>
						Objetivos de Calidad
					</Label>
					<Textarea
						id='objetivos-calidad'
						placeholder='Liste los objetivos de calidad de su organización...'
						value={doc?.content['objetivos-calidad'] || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Los objetivos deben ser medibles y coherentes con la
						política de calidad
					</p>
				</div>

				<div>
					<Label htmlFor='estructura-organizacional'>
						Estructura Organizacional
					</Label>
					<Textarea
						id='estructura-organizacional'
						placeholder='Describa la estructura organizacional relevante para el SGC...'
						value={doc?.content['estructura-organizacional'] || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya roles, responsabilidades y autoridades clave
					</p>
				</div>

				<div>
					<Label htmlFor='procesos'>Procesos del SGC</Label>
					<Textarea
						id='procesos'
						placeholder='Enumere y describa brevemente los procesos clave del SGC...'
						value={doc?.content['procesos'] || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya procesos principales, de apoyo y de gestión
					</p>
				</div>

				<div>
					<Label htmlFor='documentacion'>Documentación del SGC</Label>
					<Textarea
						id='documentacion'
						placeholder='Liste los principales documentos y registros del SGC...'
						value={doc?.content['documentacion'] || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya procedimientos documentados, instrucciones de
						trabajo y formatos clave
					</p>
				</div>

				<div>
					<Label htmlFor='mejora-continua'>Mejora Continua</Label>
					<Textarea
						id='mejora-continua'
						placeholder='Describa el enfoque de la organización hacia la mejora continua...'
						value={doc?.content['mejora-continua'] || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Explique cómo se utilizan las auditorías, revisiones y
						acciones correctivas para mejorar
					</p>
				</div>

				<div className='flex justify-end space-x-2 mt-6'>
					<Link
						href={'/'}
						className='flex items-center justify-center p-2 border rounded-md hover:opacity-80'
					>
						Cancelar
					</Link>
					<Button onClick={handleSubmit}>Guardar Manual</Button>
				</div>
			</CardContent>
		</Card>
	);
}
