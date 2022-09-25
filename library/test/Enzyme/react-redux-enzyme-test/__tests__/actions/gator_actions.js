describe('gator_actions', () => {
    beforeEach(() => {
        store.clearActions();
    })

    describe('eatFood' => {
        test('Dispatches the correct action and payload', () => {
            store.dispatch(gatorActions.eatFood('bread'))
            expect(store.getActions()).toMatchSnapshot()
        })
    })
})