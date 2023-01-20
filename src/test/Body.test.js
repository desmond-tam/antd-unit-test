import { render, screen,act, waitFor } from '@testing-library/react';
import { SearchContainer } from '../components/SearchContainer.js';



describe('test',() => {
    beforeEach(() => {
        console.error = jest.fn();
    })

    it('test it',async() => {
        global.fetch = jest.fn((url,options) => {
            return Promise.resolve([
                "test1",
                "test2",
                "test3"
            ])
        })
        act(() => {
            render (
                <SearchContainer url="https://localhost:8000/web"></SearchContainer>
            )
        })

        await waitFor(() => expect(screen.getByText("test1")).toBeVisible());
        // await waitFor(() => expect(screen.getByText("test13")).toBeVisible(),{
        //     timeout:600
        // });
        console.log(document.body.innerHTML);
    },40000);


})