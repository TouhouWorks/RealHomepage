export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  mapByNameAliases?: string[]
  mapByEmailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const Authors: Creator[] = [
  {
    name: '朵琳',
    avatar:'',
    username: 'Dolyn157',
    title: '地霊殿音楽収蔵館的主编',
    desc: '地霊殿音楽収蔵館的主编和站长，负责本站的内容创作和维护',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/Dolyn157' },
      { type: 'twitter', icon: 'twitter', link: 'https://x.com/dolyn157' },
    ],
    mapByNameAliases: ['Gwyndolyn', '朵琳'],
    mapByEmailAliases: [''],
  }
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creators: Creator[] = [
  {
    name: '絢香猫',
    avatar: '',
    username: 'nekomeowww',
    title: 'Nólëbase 原始创作者',
    desc: '开发者，专注于基础设施维护，数据分析，后端、DevOps 开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/nekomeowww' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/ayakaneko' },
    ],
    mapByNameAliases: ['nekomeowww', '绚香猫', '絢香猫', 'Neko Ayaka', 'Ayaka Neko'],
    mapByEmailAliases: ['neko@ayaka.moe'],
  },
  {
    name: '絢香音',
    avatar: '',
    username: 'LittleSound',
    title: 'Nólëbase 原始创作者',
    desc: '开源开发者，专注于前端，以及前端相关工具库和工具链开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/LittleSound' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/OikawaRizumu' },
    ],
    mapByNameAliases: ['LittleSound', '绚香音', '絢香音', 'Rizumu Oikawa', 'Rizumu Ayaka', 'Ayaka Rizumu', 'Rizumu'],
    mapByEmailAliases: ['rizumu@ayaka.moe', 'rizumu@oqo.moe'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = Authors.map(c => c.name)
export const creatorUsernames = Authors.map(c => c.username || '')
