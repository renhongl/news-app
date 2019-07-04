

export interface Page {
    readonly id: Number;
    path: String;
    icon: String;
    label: String;
    src?: String;
}

export interface SubMenu {
    readonly id: Number;
    label: String;
}

export interface News {
    readonly id: String;
    title: String;
    author: String;
    read?: String;
    postDate?: String;
    previewImg?: String;
    content?: String;
    images?: Array<String>;
}

export interface User {
    readonly id: Number;
    userName: String;
    avator: String;
}


