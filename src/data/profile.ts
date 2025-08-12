export interface Profile {
  name: string;
  headline: string;
  intro: string;
  links: {
    github: string;
    linkedin: string;
    email: string; // mailto or plain email
    twitter?: string;
  };
  contactEmail: string; // plain email for display
  // Datos adicionales
  location?: string;
  phone?: string; // texto para mostrar
  secondaryEmails?: string[]; // emails en texto plano
}

export const profile: Profile = {
  name: 'Bruno Barlari',
  headline: 'Desarrollador Backend · Java, Spring Boot, AWS Lambda (Python)',
  intro:
    'Desarrollador de Software Backend apasionado y comprometido con el aprendizaje continuo y la adopción de nuevas tecnologías. Experiencia en desarrollo y mantenimiento de microservicios utilizando Java y Spring Boot, pruebas automatizadas con JUnit y Mockito, gestión de MongoDB, desarrollo de APIs con AWS Lambda en Python y metodologías ágiles Scrum. Actualmente, contribuyo al desarrollo de microservicios backend en Warner Bros. Discovery, trabajando con equipos internacionales en proyectos globales, incluyendo el lanzamiento de la plataforma Max en Asia (Taiwán, Hong Kong). Cursando Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional (UTN), fortaleciendo capacidades técnicas y analíticas.',
  links: {
    github: '',
    linkedin: 'https://linkedin.com/in/bruno-barlari-843083292',
    email: 'mailto:bruno2004b@gmail.com',
  },
  contactEmail: 'bruno2004b@gmail.com',
  location: 'Buenos Aires, Argentina',
  phone: '+54 1131145270',
  secondaryEmails: ['brunobarlari@icloud.com'],
};