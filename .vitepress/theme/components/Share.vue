<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import { ref, watch } from 'vue'
import { useRoute } from 'vitepress'

interface HyphenResp<T> {
  data: T
}
interface HyphenNewShortURLResp {
  url: string
  shortUrl: string
}

const APIHost = 'https://api.ayaka.io/hyphen'
const newUrlEndpoint = APIHost + "/api/v1/url"
const queryUrlEndpoint = APIHost + "/api/v1/url/full"

const route = useRoute()

async function findExistingLink(url: string): Promise<string> {
  const res = await fetch(`${queryUrlEndpoint}?url=${url}`)
  if (res.status !== 200) {
    if (res.status === 404) return ''
    console.error(await res.json())
    return ''
  }

  const resJson = await res.json()
  return resJson.data.shortUrl as string
}

async function createShareLink(url: string) {
  const res = await fetch(newUrlEndpoint, {
    method: "POST",
    body: JSON.stringify({ url }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (res.status !== 200) {
    console.error(await res.json())
    return null
  }

  const resJson = (await res.json()) as HyphenResp<HyphenNewShortURLResp>
  return resJson.data
}

async function getShareLink(): Promise<string> {
  // 本身就是短地址或不是生产环境的话不处理，节省资源
  if (
    window.location.hostname !== 'nolebase.ayaka.io'
    || window.location.pathname.length <= 20
  ) return window.location.href

  const url = window.location.href

  let linkHash = ''
  const existingLink = await findExistingLink(url)
  if (existingLink !== '') {
    linkHash = existingLink
  }
  else {
    const newLink = await createShareLink(url)
    if (newLink === null)
      return window.location.href
    linkHash = newLink.shortUrl
  }

  return `${window.location.origin}/to/${linkHash}`
}

let shareLink = ref('')
watch(() => route.path, async (val, oldVal, onCleanup) => {
  if (typeof window === 'undefined') return
  shareLink.value = ''
  let cleanup = false
  onCleanup(() => cleanup = true)

  const link = await getShareLink()
  if (cleanup) return
  shareLink.value = link
}, { immediate: true })

const { copy, copied: shareSuccess  } = useClipboard()
function copyShareLink() {
  copy(shareLink.value)
}
</script>

<template>
  <div hidden md:block class="bg-$vp-c-divider-light" ml4 mr2 w-1px h-24px />
  <button
    h-full
    px3
    text-sm font-medium ws-nowrap
    text="$vp-c-text-1"
    :class="[
      shareSuccess ? '!text-green-400' : '',
      shareLink ? 'hover:sm:text-$vp-c-brand' : '!cursor-wait',
    ]"
    @click="copyShareLink()"
    :disabled="!shareLink || shareSuccess"
  >
  <Transition
    mode="out-in"
    enter-active-class="transition-all duration-250 ease-out"
    leave-active-class="transition-all duration-250 ease-out"
    enter-from-class="transform translate-y-30px opacity-0"
    leave-to-class="transform translate-y--30px opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
  >
    <span v-if="shareSuccess" flex items-center space-x-1>
      <span class="i-octicon:checkbox-16" />
      <span>复制成功</span>
    </span>
    <span v-else flex items-center space-x-1>
      <span class="i-octicon:share-16" />
      <span>分享此页</span>
    </span>
  </Transition>
  </button>
  <div block md:hidden class="bg-$vp-c-divider-light" mx2 w-1px h-24px />
</template>