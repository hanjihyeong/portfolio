export interface ContactTypes {
  name: string;
  email: string;
  message: string;
}

export interface ProjectTypes {
  title: string;
  date: string;
  desc: string;
  link: string;
  image: string;
  role: [];
  tech: {
    [key: string]: string;
  };
  info: {
    [key: string]: string;
  };
  function: {
    [key: string]: string;
  };
  memoir: string[];
  members: string;
  platform: string;
}

export interface TechTypes {
  title: string;
  image: string;
  familier: string;
  desc: string;
}
