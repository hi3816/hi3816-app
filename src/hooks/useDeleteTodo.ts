//src/hooks/useDeletTodo.ts
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useDeleteTodo() {
    const queryClient = useQueryClient()

    return useMutation({
        // 삭제 요청을 보낼 함수 ()
        mutationFn: async (id:number) => {
            const res = await fetch(`http://localhost:3001/todos/${id}`, {
                method: 'DELETE',
            })
            if(!res.ok) throw new Error('삭제 실패')
        },

        // 삭제 성공 시, todos 리스트 새로고침
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['todos']})
        }
    })
}