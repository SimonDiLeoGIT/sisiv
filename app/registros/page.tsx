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

interface RegistroNoConformidadesTemplateProps {
	onCancel: () => void;
	onSave: () => void;
}

export default function RegistroNoConformidadesTemplate({
	onCancel,
	onSave,
}: RegistroNoConformidadesTemplateProps) {
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
					/>
				</div>

				<div>
					<Label htmlFor='fecha-deteccion'>Fecha de Detección</Label>
					<Input id='fecha-deteccion' type='date' />
				</div>

				<div>
					<Label htmlFor='descripcion'>
						Descripción de la No Conformidad
					</Label>
					<Textarea
						id='descripcion'
						placeholder='Describa detalladamente la no conformidad detectada...'
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
					/>
				</div>

				<div>
					<Label htmlFor='causa-raiz'>Análisis de Causa Raíz</Label>
					<Textarea
						id='causa-raiz'
						placeholder='Describa la(s) causa(s) raíz identificada(s)...'
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
					/>
				</div>

				<div>
					<Label htmlFor='fecha-implementacion'>
						Fecha Prevista de Implementación
					</Label>
					<Input id='fecha-implementacion' type='date' />
				</div>

				<div>
					<Label htmlFor='seguimiento'>
						Seguimiento y Verificación
					</Label>
					<Textarea
						id='seguimiento'
						placeholder='Describa cómo se verificará la eficacia de la acción correctiva...'
					/>
					<p className='text-sm text-muted-foreground mt-1 flex items-center'>
						<InfoIcon className='w-4 h-4 mr-1' />
						Incluya métodos de verificación y fechas de seguimiento
					</p>
				</div>

				<div className='flex justify-end space-x-2 mt-6'>
					<Button variant='outline' onClick={onCancel}>
						Cancelar
					</Button>
					<Button onClick={onSave}>Guardar Registro</Button>
				</div>
			</CardContent>
		</Card>
	);
}
