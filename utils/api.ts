const createURL = (path) => window.location.origin + path

export const newEntry = async () => {
  const res = await fetch(
    new Request(createURL('/api/journal'), {
      method: 'POST',
      body: JSON.stringify({ content: 'new entry' }),
      headers: {
      'Content-Type': 'application/json'
    },
    })
  )

  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong on API server!')
  }
}

export const updateEntry = async (id, content) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: 'PATCH',
      body: JSON.stringify({ content }),
       headers: {
      'Content-Type': 'application/json'
    },
    })
  )

  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong on API server!')
  }
}

export const askQuestion = async (question) => {

  const res = await fetch(
    new Request(createURL(`/api/question`), {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({ question }),
      
    })
  )

  if (res.ok) {
    return res.json();
  } else {
    const errorData = await res.text();
    throw new Error(`API server error: ${errorData}`);
  }
}