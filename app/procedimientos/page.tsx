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

interface ProcedimientoAuditoriaInternaTemplateProps {
	onCancel: () => void;
	onSave: () => void;
}

export default function ProcedimientoAuditoriaInternaTemplate({
	onCancel,
	onSave,
}: ProcedimientoAuditoriaInternaTemplateProps) {
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
					<Label htmlFor='objetivo'>Objetivo y Alcance</Label>
					<Textarea
						id='objetivo'
						placeholder='Defina el objetivo y alcance del procedimiento de auditoría interna...'
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Especifique el propósito de las auditorías internas y
						qué áreas de la organización cubren
					</p>
				</div>

				<div>
					<Label htmlFor='responsabilidades'>Responsabilidades</Label>
					<Textarea
						id='responsabilidades'
						placeholder='Detalle las responsabilidades de los involucrados en el proceso de auditoría...'
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya roles como auditor líder, equipo auditor,
						auditados y alta dirección
					</p>
				</div>

				<div>
					<Label htmlFor='planificacion'>
						Planificación de Auditorías
					</Label>
					<Textarea
						id='planificacion'
						placeholder='Describa cómo se planifican las auditorías internas...'
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya la frecuencia, criterios para seleccionar
						auditores y áreas a auditar
					</p>
				</div>

				<div>
					<Label htmlFor='ejecucion'>Ejecución de la Auditoría</Label>
					<Textarea
						id='ejecucion'
						placeholder='Detalle los pasos para realizar la auditoría...'
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya reunión de apertura, recolección de evidencias,
						y reunión de cierre
					</p>
				</div>

				<div>
					<Label htmlFor='informe'>Informe de Auditoría</Label>
					<Textarea
						id='informe'
						placeholder='Describa el proceso de elaboración y contenido del informe de auditoría...'
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Especifique qué debe incluir el informe y cómo se
						comunica
					</p>
				</div>

				<div>
					<Label htmlFor='seguimiento'>Seguimiento y Cierre</Label>
					<Textarea
						id='seguimiento'
						placeholder='Explique cómo se realiza el seguimiento de las acciones correctivas...'
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya plazos para implementar acciones correctivas y
						verificar su eficacia
					</p>
				</div>

				<div className='flex justify-end space-x-2 mt-6'>
					<Button variant='outline' onClick={onCancel}>
						Cancelar
					</Button>
					<Button onClick={onSave}>Guardar Documento</Button>
				</div>
			</CardContent>
		</Card>
	);
}
