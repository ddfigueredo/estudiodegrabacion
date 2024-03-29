const clientes = [
	{
		nombre: 'Sentey Rock',
		telefono: '1131931708',
		grabaciones: [
			{
				duracion: 2, // horas
				fecha: '07/05/2019'
			},
			{
				duracion: 2, // horas
				fecha: '09/06/2019'
			}
		],
		pagos: [
			{
				fecha: '07/05/2019',
				monto: 200
			},
			{
				fecha: '15/05/2019',
				monto: 150
			}
		]
	},
	{
		nombre: 'Los padrinos del todo',
		telefono: '1122334455',
		grabaciones: [
			{
				duracion: 1, // horas
				fecha: '19/12/2019'
			},
			{
				duracion: 4, // horas
				fecha: '25/02/2020'
			}
		],
		pagos: [
			{
				fecha: '19/12/19',
				monto: 100 
			},
			{
				fecha: '25/02/2020',
				monto: 230
			},
			{
				fecha: '25/03/2020',
				monto: 90
			}
		]
	},
	{
		nombre: 'De Ruta 66',
		telefono: '1148486666',
		grabaciones: [
			{
				duracion: 6,
				fecha: '11/11/2018'
			},
			{
				duracion: 3,
				fecha: '26/10/2019'
			}
		],
		pagos: [
			{
				fecha: '25/10/2019',
				monto: 765
			}
		]
	},
	{
		nombre: 'Verederos',
		telefono: '1146985465',
		grabaciones: [
			{
				fecha: '15/10/2019',
				duracion: 5
			},
			{
				fecha: '12/11/2019',
				duracion: 3
			},
			{
				fecha: '02/01/2020',
				duracion: 4
			},
			{
				fecha: '05/02/2020',
				duracion: 2
			}
		],
		pagos: [
			{
				fecha: '12/11/2019',
				monto: 800
			},
			{
				fecha: '05/02/2020',
				monto: 600
			}
		]
	},
	{
		nombre: 'La flor del trigo',
		telefono: '1145544554',
		grabaciones: [
			{
				fecha: '16/11/2019',
				duracion: 3
			}
		],
		pagos: [
			{
				fecha: '17/11/2019',
				monto: 85
			},
			{
				fecha: '20/12/2019',
				monto: 120
			}
		]
	},
	{
		nombre: 'Asus MotherRock',
		telefono: '1187988798',
		grabaciones: [
			{
				fecha: '03/03/2020',
				duracion: 4
			},
			{
				fecha: '10/03/2020',
				duracion: 4.5
			},
		],
		pagos: [
			{
				fecha: '03/03/2020',
				monto: 400
			},
			{
				fecha: '10/03/2020',
				monto: 450
			}
		]
	}
]

const misDeudores = obtenerDeudores(clientes)
const mejoresClientes = obtenerMejoresCincoClientes(clientes)
const misFechas = listaDeFechas(clientes)
const fechasObtenidas = obtenerGrabacionesPorMes(misFechas, 2, 2020)
const facturacionEnXMes = obtenerFacturacionEn(clientes, 5, 2019)
const promedioPorSemana = sacarPromedio(clientes)