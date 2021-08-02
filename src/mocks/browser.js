import { setupWorker, rest } from "msw";
const data = require('./recipes.json')

const Worker = setupWorker(
    rest.get('/recipes', (req, res, cxt) => {
        return res(cxt.json(
            data
        ))
    }),
    rest.post('/setRecipes', (req, res, cxt) => {
        data.recipes.push(req.body)

        //possibly write to recipes.json in the future.

        return res(cxt.json(
            data
        ))

    })
)

Worker.start();