import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('OrderOption test', () => {
  it('renders correctly', () => {
    const component = shallow(<OrderOption id='id' name='name' currentValue='currentValue' type='type' values={['value', 'value1']} />);
    expect(component).toBeTruthy();
  });
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
  it('should render title name', () => {
    const expectedName = 'name';
    const component = shallow(<OrderOption id='id' name={expectedName} type='date' currentValue='current value' values={['value', 'value1']} />);

    expect(component.find('.title').text()).toEqual(expectedName);
  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};
  
const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};
  
const testValue = mockProps.values[1].id;
//const testValueNumber = 3;
  
  
for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;

    let renderedSubcomponent;
    let mockSetOrderOption; /* 1 */

    beforeEach(() => {
      mockSetOrderOption = jest.fn(); /* 2 */
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption} /* 3 */
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });


  
    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });
    
  
    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);
        
          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);
        
          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });        
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break; 
      }
      case 'icons': {
        it('contain div with class icon', () => {
          const icon = renderedSubcomponent.find('.icon');
          expect(icon.length).toBe(2);

          const activeIcon = renderedSubcomponent.find('.iconActive');
          expect(activeIcon.length).toBe(1);

        });

        it('should run setOrderOption function on click', () => {
          renderedSubcomponent.find('.icon').simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
        });
        break;
      }
      case 'checkboxes' : {
        it('contains input type checkboxes', () => {
          const input = renderedSubcomponent.find('input[type="checkbox"]');
          expect(input.lenght).toBe(mockProps.values.lenght);
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find(`input[value="${testValue}"]`).simulate('change', {currentTarget: {checked: true}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id] : [mockProps.currentValue, testValue]});
        });
        break;
      }
    }
  });
}
  
