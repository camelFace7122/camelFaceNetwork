import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatusWithHooks component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'aslan kosshanov'} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('aslan kosshanov');
    });

    test('span should be dispayed with correct status', () => {
        const component = create(<ProfileStatus status={'aslan kosshanov'} />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.length).toBe(1);
    })
})