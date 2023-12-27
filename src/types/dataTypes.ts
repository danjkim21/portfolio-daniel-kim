export interface MyDetailsInterface {
	linkedIn: URL;
	twitter: URL;
	github: URL;
	email: string;
	position: string;
	location: string;
	company: string;
	companyLink: URL;
	skills: string[];
}

export interface ProjectDetailsInterface {
	id: number;
	projectName: string;
	projectDesc: string;
	projectDescExtra: string;
	githubLink: URL;
	liveLink: URL;
	projectImg: string;
	projectGif: string;
	projectFeatures: string[];
	projectTools: string[];
	projectToolsExtra: string[];
}
