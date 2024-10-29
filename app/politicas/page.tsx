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

interface PoliticaDeCalidadTemplateProps {
	onCancel: () => void;
	onSave: () => void;
}

export default function PoliticaDeCalidadTemplate({
	onCancel,
	onSave,
}: PoliticaDeCalidadTemplateProps) {
	return (
		<Card className='w-full max-w-4xl mx-auto my-4'>
			<CardHeader>
				<CardTitle>Plantilla de Política de Calidad</CardTitle>
				<CardDescription>
					Complete las siguientes secciones para crear su Política de
					Calidad ISO 9001
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-6'>
				<div>
					<Label htmlFor='compromiso'>
						Compromiso con la Calidad
					</Label>
					<Textarea
						id='compromiso'
						placeholder='Describa el compromiso de la organización con la calidad...'
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya una declaración clara del compromiso de la alta
						dirección con la calidad
					</p>
				</div>

				<div>
					<Label htmlFor='objetivos'>Objetivos Principales</Label>
					<Textarea
						id='objetivos'
						placeholder='Enumere los objetivos principales de calidad...'
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
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Mencione el compromiso de cumplir con los requisitos
						legales, reglamentarios y del cliente
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
