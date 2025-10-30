import { sleep } from '@/helpers/sleep';
import { ChatMessage } from '@/interfaces/chat-message.interface';
import { YesNoResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

export const useChat = () => {
    const messages = ref<ChatMessage[]>([
        {
            id: new Date().getTime(),
            text: "Hey, como va tu dia?",
            itsMine: true,
        },
        {
            id: new Date().getTime(),
            text: "Nada mal, solo algo ocupado",
            itsMine: false,
            image: 'https://yesno.wtf/assets/no/20-56c4b19517aa69c8f7081939198341a4.gif',
        },
    ]);

    const onMessage = async(text: string) => {
        if (!text.trim()) return;

        messages.value.push({
            id: new Date().getTime(),
            text,
            itsMine: true,
        });


        //evaluar si termina con ?
        if(text.endsWith('?')){
            await sleep(1);

            const {answer, image} = await getHerResponse();
              messages.value.push({ 
                id: new Date().getTime(),
                itsMine: false,
                text: answer,
                image: image,
              });   
        }
    }

    const getHerResponse = async () => {
       const resp = await fetch('https://yesno.wtf/api');
       const data = (await resp.json()) as YesNoResponse;
       return data
    }

    return {

        //properties
            messages,
        //methods
            onMessage,
    }
}