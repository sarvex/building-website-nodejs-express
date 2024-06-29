const express = require('express')
const router = express.Router()

module.exports = (params) => {
  const { speakerService } = params

  router.get('/', async (req, res) => {
    const speakers = await speakerService.getList()
    return res.render('layout', { pageTitle: 'Speakers', template: 'speakers', speakers })
  })

  router.get('/:shortname', (req, res) => {
    return res.send(`Detail page of ${req.params.shortname}`)
  })

  return router
}
