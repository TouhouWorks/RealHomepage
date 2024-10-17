<script setup lang="ts">
import { type Ref, inject } from 'vue'
import type { DefaultTheme } from 'vitepress/theme'
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'

export interface HeroAction {
  theme?: 'brand' | 'alt'
  text: string
  link: string
  target?: string
  rel?: string
}

defineProps<{
  name?: string
  text?: string
  tagline?: string
  image?: DefaultTheme.ThemeableImage
  actions?: HeroAction[]
}>()

const heroImageSlotExists = inject('hero-image-slot-exists') as Ref<boolean>
</script>

<template>
  <div class="VPHero" :class="{ 'has-image': image || heroImageSlotExists }">
    <div class="Mycontainer">
      <div v-if="image || heroImageSlotExists" class="image">
        <div class="image-container">
          <div class="image-bg" />
          <slot name="home-hero-image">
            <VPImage v-if="image" class="image-src" :image="image" />
          </slot>
        </div>
      </div>

      <div class="main">
        <slot name="home-hero-info-before" />
        <slot name="home-hero-info">
          <h1 v-if="name" class="name">
            <span class="clip" v-html="name" />
          </h1>
          <p v-if="text" class="text" v-html="text" />
          <p v-if="tagline" class="tagline" v-html="tagline" />
        </slot>
        <slot name="home-hero-info-after" />

        <div v-if="actions" class="actions">
          <div v-for="action in actions" :key="action.link" class="action">
            <VPButton
              tag="a"
              size="medium"
              :theme="action.theme"
              :text="action.text"
              :href="action.link"
              :target="action.target"
              :rel="action.rel"
            />
          </div>
        </div>
        <slot name="home-hero-actions-after" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPHero {
  margin-top: calc((var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * 3);
  padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px) 24px 48px;
  top: 10%;
}

@media (min-width: 641px) and (max-width: 860px) {
  .VPHero {
  margin-top: (var(--vp-nav-height)) + var(--vp-layout-top-height, 0px);
  padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px) 24px 24px;
  top: 10%;
}
}

@media (max-width: 640px) {
  .VPHero {
  margin-top: (var(--vp-nav-height)) ;
  padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px) 24px 24px;
  top: 10%;
}
}


.Mycontainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 860px;

  margin: 0 auto;
}

.main {
  position: relative;
  justify-content: center;
  z-index: 10;
  order: 2;
  flex-grow: 1;
  flex-shrink: 0;
  margin-top: 20%;
  margin-left: 15%;
}

.VPHero.has-image .container {
  text-align: center;
}

@media (min-width: 860px) {
  .VPHero.has-image .container {
    text-align: left;
  }
}

@media (min-width: 860px) {
  .main {
    order: 1;
    width: calc((100% / 3) * 3);
  }

  .VPHero.has-image .main {
    max-width: 1152px; /* orginal: 592px */
  }
}

@media (min-width: 640px) and (max-width: 860px){
  .main {
    padding-left: 0%;
    margin-top: 8%;
  }
}
@media (max-width: 640px){
  .main {
    padding-right: 5%;
    margin-top: 3%;
  }
}

.name,
.text {
  max-width: 392px;
  letter-spacing: -0.4px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;

}

.VPHero.has-image .name,
.VPHero.has-image .text {
  margin: 0 auto;
}

@media (min-width: 640px) {
  .name,
  .text {
    max-width: 1152px; /*orginal: 576px */
    line-height: 56px;
    font-size: 48px;
  }
}

@media (min-width: 860px) {
  .name,
  .text {
    line-height: 64px;
    font-size: 56px;
  }

  .VPHero.has-image .name,
  .VPHero.has-image .text {
    margin: 0;
  }
}

.tagline {
  position: relative;
  padding-top: 8px;
  max-width: auto - 256px;
  line-height: 28px;
  font-size: 18px;
  font-weight: 500;
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}

.VPHero.has-image .tagline {
  margin: 0 auto;
}

@media (min-width: 860px) {
  .tagline {
    left: -9%;
    padding-left: 22%;
    line-height: 36px;
    max-width: auto;
    font-size: 24px;
  }

  .VPHero.has-image .tagline {
    margin: 0;
  }
}

@media (min-width: 640px) and (max-width: 860px){
  .tagline {
    
    left: -10%;
    padding-top: 12px;
    max-width: auto;
    line-height: 32px;
    font-size: 20px;
  }
  .VPHero.has-image .tagline {
    margin: 0;
  }
}
@media (max-width: 639px) {
  .tagline
  {
    
    left: -6%;
  }
}

.action{
  margin-left: 5%;
 
}

.actions {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
  margin-left: 0vw;
  padding-top: 24px;

}

.VPHero.has-image .actions {
  justify-content: center;
}

@media (min-width: 860px) {
  .actions {
    margin-left: -30%;
    padding-top: 32px;
  }
}

@media ( min-width: 640px) and (max-width: 860px) {
  .actions {
    margin-left: -20%;
    left: -8%;
  }
}

@media (max-width: 640px) {
  .actions {
    justify-content: flex-start;
    left: -10%;
    padding-top: 32px;
  }
}


.image-container {
  position: relative;
  margin: 0 auto;
  width: 320px;
  height: 320px;
}

@media (min-width: 640px) {
  .image-container {
    width: 392px;
    height: 392px;
  }
}

@media (min-width: 860px) {
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /*rtl:ignore*/
    transform: translate(-32px, -32px);
  }
}

.image-bg {
  position: absolute;
  top: 50%;
  /*rtl:ignore*/
  left: 50%;
  border-radius: 50%;
  width: 192px;
  height: 192px;
  background-image: var(--vp-home-hero-image-background-image);
  filter: var(--vp-home-hero-image-filter);
  /*rtl:ignore*/
  transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
  .image-bg {
    width: 256px;
    height: 256px;
  }
}

@media (min-width: 860px) {
  .image-bg {
    width: 320px;
    height: 320px;
  }
}

:deep(.image-src) {
  position: absolute;
  top: 50%;
  /*rtl:ignore*/
  left: 50%;
  max-width: 192px;
  max-height: 192px;
  /*rtl:ignore*/
  transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
  :deep(.image-src) {
    max-width: 576px;
    max-height: 576px;
  }
}

@media (min-width: 860px) {
  :deep(.image-src) {
    max-width: 860px;
    max-height: 860px;
  }
}
</style>
