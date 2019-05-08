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
            label: '国内'
        },
        {
            label: '国际'
        },
        {
            label: '军事'
        },
        {
            label: '财经'
        },
        {
            label: '互联网'
        },
        // {
        //     label: '房产'
        // },
        // {
        //     label: '汽车'
        // },
        // {
        //     label: '体育'
        // },
        // {
        //     label: '娱乐'
        // },
        // {
        //     label: '游戏'
        // },
        // {
        //     label: '教育'
        // }
    ]
};
