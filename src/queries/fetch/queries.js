import got from 'got'

async function fetchAll (req, res, next) {
  const {body} = await got('http://localhost:8000/api/models', {
    json: true,
    timeout:15000
  })
  res.status(200)
  .json({
    status: 'success',
    payload: body
  })
}

export default {
  fetchAll
}