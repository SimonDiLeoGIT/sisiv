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
import { initialDocuments } from '@/app/assets/initialDocuments';
import { GoalsType } from '@/app/interfaces/documentType';
import { useRouter } from 'next/navigation';

export default function ObjetivosDeCalidadTemplate({
	params
}: {
	params: {documentId: string},
}) {

	const [doc, setDoc] = React.useState<GoalsType | undefined>(
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

	function handleSubmit() {
		router.replace('/');
	}

	return (
		<Card className='w-full max-w-4xl mx-auto my-4'>
			<CardHeader>
				<CardTitle>Plantilla de Objetivos de Calidad</CardTitle>
				<CardDescription>
					Complete las siguientes secciones para definir los Objetivos
					de Calidad de su organización
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-6'>
				<div>
					<Label htmlFor='periodo'>Período</Label>
					<Textarea id='periodo' placeholder='Ej: Año 2023' value={doc?.content.periodo || ''} onChange={handleInputChange}/>
				</div>

				<div>
					<Label htmlFor='objetivo1'>Objetivo 1</Label>
					<Textarea
						id='objetivo1'
						placeholder='Describa el primer objetivo de calidad...'
						value={doc?.content.objetivo1 || ''} onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Asegúrese de que el objetivo sea específico, medible,
						alcanzable, relevante y con un plazo definido (SMART)
					</p>
				</div>

				<div>
					<Label htmlFor='indicador1'>
						Indicador para Objetivo 1
					</Label>
					<Textarea
						id='indicador1'
						placeholder='Ej: Porcentaje de satisfacción del cliente'
						value={doc?.content.indicador1 || ''} onChange={handleInputChange}
					/>
				</div>

				<div>
					<Label htmlFor='meta1'>Meta para Objetivo 1</Label>
					<Textarea
						id='meta1'
						placeholder='Ej: Alcanzar un 95% de satisfacción del cliente'
						value={doc?.content.meta1 || ''} onChange={handleInputChange}
					/>
				</div>

				<div>
					<Label htmlFor='objetivo2'>Objetivo 2</Label>
					<Textarea
						id='objetivo2'
						placeholder='Describa el segundo objetivo de calidad...'
						value={doc?.content.objetivo2 || ''} onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Alinee este objetivo con la política de calidad y la
						dirección estratégica de la organización
					</p>
				</div>

				<div>
					<Label htmlFor='indicador2'>
						Indicador para Objetivo 2
					</Label>
					<Textarea
						id='indicador2'
						placeholder='Ej: Tiempo de entrega promedio'
						value={doc?.content.indicador2 || ''} onChange={handleInputChange}
					/>
				</div>

				<div>
					<Label htmlFor='meta2'>Meta para Objetivo 2</Label>
					<Textarea
						id='meta2'
						placeholder='Ej: Reducir el tiempo de entrega promedio a 3 días'
						value={doc?.content.meta2 || ''} onChange={handleInputChange}
					/>
				</div>

				<div>
					<Label htmlFor='objetivo3'>Objetivo 3</Label>
					<Textarea
						id='objetivo3'
						placeholder='Describa el tercer objetivo de calidad...'
						value={doc?.content.objetivo3 || ''} onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Considere incluir objetivos relacionados con la mejora
						de procesos internos
					</p>
				</div>

				<div>
					<Label htmlFor='indicador3'>
						Indicador para Objetivo 3
					</Label>
					<Textarea
						id='indicador3'
						placeholder='Ej: Número de no conformidades por mes'
						value={doc?.content.indicador3 || ''} onChange={handleInputChange}
					/>
				</div>

				<div>
					<Label htmlFor='meta3'>Meta para Objetivo 3</Label>
					<Textarea
						id='meta3'
						placeholder='Ej: Reducir las no conformidades en un 20% respecto al año anterior'
						value={doc?.content.meta3 || ''} onChange={handleInputChange}
					/>
				</div>

				<div>
					<Label htmlFor='recursos'>Recursos Necesarios</Label>
					<Textarea
						id='recursos'
						placeholder='Describa los recursos necesarios para alcanzar estos objetivos...'
						value={doc?.content.recursos || ''} onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya recursos humanos, financieros, tecnológicos,
						etc.
					</p>
				</div>

				<div>
					<Label htmlFor='responsables'>Responsables</Label>
					<Textarea
						id='responsables'
						placeholder='Indique los responsables de cada objetivo...'
						value={doc?.content.responsables || ''} onChange={handleInputChange}
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Especifique quién es responsable de la implementación y
						seguimiento de cada objetivo
					</p>
				</div>

				<div>
					<Label htmlFor='revision'>Frecuencia de Revisión</Label>
					<Textarea 
						id='revision' placeholder='Ej: Trimestral' 
						value={doc?.content.revision || ''} onChange={handleInputChange}
					/>
				</div>

				<div className='flex justify-end space-x-2 mt-6'>
					<Link href={'/'} className='flex items-center justify-center p-2 border rounded-md hover:opacity-80'>
						Cancelar
					</Link>
					<Button onClick={handleSubmit}>Guardar Objetivos</Button>
				</div>
			</CardContent>
		</Card>
	);
}
