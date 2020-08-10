import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../components/authentication/Login'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { fireEvent, render,screen,renderWithRouter } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Router } from 'react-router-dom'
import Welcome from '../components/landing/Welcome'
import { createMemoryHistory } from 'history'
import AppRoute from '../AppRoute'

describe("With React Testing Library" ,() =>{
    const initialState ={output:10}
    const mockStore = configureStore()
    let store,wrapper;
    it('renders without crashing', () => {
        store = mockStore(initialState)
        const div = document.createElement("div")
        ReactDOM.render(<Provider store={store}><Login /></Provider>,div)
      });
    // test('allow the user to login successfully',async () =>{

    //     render(<Provider store={store}><Login /></Provider>);         
    //     const route = '/welcome'
    //     const { getByTestId } = renderWithRouter(<Provider store={store}><AppRoute/></Provider>, { route })

    //     fireEvent.change(screen.getByTestId(/uname/i),{
    //          target:"admin"
    //     })
    //     fireEvent.change(screen.getByTestId(/password/i),{
    //         target:"admin"
    //     })
    //     fireEvent.click(getByTestId(/login/i));
    //     expect (getByTestId('welcome')).toHaveBeenCalledWith(route);
     
    // });
});


