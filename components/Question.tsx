'use client'

import { useState } from 'react'

const Question = () => {
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-[400px] gap-2"
            >
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    placeholder="Ask a question"
                    className="border border-black/20 px-4 py-6 text-lg rounded-lg"
                />
                <button
                    type="submit"
                    className="bg-blue-400 px-4 py-2 rounded-lg text-lg hover:bg-blue-700"
                >
                    Ask
                </button>
            </form>
        </div>
    )
}
export default Question
