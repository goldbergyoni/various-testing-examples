import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {HiddenMessage} from '../hidden-message'

import React from 'react'
import {CSSTransition} from 'react-transition-group'
function Fade({children, ...props}) {
  return (
    <CSSTransition {...props} timeout={1000} className="fade">
      {children}
    </CSSTransition>
  )
}


function 
class Calendar extends React.Component {
  static defaultProps = {showFilters: false}
  
  render() {
    return (
      <div>
        A filters panel with a button to hide/show filters
        <FiltersPanel showFilter={showFilters} title='Choose Filters'/>
      </div>
    )
  }
}

test('Shallow/mocked approach: When clicked to show filters, filters are displayed', () => {
    //Arrange
    const wrapper = shallow(<Calendar showFilters={false} title='Choose Filter'/>)

    //Act
    wrapper.find('filtersPanel').instance().showFilters();
    //Tap into the internals, bypass the UI and invoke a method. White-box approach

    //Assert
    expect(wrapper.find('Filter').props()).toEqual({title: 'Choose Filter'});
    //what if we change the prop name or don't pass anything relevant?
})

test('Realistic approach: When clicked to show filters, filters are displayed', () => {
    //Arrange
    const wrapper = mount(<Calendar showFilters={false} />)

    //Act
    wrapper.find('button').simulate('click');

    //Assert
    expect(wrapper.text().includes('Choose Filter'));
    //This is how the user will approach this element: by text
})

