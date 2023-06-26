import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import Question from '@/components/Question'
import { analyze } from '@/utils/ai'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import Link from 'next/link'

const getEntries = async () => {
    const user = await getUserByClerkID()
    const entries = await prisma.journalEntry.findMany({
        where: {
            userId: user.id as string,
        },
        orderBy: {
            createdAt: 'desc',
        },
    })

    console.log(
        await analyze(
            `Today i am waiting for a reply from my recruiter i feel like i might be getting ghosted again because i have a bad portfolio`
        )
    )

    return entries
}

const JournalPage = async () => {
    const entries = await getEntries()
    return (
        <div className="p-10 bg-zinc-400/30 h-full">
            <h2 className="text-3xl mb-8 ">Journals</h2>
            <div className="my-8">
                <Question />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <NewEntryCard />
                {entries.map((entry) => (
                    <Link href={`/journal/${entry.id}`} key={entry.id}>
                        <EntryCard entry={entry} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default JournalPage
