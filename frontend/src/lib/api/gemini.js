const HOST = 'http://localhost:8800'
const PATH = '/pdf'

export const uploadFile = async (userId, payload) => {
  return await fetch(`${HOST}${PATH}/${userId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
}
