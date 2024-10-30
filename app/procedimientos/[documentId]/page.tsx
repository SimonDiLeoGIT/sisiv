'use client'

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
import { useRouter } from 'next/router';

import { initialDocuments } from '../../assets/initialDocuments';
import { ProcedureType } from '@/app/interfaces/documentType';

// This could be a state in a higher-level component or a context

export default function ProcedimientoAuditoriaInternaTemplate({
	params
}: {
	params: {documentId: string},
}) {

	const [doc, setDoc] = React.useState<ProcedureType | undefined>(
    initialDocuments.find((document) => document.id === parseInt(params.documentId))
  );
  
	function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (!doc) return; // Exit early if doc is undefined

    // Create a new content object by updating the specific field
    const updatedContent = {
      ...doc.content,
      [e.target.id]: e.target.value,
    };

    // Use a functional update to set the document state
    setDoc((prevDoc) => prevDoc ? { ...prevDoc, content: updatedContent } : undefined);
  }
	
	const router = useRouter();

	function handleSubmit(e: React.FormEvent<HTMLFormcdElement>) {
		e.preventDefault();
		router.push('/');
	}

	return (
		<Card className='w-full max-w-4xl mx-auto my-4'>
			<CardHeader>
				<CardTitle>
					Plantilla de Procedimiento de Auditoría Interna
				</CardTitle>
				<CardDescription>
					Complete las siguientes secciones para crear su
					Procedimiento de Auditoría Interna ISO 9001
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-6'>
				<div>
					<Label htmlFor='Objetivo_y_Alcance'>Objetivo y Alcance</Label>
					<Textarea
						id='Objetivo_y_Alcance'
						placeholder='Defina el objetivo y alcance del procedimiento de auditoría interna...'
						value={doc?.content.Objetivo_y_Alcance || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Especifique el propósito de las auditorías internas y
						qué áreas de la organización cubren
					</p>
				</div>

				<div>
					<Label htmlFor='Responsabilidades'>Responsabilidades</Label>
					<Textarea
						id='Responsabilidades'
						placeholder='Detalle las responsabilidades de los involucrados en el proceso de auditoría...'
						value={doc?.content.Responsabilidades || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya roles como auditor líder, equipo auditor,
						auditados y alta dirección
					</p>
				</div>

				<div>
					<Label htmlFor='Planificación_de_Auditorías'>
						Planificación de Auditorías
					</Label>
					<Textarea
						id='Planificación_de_Auditorías'
						placeholder='Describa cómo se planifican las auditorías internas...'
						value={doc?.content.Planificación_de_Auditorías || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya la frecuencia, criterios para seleccionar
						auditores y áreas a auditar
					</p>
				</div>

				<div>
					<Label htmlFor='Ejecución_de_la_Auditoría'>Ejecución de la Auditoría</Label>
					<Textarea
						id='Ejecución_de_la_Auditoría'
						placeholder='Detalle los pasos para realizar la auditoría...'
						value={doc?.content?.Ejecución_de_la_Auditoría || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya reunión de apertura, recolección de evidencias,
						y reunión de cierre
					</p>
				</div>

				<div>
					<Label htmlFor='Informe_de_Auditoría'>Informe de Auditoría</Label>
					<Textarea
						id='Informe_de_Auditoría'
						placeholder='Describa el proceso de elaboración y contenido del informe de auditoría...'
						value={doc?.content?.Informe_de_Auditoría || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Especifique qué debe incluir el informe y cómo se
						comunica
					</p>
				</div>

				<div>
					<Label htmlFor='Seguimiento_y_Cierre'>Seguimiento y Cierre</Label>
					<Textarea
						id='Seguimiento_y_Cierre'
						placeholder='Explique cómo se realiza el seguimiento de las acciones correctivas...'
						value={doc?.content?.Seguimiento_y_Cierre || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya plazos para implementar acciones correctivas y
						verificar su eficacia
					</p>
				</div>

				<div className='flex justify-end space-x-2 mt-6'>
					<Link href={'/'} className='flex items-center justify-center p-2 border rounded-md hover:opacity-80'>
						Cancelar
					</Link>
					<Button onClick={() => handleSubmit}>Guardar Documento</Button>
				</div>
			</CardContent>
		</Card>
	);
}
