import { News } from '../../shared/type';

export const newsList: Array<News> = [
    {
        id: 0,
        title: '最好的编程语言是什么？是c/c++还是java/python？我也不知道呢！',
        author: '普象工艺设计小站',
        read: '1.7 w',
        postDate: '3 分钟',
        previewImg: './assets/madison.jpg',
        content: `
        # Dillinger

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

# New Features!

  - Import a HTML file and watch it magically convert to Markdown
  - Drag and drop images (requires your Dropbox account be linked)


You can also:
  - Import and save files from GitHub, Dropbox, Google Drive and One Drive
  - Drag and drop markdown and HTML files into Dillinger
  - Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](http://breakdance.io) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

\`\`\`sh
$ cd dillinger
$ npm install -d
$ node app
\`\`\`

For production environments...

\`\`\`sh
$ npm install --production
$ NODE_ENV=production node app
\`\`\`

### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| Github | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
\`\`\`sh
$ node app
\`\`\`

Second Tab:
\`\`\`sh
$ gulp watch
\`\`\`

(optional) Third:
\`\`\`sh
$ karma test
\`\`\`
#### Building for source
For production release:
\`\`\`sh
$ gulp build --prod
\`\`\`
Generating pre-built zip archives for distribution:
\`\`\`sh
$ gulp build dist --prod
\`\`\`
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

\`\`\`sh
cd dillinger
docker build -t joemccann/dillinger:\${package.json.version} .
\`\`\`
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out \`\${package.json.version}\` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

\`\`\`sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:\${package.json.version}
\`\`\`

Verify the deployment by navigating to your server address in your preferred browser.

\`\`\`sh
127.0.0.1:8000
\`\`\`

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>


        `
    },
    {
        id: 1,
        title: '这份官方网站和开发指南的中文版是中国的 Angular 开发者社区',
        author: '普象工艺设计小站',
        read: '1.7 w',
        postDate: '3 分钟',
        previewImg: './assets/madison.jpg',
        content: `
        像 getHeroes() 一样，getHero() 也有一个异步函数签名。 它用 RxJS 的 of() 函数返回一个 Observable 形式的模拟英雄数据。

        你将来可以用一个真实的 Http 请求来重新实现 getHero()，而不用修改调用了它的 HeroDetailComponent。

        试试看
        刷新浏览器，应用又恢复正常了。 你可以在仪表盘或英雄列表中点击一个英雄来导航到该英雄的详情视图。

        如果你在浏览器的地址栏中粘贴了 localhost:4200/detail/11，路由器也会导航到 id: 11 的英雄（"Mr. Nice"）的详情视图。

        回到原路
        通过点击浏览器的后退按钮，你可以回到英雄列表或仪表盘视图，这取决于你从哪里进入的详情视图。

        如果能在 HeroDetail 视图中也有这么一个按钮就更好了。

        把一个后退按钮添加到组件模板的底部，并且把它绑定到组件的 goBack() 方法。

        src/app/hero-detail/hero-detail.component.html (back button)
        content_copy
        <button (click)="goBack()">go back</button>
        在组件类中添加一个 goBack() 方法，利用你以前注入的 Location 服务在浏览器的历史栈中后退一步。

        src/app/hero-detail/hero-detail.component.ts (goBack)
        content_copy
        goBack(): void {
        this.location.back();
        }
        刷新浏览器，并开始点击。 用户能在应用中导航：从仪表盘到英雄详情再回来，从英雄列表到 mini 版英雄详情到英雄详情，再回到英雄列表。

        你已经满足了在本章开头设定的所有导航需求。

        查看最终代码
        你的应用应该变成了这样 在线例子 / 下载范例。本页所提及的代码文件如下：

        AppRoutingModule、AppModule 和 HeroService
        AppRoutingModule, AppModule, and HeroService

        `
    },
    {
        id: 2,
        title: '是因为它由背景各异的开发者所创造，它为开发者而生',
        author: '普象工艺设计小站',
        read: '1.7 w',
        postDate: '3 分钟',
        previewImg: './assets/madison.jpg',
        content: `
        像 getHeroes() 一样，getHero() 也有一个异步函数签名。 它用 RxJS 的 of() 函数返回一个 Observable 形式的模拟英雄数据。

        你将来可以用一个真实的 Http 请求来重新实现 getHero()，而不用修改调用了它的 HeroDetailComponent。

        试试看
        刷新浏览器，应用又恢复正常了。 你可以在仪表盘或英雄列表中点击一个英雄来导航到该英雄的详情视图。

        如果你在浏览器的地址栏中粘贴了 localhost:4200/detail/11，路由器也会导航到 id: 11 的英雄（"Mr. Nice"）的详情视图。

        回到原路
        通过点击浏览器的后退按钮，你可以回到英雄列表或仪表盘视图，这取决于你从哪里进入的详情视图。

        如果能在 HeroDetail 视图中也有这么一个按钮就更好了。

        把一个后退按钮添加到组件模板的底部，并且把它绑定到组件的 goBack() 方法。

        src/app/hero-detail/hero-detail.component.html (back button)
        content_copy
        <button (click)="goBack()">go back</button>
        在组件类中添加一个 goBack() 方法，利用你以前注入的 Location 服务在浏览器的历史栈中后退一步。

        src/app/hero-detail/hero-detail.component.ts (goBack)
        content_copy
        goBack(): void {
        this.location.back();
        }
        刷新浏览器，并开始点击。 用户能在应用中导航：从仪表盘到英雄详情再回来，从英雄列表到 mini 版英雄详情到英雄详情，再回到英雄列表。

        你已经满足了在本章开头设定的所有导航需求。

        查看最终代码
        你的应用应该变成了这样 在线例子 / 下载范例。本页所提及的代码文件如下：

        AppRoutingModule、AppModule 和 HeroService
        AppRoutingModule, AppModule, and HeroService

        `
    },
    {
        id: 3,
        title: '我们向所有的志愿者们致敬，谷歌公司也将一如既往地继续支持开源代码技术和社区的发展。',
        author: '普象工艺设计小站',
        read: '1.7 w',
        postDate: '3 分钟',
        previewImg: './assets/madison.jpg',
        content: `
        像 getHeroes() 一样，getHero() 也有一个异步函数签名。 它用 RxJS 的 of() 函数返回一个 Observable 形式的模拟英雄数据。

        你将来可以用一个真实的 Http 请求来重新实现 getHero()，而不用修改调用了它的 HeroDetailComponent。

        试试看
        刷新浏览器，应用又恢复正常了。 你可以在仪表盘或英雄列表中点击一个英雄来导航到该英雄的详情视图。

        如果你在浏览器的地址栏中粘贴了 localhost:4200/detail/11，路由器也会导航到 id: 11 的英雄（"Mr. Nice"）的详情视图。

        回到原路
        通过点击浏览器的后退按钮，你可以回到英雄列表或仪表盘视图，这取决于你从哪里进入的详情视图。

        如果能在 HeroDetail 视图中也有这么一个按钮就更好了。

        把一个后退按钮添加到组件模板的底部，并且把它绑定到组件的 goBack() 方法。

        src/app/hero-detail/hero-detail.component.html (back button)
        content_copy
        <button (click)="goBack()">go back</button>
        在组件类中添加一个 goBack() 方法，利用你以前注入的 Location 服务在浏览器的历史栈中后退一步。

        src/app/hero-detail/hero-detail.component.ts (goBack)
        content_copy
        goBack(): void {
        this.location.back();
        }
        刷新浏览器，并开始点击。 用户能在应用中导航：从仪表盘到英雄详情再回来，从英雄列表到 mini 版英雄详情到英雄详情，再回到英雄列表。

        你已经满足了在本章开头设定的所有导航需求。

        查看最终代码
        你的应用应该变成了这样 在线例子 / 下载范例。本页所提及的代码文件如下：

        AppRoutingModule、AppModule 和 HeroService
        AppRoutingModule, AppModule, and HeroService

        `
    },
    {
        id: 4,
        title: '最好的编程语言是什么？',
        author: '普象工艺设计小站',
        read: '1.7 w',
        postDate: '3 分钟',
        previewImg: './assets/madison.jpg',
        content: `
        像 getHeroes() 一样，getHero() 也有一个异步函数签名。 它用 RxJS 的 of() 函数返回一个 Observable 形式的模拟英雄数据。

        你将来可以用一个真实的 Http 请求来重新实现 getHero()，而不用修改调用了它的 HeroDetailComponent。

        试试看
        刷新浏览器，应用又恢复正常了。 你可以在仪表盘或英雄列表中点击一个英雄来导航到该英雄的详情视图。

        如果你在浏览器的地址栏中粘贴了 localhost:4200/detail/11，路由器也会导航到 id: 11 的英雄（"Mr. Nice"）的详情视图。

        回到原路
        通过点击浏览器的后退按钮，你可以回到英雄列表或仪表盘视图，这取决于你从哪里进入的详情视图。

        如果能在 HeroDetail 视图中也有这么一个按钮就更好了。

        把一个后退按钮添加到组件模板的底部，并且把它绑定到组件的 goBack() 方法。

        src/app/hero-detail/hero-detail.component.html (back button)
        content_copy
        <button (click)="goBack()">go back</button>
        在组件类中添加一个 goBack() 方法，利用你以前注入的 Location 服务在浏览器的历史栈中后退一步。

        src/app/hero-detail/hero-detail.component.ts (goBack)
        content_copy
        goBack(): void {
        this.location.back();
        }
        刷新浏览器，并开始点击。 用户能在应用中导航：从仪表盘到英雄详情再回来，从英雄列表到 mini 版英雄详情到英雄详情，再回到英雄列表。

        你已经满足了在本章开头设定的所有导航需求。

        查看最终代码
        你的应用应该变成了这样 在线例子 / 下载范例。本页所提及的代码文件如下：

        AppRoutingModule、AppModule 和 HeroService
        AppRoutingModule, AppModule, and HeroService

        `
    },
    {
        id: 5,
        title: '最好的编程语言是什么？',
        author: '普象工艺设计小站',
        read: '1.7 w',
        postDate: '3 分钟',
        previewImg: './assets/madison.jpg',
        content: `
        像 getHeroes() 一样，getHero() 也有一个异步函数签名。 它用 RxJS 的 of() 函数返回一个 Observable 形式的模拟英雄数据。

        你将来可以用一个真实的 Http 请求来重新实现 getHero()，而不用修改调用了它的 HeroDetailComponent。

        试试看
        刷新浏览器，应用又恢复正常了。 你可以在仪表盘或英雄列表中点击一个英雄来导航到该英雄的详情视图。

        如果你在浏览器的地址栏中粘贴了 localhost:4200/detail/11，路由器也会导航到 id: 11 的英雄（"Mr. Nice"）的详情视图。

        回到原路
        通过点击浏览器的后退按钮，你可以回到英雄列表或仪表盘视图，这取决于你从哪里进入的详情视图。

        如果能在 HeroDetail 视图中也有这么一个按钮就更好了。

        把一个后退按钮添加到组件模板的底部，并且把它绑定到组件的 goBack() 方法。

        src/app/hero-detail/hero-detail.component.html (back button)
        content_copy
        <button (click)="goBack()">go back</button>
        在组件类中添加一个 goBack() 方法，利用你以前注入的 Location 服务在浏览器的历史栈中后退一步。

        src/app/hero-detail/hero-detail.component.ts (goBack)
        content_copy
        goBack(): void {
        this.location.back();
        }
        刷新浏览器，并开始点击。 用户能在应用中导航：从仪表盘到英雄详情再回来，从英雄列表到 mini 版英雄详情到英雄详情，再回到英雄列表。

        你已经满足了在本章开头设定的所有导航需求。

        查看最终代码
        你的应用应该变成了这样 在线例子 / 下载范例。本页所提及的代码文件如下：

        AppRoutingModule、AppModule 和 HeroService
        AppRoutingModule, AppModule, and HeroService

        `
    },
    {
        id: 6,
        title: '授权方式，你不用知会我们就可以转载，但必须保持署名',
        author: '普象工艺设计小站',
        read: '1.7 w',
        postDate: '3 分钟',
        previewImg: './assets/madison.jpg',
        content: `
        像 getHeroes() 一样，getHero() 也有一个异步函数签名。 它用 RxJS 的 of() 函数返回一个 Observable 形式的模拟英雄数据。

        你将来可以用一个真实的 Http 请求来重新实现 getHero()，而不用修改调用了它的 HeroDetailComponent。

        试试看
        刷新浏览器，应用又恢复正常了。 你可以在仪表盘或英雄列表中点击一个英雄来导航到该英雄的详情视图。

        如果你在浏览器的地址栏中粘贴了 localhost:4200/detail/11，路由器也会导航到 id: 11 的英雄（"Mr. Nice"）的详情视图。

        回到原路
        通过点击浏览器的后退按钮，你可以回到英雄列表或仪表盘视图，这取决于你从哪里进入的详情视图。

        如果能在 HeroDetail 视图中也有这么一个按钮就更好了。

        把一个后退按钮添加到组件模板的底部，并且把它绑定到组件的 goBack() 方法。

        src/app/hero-detail/hero-detail.component.html (back button)
        content_copy
        <button (click)="goBack()">go back</button>
        在组件类中添加一个 goBack() 方法，利用你以前注入的 Location 服务在浏览器的历史栈中后退一步。

        src/app/hero-detail/hero-detail.component.ts (goBack)
        content_copy
        goBack(): void {
        this.location.back();
        }
        刷新浏览器，并开始点击。 用户能在应用中导航：从仪表盘到英雄详情再回来，从英雄列表到 mini 版英雄详情到英雄详情，再回到英雄列表。

        你已经满足了在本章开头设定的所有导航需求。

        查看最终代码
        你的应用应该变成了这样 在线例子 / 下载范例。本页所提及的代码文件如下：

        AppRoutingModule、AppModule 和 HeroService
        AppRoutingModule, AppModule, and HeroService

        `
    }
];
