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
import { useRouter } from 'next/navigation';
import { PolitciesType } from '@/app/interfaces/documentType';
import { initialDocuments } from '@/app/assets/initialDocuments';
import { Badge } from '@/components/ui/badge';

export default function PoliticaDeCalidadTemplate({
	params,
}: {
	params: { documentId: string };
}) {
	const [doc, setDoc] = React.useState<PolitciesType | undefined>(
		initialDocuments.find(
			(document) => document.id === parseInt(params.documentId)
		)
	);

	function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		if (!doc) return; // Exit early if doc is undefined

		// Create a new content object by updating the specific field
		const updatedContent = {
			...doc.content,
			[e.target.id]: e.target.value,
		};

		// Use a functional update to set the document state
		setDoc((prevDoc) =>
			prevDoc ? { ...prevDoc, content: updatedContent } : undefined
		);
	}

	const router = useRouter();

	function handleSubmit() {
		router.replace('/');
	}

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

	return (
		<Card className='w-full max-w-4xl mx-auto my-4'>
			<CardHeader>
				<div className='flex justify-between items-center'>
					<CardTitle>Plantilla de Política de Calidad</CardTitle>
					<Badge
						className={`${getBadgeColor(
							percentageFilled
						)} text-white`}
					>
						{percentageFilled}% Completado
					</Badge>
				</div>
				<CardDescription>
					Complete las siguientes secciones para crear su Política de
					Calidad ISO 9001
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-6'>
				<div>
					<Label htmlFor='Compromiso'>
						Compromiso con la Calidad
					</Label>
					<Textarea
						id='Compromiso'
						placeholder='Describa el compromiso de la organización con la calidad...'
						value={doc?.content?.Compromiso || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya una declaración clara del compromiso de la alta
						dirección con la calidad
					</p>
				</div>

				<div>
					<Label htmlFor='Objetivo'>Objetivos Principales</Label>
					<Textarea
						id='Objetivo'
						placeholder='Enumere los objetivos principales de calidad...'
						value={doc?.content?.Objetivo || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Defina objetivos medibles y alcanzables que se alineen
						con la dirección estratégica
					</p>
				</div>

				<div>
					<Label htmlFor='mejora-continua'>Mejora Continua</Label>
					<Textarea
						id='mejora-continua'
						placeholder='Describa el enfoque de la organización hacia la mejora continua...'
						value={doc?.content?.['mejora-continua'] || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Explique cómo la organización se compromete a mejorar
						continuamente sus procesos y servicios
					</p>
				</div>

				<div>
					<Label htmlFor='satisfaccion-cliente'>
						Satisfacción del Cliente
					</Label>
					<Textarea
						id='satisfaccion-cliente'
						placeholder='Detalle el compromiso con la satisfacción del cliente...'
						value={doc?.content?.['satisfaccion-cliente'] || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya cómo la organización se enfoca en cumplir y
						superar las expectativas del cliente
					</p>
				</div>

				<div>
					<Label htmlFor='cumplimiento'>
						Cumplimiento de Requisitos
					</Label>
					<Textarea
						id='cumplimiento'
						placeholder='Indique el compromiso con el cumplimiento de requisitos...'
						value={doc?.content?.cumplimiento || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Mencione el compromiso de cumplir con los requisitos
						legales, reglamentarios y del cliente
					</p>
				</div>

				<div className='flex justify-end space-x-2 mt-6'>
					<Link
						href={'/'}
						className='flex items-center justify-center p-2 border rounded-md hover:opacity-80'
					>
						Cancelar
					</Link>
					<Button onClick={handleSubmit}>Guardar Documento</Button>
				</div>
			</CardContent>
		</Card>
	);
}
