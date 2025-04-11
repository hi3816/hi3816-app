'use client'

import { useTodos } from '@/hooks/useTodos'

export default function TodoListPage(){
    const {data : todos, isLoading, isError } = useTodos()

    if(isLoading) return <p>불러오는 중...</p>
    if(isError) return<p>에러 발생!</p>

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">할 일 목록 (Todos)</h1>
            <ul className="space-y-2">
                {todos?.map((todo) =>(
                    <li key={todo.id} className="p-2 border rounded">
                        <input type="chekbox" checked={todo.completed} readOnly className="mr-2"/>
                        {todo.title}
                    </li>
                ))}

            </ul>
        </div>

    )
}