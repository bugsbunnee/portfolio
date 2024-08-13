export const SECTIONS = {
    HERO: 'Hero',
    ABOUT: 'About',
    PROJECTS: 'Projects',
    CONTACT: 'Contact'
};

const MAX_FILE_SIZE = 5_000_000;

export const IMAGE_VALIDATION_DATA = {
    MAX_FILE_SIZE,
    MAX_FILE_SIZE_MB: MAX_FILE_SIZE / 1_000_000,
    ACCEPTED_IMAGE_TYPES: ["image/jpeg", "image/jpg", "image/png", "image/webp"],
}