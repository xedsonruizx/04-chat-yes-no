
<template>
    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
      <div class="flex flex-col space-y-2">
        <!-- Messages go here -->
        <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
      </div>
    </div>
</template>



<script setup lang="ts">
    import { ChatMessage } from '@/interfaces/chat-message.interface';
    import ChatBubble from './ChatBubble.vue';
    import { ref, watch, nextTick } from 'vue';

    interface Props {
      messages: ChatMessage[];
    }

    const { messages } = defineProps<Props>();

    const chatRef = ref<HTMLDivElement | null>(null);

    watch(
      () => messages.length,
      async () => {
        await nextTick();
        const el = chatRef.value;
        if (!el) return;
        el.scrollTo({
          top: el.scrollHeight,
          behavior: 'smooth'
        });
      },
      { flush: 'post' }
    );
</script>

