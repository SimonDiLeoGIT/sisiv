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

interface ObjetivosDeCalidadTemplateProps {
	onCancel: () => void;
	onSave: () => void;
}

export default function ObjetivosDeCalidadTemplate({
	onCancel,
	onSave,
}: ObjetivosDeCalidadTemplateProps) {
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
					<Input id='periodo' placeholder='Ej: Año 2023' />
				</div>

				<div>
					<Label htmlFor='objetivo1'>Objetivo 1</Label>
					<Textarea
						id='objetivo1'
						placeholder='Describa el primer objetivo de calidad...'
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
					<Input
						id='indicador1'
						placeholder='Ej: Porcentaje de satisfacción del cliente'
					/>
				</div>

				<div>
					<Label htmlFor='meta1'>Meta para Objetivo 1</Label>
					<Input
						id='meta1'
						placeholder='Ej: Alcanzar un 95% de satisfacción del cliente'
					/>
				</div>

				<div>
					<Label htmlFor='objetivo2'>Objetivo 2</Label>
					<Textarea
						id='objetivo2'
						placeholder='Describa el segundo objetivo de calidad...'
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
					<Input
						id='indicador2'
						placeholder='Ej: Tiempo de entrega promedio'
					/>
				</div>

				<div>
					<Label htmlFor='meta2'>Meta para Objetivo 2</Label>
					<Input
						id='meta2'
						placeholder='Ej: Reducir el tiempo de entrega promedio a 3 días'
					/>
				</div>

				<div>
					<Label htmlFor='objetivo3'>Objetivo 3</Label>
					<Textarea
						id='objetivo3'
						placeholder='Describa el tercer objetivo de calidad...'
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
					<Input
						id='indicador3'
						placeholder='Ej: Número de no conformidades por mes'
					/>
				</div>

				<div>
					<Label htmlFor='meta3'>Meta para Objetivo 3</Label>
					<Input
						id='meta3'
						placeholder='Ej: Reducir las no conformidades en un 20% respecto al año anterior'
					/>
				</div>

				<div>
					<Label htmlFor='recursos'>Recursos Necesarios</Label>
					<Textarea
						id='recursos'
						placeholder='Describa los recursos necesarios para alcanzar estos objetivos...'
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
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Especifique quién es responsable de la implementación y
						seguimiento de cada objetivo
					</p>
				</div>

				<div>
					<Label htmlFor='revision'>Frecuencia de Revisión</Label>
					<Input id='revision' placeholder='Ej: Trimestral' />
				</div>

				<div className='flex justify-end space-x-2 mt-6'>
					<Link href={'/'} className='flex items-center justify-center p-2 border rounded-md hover:opacity-80'>
						Cancelar
					</Link>
					<Button onClick={onSave}>Guardar Objetivos</Button>
				</div>
			</CardContent>
		</Card>
	);
}
