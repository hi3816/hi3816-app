'use client'

import { useState } from 'react'
import { useTodos } from '@/hooks/useTodos' // 할 일 조회 (useQuery)
import { useAddTodo } from '@/hooks/useAddTodo' // 할 일 추가 (useMutation)
import { useDeleteTodo } from '@/hooks/useDeleteTodo'

//Unity에서 MonoBehaviour의 Start() + Update() 느낌. 페이지 자체를 구성하는 컴포넌트
export default function TodoListPage(){
    const {data : todos, isLoading, isError } = useTodos()
    const { mutate: addTodo } = useAddTodo() // useAddTodo훅으로 부터 mutation 실행 함수 받아옴
    const { mutate: deleteTodo } = useDeleteTodo();
    const [ input, setInput ] = useState('') //입력 필드의 상태 관리 (C#의 private string title 변수 느낌)

    const handleAdd = () => {
        if (!input.trim()) return
        addTodo(input) // 실제 추가 요청 수행
        setInput('') // 입력 필드 초기화
    }
    if(isLoading) return <p>불러오는 중...</p>
    if(isError) return<p>에러 발생!</p>

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">할 일 목록 (Todos)</h1>
              {/* 할 일 입력창과 추가 버튼 */}
            <div className="flex gap-2 mb-4">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)} // 입력값이 바뀔 때 상태 업데이트
                    onKeyDown={(e) => {
                        if (e.key === 'Enter'){
                            handleAdd(); //엔터 누름 추가 버튼과 동일한 동작
                        }
                    }}
                    className="border p-2 w-full rounded"
                    placeholder="할 일을 입력하세요"
                />
                <button
                    onClick={handleAdd} // 추가 버튼 클릭 시 handleAdd 실행
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                추가
                </button>
            </div>

            {/* todos 목록 출력 */}
            <ul className="space-y-2">
                {todos?.map((todo) => (
                <li key={todo.id} className="min-h-14 p-2 border rounded flex justify-between items-center">
                    <span>
                        <input type="checkbox" checked={todo.completed} readOnly className="mr-2" />
                        {todo.title}
                    </span>
                    <button
                            onClick={()=>deleteTodo(todo.id)}
                            className="text0red-500 hover:text-red-700 text-sm"
                            >
                                ❌
                    </button>
                </li>
                ))}
            </ul>
        </div>

    )
}