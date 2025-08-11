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
}

export const profile: Profile = {
  name: 'Tu Nombre',
  headline: 'Desarrollador de Software · Especializado en arquitectura web, rendimiento y DX.',
  intro:
    'Me enfoco en construir soluciones claras, mantenibles y rápidas. Disfruto optimizar flujos, depurar a bajo nivel y guiar equipos hacia entregas consistentes.',
  links: {
    github: 'https://github.com/usuario',
    linkedin: 'https://linkedin.com/in/usuario',
    email: 'mailto:correo@ejemplo.dev',
    twitter: 'https://twitter.com/usuario',
  },
  contactEmail: 'correo@ejemplo.dev',
};