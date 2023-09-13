import Link from "next/link";
// import { analyze } from "@/utils/ai"

export default function Home() {
  return (
  <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
    <div className="w-full max-w-[600px] mx-auto">
      <h1 className="text-6xl">The best journal app, period.</h1>
      <p className="text-2xl text-white/60 mb-4">This is the best app for tracking your mood through out your life. All you have to do is be honest.</p>
      <div>
        <Link href="/journal">
        <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
          get started
        </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

// analyze(`I'm going to give you a journal entry, I want you to analyze it for a few things. I need the mood, a summary, what the subject is, and a color representing the mood. You need to respond back with formatted JSON like so: {"mood": "", "subject":"", "color": "", "negative": ""}.

// entry:
// Today was a really great day. I finally was able to grab that pair of shoes I have been dying to get.
// `)