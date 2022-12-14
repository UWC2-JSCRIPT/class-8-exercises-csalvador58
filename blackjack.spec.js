describe('Tests for Blackjack game', () => {

    describe('Test for dealerShouldDraw method', () => {

        it('Should have the dealer draw a card if hand is under 17 or is a soft 17', () => {
            let hand1 = [
                {suit: 'hearts', val: 10, displayVal: '10'}, 
                {suit: 'hearts', val: 9, displayVal: '9'}
            ];
            expect(dealerShouldDraw(hand1)).toBe(false);

            let hand2 = [
                {suit: 'spades', val: 11, displayVal: 'Ace'}, 
                {suit: 'spades', val: 6, displayVal: '6'}
            ];
            expect(dealerShouldDraw(hand2)).toBe(true);

            let hand3 = [
                {suit: 'clubs', val: 10, displayVal: '10'}, 
                {suit: 'clubs', val: 6, displayVal: '6'},
                {suit: 'clubs', val: 11, displayVal: 'Ace'}
            ];
            expect(dealerShouldDraw(hand3)).toBe(false);

            let hand4 = [
                {suit: 'diamonds', val: 2, displayVal: '2'}, 
                {suit: 'diamonds', val: 4, displayVal: '4'},
                {suit: 'diamonds', val: 2, displayVal: '2'},
                {suit: 'diamonds', val: 5, displayVal: '5'}
            ];
            expect(dealerShouldDraw(hand4)).toBe(true);
        });
    });
});