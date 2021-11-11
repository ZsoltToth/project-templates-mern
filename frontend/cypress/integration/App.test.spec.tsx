// @ts-ignore
import React from 'react';
import { mount } from '@cypress/react';
import Greetings from '../../src/Greetings';

describe('Test Rect Cypress Mount', () => {
  it('Renders the App Component', () => {
    mount(<Greetings/>);
    expect(true).to.be.equal(true);
  });
});
