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
    title: 'Microservicios backend para Max (Warner Bros. Discovery)',
    summary:
      'Contribución al desarrollo y mantenimiento de microservicios en Java y Spring Boot para la plataforma Max, participando en el lanzamiento en Asia (Taiwán, Hong Kong). Pruebas automatizadas con JUnit y Mockito y consultas optimizadas en MongoDB.',
    year: 2024,
    tech: ['Java','Spring Boot','MongoDB','JUnit','Mockito','AWS Lambda (Python)','APIs REST'],
  },
  {
    title: 'Sistema integral de gestión contable y fiscal',
    summary:
      'Solución para automatizar tareas diarias de contadores, mejorar eficiencia, reducir errores y ofrecer visión clara de la situación financiera empresarial.',
    year: 2023,
  }
];
