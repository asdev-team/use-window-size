import React from 'react';
import { render, screen } from '@testing-library/react';
import { WindowSizeProvider, useWindowSize } from '../index';

describe( 'useWindowSize', () => {
    it( 'should return the initial window size', () => {
        const Component = () => {
            const { width, height } = useWindowSize();
            return (
                <div>
                    <span>Width: { width }</span>
                    <span>Height: { height }</span>
                </div>
            );
        };

        render(
            <WindowSizeProvider>
                <Component/>
            </WindowSizeProvider>
        );

        expect( screen.getByText( 'Width: 1024' ) ).toBeInTheDocument();
        expect( screen.getByText( 'Height: 768' ) ).toBeInTheDocument();
    } );

    it( 'should update the window size on resize', () => {
        const Component = () => {
            const { width, height } = useWindowSize();
            return (
                <div>
                    <span>Width: { width }</span>
                    <span>Height: { height }</span>
                </div>
            );
        };

        render(
            <WindowSizeProvider>
                <Component/>
            </WindowSizeProvider>
        );

        Object.defineProperty( global, 'innerWidth', { value: 800 } );
        Object.defineProperty( global, 'innerHeight', { value: 600 } );
        global.dispatchEvent( new Event( 'resize' ) );

        expect( screen.getByText( 'Width: 800' ) ).toBeInTheDocument();
        expect( screen.getByText( 'Height: 600' ) ).toBeInTheDocument();
    } );
} );