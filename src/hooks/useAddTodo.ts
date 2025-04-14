// React Qeury에서 쿼리 캐시를 조작하기 위해 필요함(C#에서 GameManager싱글톤같은 역할)
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Todo } from '@/types/todo'

// 이 훅은 외부에서 "할 일 추가"요청을 사용할 수 있게 만들어줌
export function useAddTodo() {
    //전체 쿼리 관리 객체(QueryClient) - 캐싱/ 무효화 담당
    const queryClient = useQueryClient()

    // 실제 "할 일 추가" 
    return useMutation({
        mutationFn: async (newTitle : string) => {
            const res = await fetch('http://localhost:3001/todos', {
                method : 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body : JSON.stringify({
                    title : newTitle,
                    completed : false,
                }),
            })

            if (!res.ok) throw new Error('추가 실패')
                return res.json() as Promise<Todo> //비동기적으로 응답 데이터를 반환
        },

        //성공적으로 추가됐을 때 실행되는 콜백 (C#의 OnSuccess 이벤트 같은 느낌)
        onSuccess: () => {
            // 기존 todos 목록 쿼리를 강제로 새로고침 (invalidate = 리셋 요청)
            queryClient.invalidateQueries({queryKey : ['todos']})
        },
    })
}


