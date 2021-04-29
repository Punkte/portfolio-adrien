import React from 'react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { SNCFProjectDescription } from '../stories/project-description/project-description.stories';
import { renderWithRouter } from './utils';

describe('Renders project-description component', () => {
    test('with default', () => {
        const { container } = renderWithRouter(<SNCFProjectDescription />);
        expect(container).toBeTruthy();
    });
});