const HOST = 'http://localhost:8800'
const PATH = '/discipline'

export const getDiscipline = () => {

}

export const createDiscipline = async (payload) => {
  return await fetch(`${HOST}${PATH}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
}

export const editDiscipline = async (payload) => {
  return await fetch(`${HOST}${PATH}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
}

export const deleteDiscipline = async (id) => {
  return await fetch(`${HOST}${PATH}/${id}`, {
    method: "DELETE"
  })
}
