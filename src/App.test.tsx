import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import './Mocks'
import App from './App';
import Card from './components/templates/Card'
import Media from './components/templates/Media'

test('the tests are working', () => {
    const fp = 0.1 + 0.2;
    //expect(fp).toBe(0.3); //This won't work because of rounding error
    expect(fp).toBeCloseTo(0.3); // This works.

    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);

    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();

    expect('team').not.toMatch(/I/);
    expect('Christoph').toMatch(/stop/);

    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'beer',
    ];
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');

    function compileAndroidCode() {
        throw new Error('you are using the wrong JDK');
    }
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);
    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});

xit('app renders without crash', () => {
    render(<App />);
});

test('render repo, csio, and readme', () => {
    const { getByText } = render(<Card data={{
        type: 'repo',
        title: 'Applebottom',
        repo: 'LyricSearcher',
        description: 'A lot of stuff went into this.',
    }} />);

    const linkElt = getByText('Inspect Repo');
    expect(linkElt).toBeInTheDocument();

    fireEvent.click(linkElt);
    
});

test('render ref and notes link', () => {
    const { title, description, notesPath } = {
        title: 'HoweverThis',
        description: 'New fit',
        notesPath: 'https://www.example.com'
    }

    const { rerender, queryByText } = render(<Card data={{ type: 'ref', title, description, }} />);

    expect(queryByText('View Notes')).toBeNull();
    expect(queryByText('Reference Notes')).toBeInTheDocument();
    expect(queryByText(title)).toBeInTheDocument();
    expect(queryByText(description)).toBeInTheDocument();

    rerender(<Card data={{ type: 'ref', title, description, notesPath }} />);
    const linkElt = queryByText('View Notes') as HTMLLinkElement;

    expect(linkElt).toBeInTheDocument();
    expect(linkElt.href).toMatch(notesPath);
});

test('render proj', () => {
    const { title, description } = {
        title: 'WauserMauser',
        description: 'Yeah this is pretty cool.'
    }
    const { queryByText } = render(<Card data={{ type: 'proj', title, description }} />)

    expect(queryByText('Project'))
    expect(queryByText(title)).toBeInTheDocument();
    expect(queryByText(description)).toBeInTheDocument();
});
