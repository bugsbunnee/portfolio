export enum STACK {
    FRONTEND = 'FRONTEND',
    MOBILE = 'MOBILE',
    BACKEND = 'BACKEND',
    FULLSTACK = 'FULLSTACK'
}

export interface ProjectItem {
    url: string;
    title: string;
    image: any;
    description: string;
    skill: string[];
    isConfidential: boolean;
    stack: STACK
}

export interface EmailData {
    first_name: string;
    last_name: string;
    from_email: string;
    message: string;
}

export interface ImageResponse { 
    url: string;
}
