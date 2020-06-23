import React from 'react';
import { shallow } from 'enzyme';
import { App } from './index';
import toJson from 'enzyme-to-json'
import { initialState } from './reducer/index'

describe("Testing App Component", () => {
    it("App Component Should Render", () => {
        const props = {
            toDoList: initialState,
            toDoActions:{
                addColumnData: jest.fn(),
                updateColumnData: jest.fn()
            }
          }
          const wrapper = shallow(<App {...props} />)
          expect(toJson(wrapper)).toMatchSnapshot();
        });
    })