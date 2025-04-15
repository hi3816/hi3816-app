// src/hooks/useToggleTodo.ts
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Todo } from '@/types/todo'

export function useToggleTodo() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (todo : Todo) => {
            const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
                method : 'PATCH',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({ completed: !todo.completed}),
            })
            if (!res.ok) throw new Error('상태 변경 실패')
                return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey : ['todos']})
        },
    })
}