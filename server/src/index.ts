import 'reflect-metadata'
import {createKoaServer} from 'routing-controllers'
import setupDb from './db'
import UserController from './users/controller'
import LoginController from './logins/controller'
import StudentController from './students/controller'
import BatchController from './batch/controller'
import {Action} from 'routing-controllers'
import {verify} from './jwt'

const port = process.env.PORT || 4000

const app = createKoaServer({
    cors:true,
    controllers: [
      UserController,
      LoginController,
      StudentController,
      BatchController
    ],
    authorizationChecker: (action: Action) => {
        const header: string = action.request.headers.authorization

        if (header && header.startsWith('Bearer ')) {
            const [ , token ] = header.split(' ')
            return !!(token && verify(token))
          }
        // ...
        return false
    }
  })

setupDb()
  .then(_ =>
    app.listen(4000, () => console.log('Listening on port ' + port))
  )
  .catch(err => console.error(err))