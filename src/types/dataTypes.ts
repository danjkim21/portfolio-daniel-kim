export interface MyDetailsInterface {
  linkedIn: string;
  twitter: string;
  github: string;
  position: string;
  location: string;
  company: string;
  companyLink: string;
}

export interface ProjectDetailsInterface {
  id: number;
  projectName: string;
  projectDesc: string;
  projectDescExtra: string;
  githubLink: string;
  liveLink: string;
  projectImg: string;
  projectGif: string;
  projectFeatures: string[];
  projectTools: string[];
  projectToolsExtra: string[];
}
