

export interface Page {
    readonly id: number;
    path: string;
    icon: string;
    label: string;
    src?: string;
}

export interface SubMenu {
    readonly id: number;
    label: string;
}

export interface News {
    readonly id: string;
    title: string;
    author: string;
    read?: string;
    postDate?: string;
    previewImg?: string;
    content?: string;
}

export interface User {
    readonly id: number;
    userName: string;
    avator: string;
}


