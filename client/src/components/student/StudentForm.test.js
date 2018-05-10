import React from 'react'
import { shallow } from 'enzyme'
import {StudentForm} from './StudentForm'

describe('<Button />', () => {
    const button = (<Button />)

    it('renders a button tag', () => {
        expect(button).toHaveTagName('button')
      })

    })