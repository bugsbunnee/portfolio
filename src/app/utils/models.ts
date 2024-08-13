export interface ProjectItem {
    url: string;
    title: string;
    image: any;
    description: string;
    skill: string[];
    isConfidential: boolean;
    stack: 'FRONT-END' | 'MOBILE' | 'BE' | 'FULL-STACK'
}

export interface EmailData {
    first_name: string;
    last_name: string;
    from_email: string;
    message: string;
}

export interface User {
    id: string;
    firstName: string;
    lastName : string;
    email: string;
    image: string;
    isAdmin: boolean;
}

export interface ImageResponse { 
    url: string;
}
