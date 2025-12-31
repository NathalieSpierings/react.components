declare module '*.woff2';
declare module '*.svg';
declare module '*.webp';

declare module '*.jpg' {
    const src: string;
    export default src;
}
declare module '*.png' {
    const src: string;
    export default src;
}