'use client'

import { updateEntry } from "@/utils/api"
import { useRef, useState } from "react"
import { useAutosave } from "react-autosave"

const Editor = ({ entry }) => {
const [value, setValue] = useState(entry.content)
const [isLoading, setIsLoading] = useState(false)
const valueRef = useRef(entry.content);

const handleOnChange = (e) => {
  setValue(e.target.value);
  valueRef.current = e.target.value;
}

useAutosave({
    data: valueRef.current,
    onSave: async (_value) => {
      setIsLoading(true)
      const updated = await updateEntry(entry.id, _value)
      setIsLoading(false)
    }
})
  return ( 
      <div className="w-full h-full">
        {isLoading && <div>...loading</div> }
        <textarea 
          value={value}
          onChange={(e) => handleOnChange(e) }
          className="w-full h-full text-xl p-8 outline-none"/>
      </div>
      )
} 

export default Editor