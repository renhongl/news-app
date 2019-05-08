import { Page } from './type';

export enum PAGES {'home', 'xigua-video', 'video'}

export const pagesMapping: Array<Page> = [
    {
        id: 0,
        path: 'home',
        icon: 'home',
        label: '刷新'
    },
    {
        id: 1,
        path: 'xigua-video',
        icon: 'apps',
        label: '西瓜视频'
    },
    {
        id: 2,
        path: 'video',
        icon: 'play',
        label: '小视频'
    }
];

export const subMenuMapping: any = {
    home: [
        {
            label: '推荐'
        },
        {
            label: '成都'
        },
        {
            label: '热点'
        }
    ]
};
