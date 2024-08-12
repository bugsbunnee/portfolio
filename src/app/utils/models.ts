export interface ProjectItem {
    url: string;
    title: string;
    image: any;
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