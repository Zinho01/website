// solves issue of nnot being able to import images in typescript

declare module '*.png' {
    const value: string;
    export default value;
    }
    declare module '*.jpg' {
        const value: string;
        export default value;
    }  