

<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span class="font-bold">Fulanito</span>
    </div>

   <!-- Messages -->
    <ChatMessages :messages="messages" />
    <!-- box -->
    <MessageBox />

   
  </div>
</template>


<script setup lang="ts">
import MessageBox from '@/components/Chat/MessageBox.vue';
import { ChatMessage } from '@/interfaces/chat-message.interface';

import { ref } from 'vue';
import ChatMessages from '@/components/Chat/ChatMessages.vue';
const messages = ref<ChatMessage[]>([
  {
    id: 1,
    text: "Hey, how's your day going?",
    itsMine: true,
  },
  {
    id: 2,
    text: "Not too bad, just a bit busy. How about you?",
    itsMine: false,
    image: 'https://yesno.wtf/assets/no/20-56c4b19517aa69c8f7081939198341a4.gif',
  },
]);

</script>