<p align="center">
  <img width="350" src="./public/Genmukessya_logo.png">
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg" /></a>
  <a href="http://creativecommons.org/licenses/by-sa/4.0/"><img src="https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg" /></a>
</p>

# 幻夢結社

**东方Project同人社团**

春风生于南国，每至孟春时节，万物无不长成。三角梅拔朱抽翠，木棉树丹华玉絮。自两广三十七市，五岭两千余里。大概春自湛江开始。
穿过狭长的沈海高速，海的模样逐渐显现出来。这是来自东方大陆最南端港城的春风。北依南岭，东接茂名，西通桂邕，南望琼儋。雷祖敕封之地，苏子流离之所。春则鸥鸣鹜舞，鱼龙迁跃；秋则风飙电闪，乌云低垂。三面迎两海，一径分两粤。
这里是来自湛江的社团——幻梦结社。

## 如何使用本项目
本项目基于 Nólëbase ，欲详细了解本项目的技术栈和运行环境，请参照 [Nólëbase 的文档](https://github.com/nolebase/nolebase)
初次克隆本仓库到本地后，需注意此时项目所需的相关依赖还未被安装，需要安装依赖，这样 [VitePress](https://vitepress.dev) 和 [Vue](https://vuejs.org/) 就会被下载到本地的仓库的目录/文件夹下的 `node_modules` 目录/文件夹下了：

```shell
pnpm install
```

接下来你可以直接运行下面的命令开启一个本地运行的 [Nólëbase](https://nolebase.ayaka.io) 知识库前端服务器，通常而言我们称之为「开发服务器」，用这个服务器，可以通过浏览器在本地直接访问渲染完成的页面：

```shell
pnpm docs:dev
```
#### 构建并渲染为可部署的静态页面

想要部署页面，首先先确保你已经执行过了[安装依赖和运行开发服务器](#安装依赖和运行开发服务器) 的步骤，一般而言构建和渲染的时候可能遇到的问题都可以在运行开发服务器的时候发现，接下来你只需要一个简单的命令就能完成构建了：

```shell
pnpm docs:build
```

构建完成后，渲染出来的 HTML 和各种资源将会被存储在 `.vitepress/dist` 目录下面。注意，本项目中的一些页面，如 `最近跟新`中的内容是通过构建脚本生成的，要先运行构建这些页面才会有内容。

#### 在本地预览生产环境

通过一下命令，可以在本地预览本项目在生产环境下的运行状态。

```shell
pnpm docs:serve
```

#### 使用静态网站托管服务部署页面

Nólëbase 知识库使用 VitePress 静态生成器来驱动和生成静态页面，因此可以部署到下列已知的优质**静态网站托管服务**：

- [Netlify](https://netlify.com/)
- [Vercel](https://vercel.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [AWS Amplify](https://aws.amazon.com/cn/amplify/)
- [Render](https://render.com/)
- [GitHub Pages](https://pages.github.com/)
- [Azure Static Web](https://azure.microsoft.com/en-us/products/app-service/static)

> [!NOTE]
> 与自建单独的虚拟机并使用类似于 Nginx，或者对象存储（OSS）相比，使用上述提及的静态网站托管服务时，**可以省略手动部署流程**，也**无需花费时间与精力维护单独的网站服务器**。
>
> 让我们把精力放在写作上吧！❤️

请参照 VitePress 官方文档的[部署 VitePress 站点](https://vitepress.dev/zh/guide/deploy)页面文档所介绍的内容，通过主流的静态网站托管服务来部署自己的 Nólëbase 知识库。

## 声明

本仓库代码以 [MIT License][mit] 协议发布

本仓库除 `笔记/📃 Archives` 目录以外的文档、图片和其引用的资源均以 [CC BY-SA 4.0][cc-by-sa] 协议发布

[mit]: https://opensource.org/licenses/MIT
[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/

### 用 ♥ 撰写
