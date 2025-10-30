

<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span class="font-bold">Fulanito</span>
    </div>

   <!-- Messages -->
    <ChatMessages :messages="messages" />
    <!-- box -->
    <MessageBox @sendMessage="onMessage" />

   
  </div>
</template>


<script setup lang="ts">
import MessageBox from '@/components/Chat/MessageBox.vue';
import ChatMessages from '@/components/Chat/ChatMessages.vue';
import { useChat } from '@/composables/useChat';

const { messages, onMessage } = useChat();


</script>