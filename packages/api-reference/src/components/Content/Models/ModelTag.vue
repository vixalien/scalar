<script setup lang="ts">
import type { WorkspaceEventBus } from '@scalar/workspace-store/events'

import { Section, SectionHeader } from '@/components/Section'
import SectionContainer from '@/components/Section/SectionContainer.vue'
import SectionContainerAccordion from '@/components/Section/SectionContainerAccordion.vue'
import SectionHeaderTag from '@/components/Section/SectionHeaderTag.vue'
import ShowMoreButton from '@/components/ShowMoreButton.vue'

const { sectionTitle = 'Models' } = defineProps<{
  id: string
  isCollapsed: boolean
  eventBus: WorkspaceEventBus
  layout: 'classic' | 'modern'
  sectionTitle?: string
}>()
</script>
<template>
  <!-- Modern Layout Model Container -->
  <SectionContainer
    v-if="layout === 'modern'"
    id="model">
    <Section
      :id="id"
      :aria-label="sectionTitle"
      @intersecting="() => eventBus?.emit('intersecting:nav-item', { id })">
      <SectionHeader>
        <SectionHeaderTag :level="2"> {{ sectionTitle }} </SectionHeaderTag>
      </SectionHeader>
      <template v-if="!isCollapsed">
        <slot />
      </template>
      <template v-else>
        <ShowMoreButton
          :id
          class="top-0"
          @click="() => eventBus.emit('toggle:nav-item', { id, open: true })">
        </ShowMoreButton>
      </template>
    </Section>
  </SectionContainer>
  <!-- Classic Layout Model Container -->
  <SectionContainerAccordion
    v-else
    :aria-label="sectionTitle"
    class="pb-12"
    :modelValue="!isCollapsed"
    @update:modelValue="
      () => eventBus?.emit('toggle:nav-item', { id, open: isCollapsed })
    ">
    <template #title>
      <SectionHeader :level="2">{{ sectionTitle }}</SectionHeader>
    </template>
    <slot />
  </SectionContainerAccordion>
</template>
