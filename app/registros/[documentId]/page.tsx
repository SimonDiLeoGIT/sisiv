'use client'

import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { InfoIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RecordsType } from '@/app/interfaces/documentType';
import { initialDocuments } from '@/app/assets/initialDocuments';

export default function RegistroNoConformidadesTemplate({
	params
}: {
	params: {documentId: string},
}) {

	const [doc, setDoc] = React.useState<RecordsType | undefined>(
    initialDocuments.find((document) => document.id === parseInt(params.documentId))
  );

	function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
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

	function handleSubmit() {
		router.replace('/');
	}

	return (
		<Card className='w-full max-w-4xl my-4 mx-auto'>
			<CardHeader>
				<CardTitle>Plantilla de Registro de No Conformidades</CardTitle>
				<CardDescription>
					Complete las siguientes secciones para documentar una No
					Conformidad
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-6'>
				<div>
					<Label htmlFor='id-no-conformidad'>
						ID de No Conformidad
					</Label>
					<Input
						id='id-no-conformidad'
						placeholder='Ingrese el número o código de identificación'
						value={doc?.content.id_no_conformidad || ''}
						onChange={handleInputChange}
					/>
				</div>

				<div>
					<Label htmlFor='fecha-deteccion'>Fecha de Detección</Label>
					<Input id='fecha-deteccion' type='date' 
					value={doc?.content.fecha_deteccion || ''}
					onChange={handleInputChange}
					/>
				</div>

				<div>
					<Label htmlFor='descripcion'>
						Descripción de la No Conformidad
					</Label>
					<Textarea
						id='descripcion'
						placeholder='Describa detalladamente la no conformidad detectada...'
						value={doc?.content.descripcion || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Sea específico y objetivo en la descripción del problema
					</p>
				</div>

				<div>
					<Label htmlFor='area-proceso'>
						Área o Proceso Afectado
					</Label>
					<Input
						id='area-proceso'
						placeholder='Indique el área o proceso donde se detectó la no conformidad'
						value={doc?.content.area_proceso || ''}
						onChange={handleInputChange}
					/>
				</div>

				<div>
					<Label htmlFor='causa-raiz'>Análisis de Causa Raíz</Label>
					<Textarea
						id='causa-raiz'
						placeholder='Describa la(s) causa(s) raíz identificada(s)...'
						value={doc?.content.causa_raiz || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Utilice técnicas como los 5 Por qués o el Diagrama de
						Ishikawa para el análisis
					</p>
				</div>

				<div>
					<Label htmlFor='accion-correctiva'>
						Acción Correctiva Propuesta
					</Label>
					<Textarea
						id='accion-correctiva'
						placeholder='Detalle la acción correctiva a implementar...'
						value={doc?.content.accion_correctiva || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						La acción debe abordar la causa raíz para prevenir la
						recurrencia
					</p>
				</div>

				<div>
					<Label htmlFor='responsable'>
						Responsable de la Acción
					</Label>
					<Input
						id='responsable'
						placeholder='Nombre del responsable de implementar la acción correctiva'
						value={doc?.content.responsable || ''}
						onChange={handleInputChange}
					/>
				</div>

				<div>
					<Label htmlFor='fecha-implementacion'>
						Fecha Prevista de Implementación
					</Label>
					<Input id='fecha-implementacion' type='date' 
					value={doc?.content.fecha_implementacion || ''}
					onChange={handleInputChange}
					/>
				</div>

				<div>
					<Label htmlFor='seguimiento'>
						Seguimiento y Verificación
					</Label>
					<Textarea
						id='seguimiento'
						placeholder='Describa cómo se verificará la eficacia de la acción correctiva...'
						value={doc?.content.seguimiento || ''}
						onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya métodos de verificación y fechas de seguimiento
					</p>
				</div>

				<div className='flex justify-end space-x-2 mt-6'>
					<Link href={'/'} className='flex items-center justify-center p-2 border rounded-md hover:opacity-80'>
						Cancelar
					</Link>
					<Button onClick={handleSubmit}>Guardar Registro</Button>
				</div>
			</CardContent>
		</Card>
	);
}