// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: {
				es: 'Ayuda de ModulApp Studio',
				en: 'ModulApp Studio Help',
			},
			description: 'Guías paso a paso para construir y administrar tu negocio con ModulApp Studio.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Español', lang: 'es' },
				en: { label: 'English', lang: 'en' },
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Primeros pasos',
					translations: { en: 'Getting started' },
					items: [
						{ label: 'Panel de control', translations: { en: 'Dashboard' }, slug: 'primeros-pasos/panel-de-control' },
						{ label: 'Planes y límites', translations: { en: 'Plans and limits' }, slug: 'primeros-pasos/planes-y-limites' },
					],
				},
				{
					label: 'Contenido',
					translations: { en: 'Content' },
					items: [
						{ label: 'Páginas', translations: { en: 'Pages' }, slug: 'contenido/paginas' },
						{ label: 'Editor visual', translations: { en: 'Visual editor' }, slug: 'contenido/editor-visual' },
						{ label: 'Productos', translations: { en: 'Products' }, slug: 'contenido/productos' },
						{ label: 'Menú', translations: { en: 'Menu' }, slug: 'contenido/menu' },
						{ label: 'Blog', slug: 'contenido/blog' },
						{ label: 'Media', slug: 'contenido/media' },
					],
				},
				{
					label: 'Ventas y clientes',
					translations: { en: 'Sales and customers' },
					items: [
						{ label: 'Pedidos', translations: { en: 'Orders' }, slug: 'ventas/pedidos' },
						{ label: 'Compras y Ventas', translations: { en: 'Purchases and sales' }, slug: 'ventas/compras-y-ventas' },
						{ label: 'Clientes', translations: { en: 'Customers' }, slug: 'ventas/clientes' },
						{ label: 'Formularios', translations: { en: 'Forms' }, slug: 'ventas/formularios' },
						{ label: 'Portal del cliente', translations: { en: 'Customer portal' }, slug: 'ventas/portal-del-cliente' },
					],
				},
				{
					label: 'Sistema',
					translations: { en: 'System' },
					items: [
						{ label: 'Chatbot', slug: 'sistema/chatbot' },
						{ label: 'Calendario', translations: { en: 'Calendar' }, slug: 'sistema/calendario' },
						{ label: 'Correo', translations: { en: 'Email' }, slug: 'sistema/correo' },
						{ label: 'Campañas', translations: { en: 'Campaigns' }, slug: 'sistema/campanas' },
						{ label: 'Usuarios y roles', translations: { en: 'Users and roles' }, slug: 'sistema/usuarios' },
						{ label: 'Configuración', translations: { en: 'Settings' }, slug: 'sistema/configuracion' },
					],
				},
			],
		}),
	],
});
