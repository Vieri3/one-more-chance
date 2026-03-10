import { readonly, ref } from 'vue'

// строка вывода предупредительного сообщения
const OutWarningMessageStrRef = ref<string>('');

export function useWarningMessage() {
     // функция которая принимамет строку предупреждения и возвращает ее 
    function getWarningMessage(str: string): void {
         OutWarningMessageStrRef.value = str 
    };

    return{
        OutWarningMessageStrRef: readonly(OutWarningMessageStrRef),
        getWarningMessage
    }

}