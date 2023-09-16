'use client'

import { updateEntry } from "@/utils/api"
import { useRef, useState } from "react"
import { useAutosave } from "react-autosave"

const Editor = ({ entry }) => {
const [value, setValue] = useState(entry.content)
const [isLoading, setIsLoading] = useState(false)
const [analysis, setAnalysis] = useState(entry.analysis)
const valueRef = useRef(entry.content);

const handleOnChange = (e) => {
  setValue(e.target.value);
  valueRef.current = e.target.value;
}
let mood, summary, color, subject, negative;

if (analysis) {
  ({ mood, summary, color, subject, negative } = analysis);
}
const analysisData = [
  { name: 'Summary', value: summary },
  { name: 'Subject', value: subject },
  { name: 'Mood', value: mood },
  { name: 'Negative', value: negative ? "True" : "False" },
]

useAutosave({
    data: valueRef.current,
    onSave: async (_value) => {
      setIsLoading(true)
      const  data  = await updateEntry(entry.id, _value)
      setAnalysis(data.analysis)
      setIsLoading(false)
    }
})
  return ( 
      <div className="w-full h-full grid grid-cols-3">
        <div>
          {isLoading && <div>...loading</div> }
          <textarea 
            value={value}
            onChange={(e) => handleOnChange(e) }
            className="w-full h-full text-xl p-8 outline-none"/>
        </div>
        <div className="border-1 border-black/10">
          <div className="px-6 py10" style={{backgroundColor: color}} >
              <h2>Anaysis</h2>
          </div>
          <div>
            <ul>
              {analysisData.map(item => (
                <li key={item.name} className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      )
} 

export default Editor