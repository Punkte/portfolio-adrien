import React from 'react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import Project from '../pages/Project';
import { renderWithRouter } from './utils';

describe('Renders Project component', () => {
    test('with default behavior', () => {
        const { container } = renderWithRouter(<Project />, {route: '/works/bonsoir'});
        expect(container).toBeTruthy();
    });
});