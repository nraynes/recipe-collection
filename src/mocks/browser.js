import { setupWorker, rest } from "msw";
const data = require('./recipes.json')

const Worker = setupWorker(
    rest.get('/recipes', (req, res, cxt) => {
        return res(cxt.json(
            data
        ))
    })
)

Worker.start();