'use client'

import { askQuestion } from '@/utils/api'
import { useState } from 'react'

const Question = () => {
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const answer = await askQuestion(value)
        setResponse(answer)
        setValue('')
        setLoading(false)
    }

    return (
        <div className="grid grid-cols-2">
            <div className="col-span-1">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col w-[400px] gap-2"
                >
                    <input
                        disabled={loading}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                        placeholder="Ask a question"
                        className="border border-black/20 px-4 py-6 text-lg rounded-lg"
                    />
                    <button
                        disabled={loading}
                        type="submit"
                        className="bg-blue-400 px-4 py-2 rounded-lg text-lg hover:bg-blue-700"
                    >
                        Ask
                    </button>
                </form>
            </div>
            <div className="col-span-1">
                {loading && <div>...Loading</div>}
                {response && <div>{response}</div>}
            </div>
        </div>
    )
}
export default Question
