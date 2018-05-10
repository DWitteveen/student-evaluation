import currentuser from './currentUser'

describe('currentUser reducer', () => {
  const reducer = currentuser
  const state = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(state)
  })
})