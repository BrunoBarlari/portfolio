export interface ProjectLink { label: string; url: string; }
export interface Project {
  title: string;
  summary: string;
  year?: number;
  tech?: string[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: 'Optimización de build y DX',
    summary: 'Reducción del tiempo de build en 45% y setup DX reproducible con scripts y plantillas.',
    year: 2024,
    tech: ['Astro','TypeScript','CI/CD'],
    links: [ { label: 'Notas', url: '#' } ]
  },
  {
    title: 'Diseño de arquitectura frontend',
    summary: 'Diseño modular, lazy loading por rutas y contratos claros entre features.',
    year: 2023,
    tech: ['React','Vite','Rendimiento'],
    links: [ { label: 'Caso', url: '#' } ]
  },
  {
    title: 'Observabilidad full-stack',
    summary: 'Trazas distribuidas, métricas y dashboards que redujeron MTTR en 30%.',
    year: 2022,
    tech: ['Node.js','OpenTelemetry','Grafana'],
    links: [ { label: 'Resumen', url: '#' } ]
  }
];
