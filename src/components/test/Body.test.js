import { render, screen,act, waitFor } from '@testing-library/react';
import { BodyDiv } from '../Body';



describe('test',() => {
    it('test ok',async() => {
        render(<BodyDiv />);
        act(() => {
            const ele = document.querySelector("#btn-show");
            ele.click();
        });
        await waitFor(() => {
            expect(screen.getByText("Basic Modal")).toBeVisible()
        },{
            timeout:6000
        });
        act(() => {
            document.getElementsByTagName("Button")[3].click();
        });

    },10000)
    it('test cancel',async() => {
        render(<BodyDiv />);
        act(() => {
            const ele = document.querySelector("#btn-show");
            ele.click();
        });
        await waitFor(() => {
            expect(screen.getByText("Basic Modal")).toBeVisible()
        },{
            timeout:6000
        });
        act(() => {
            document.getElementsByTagName("Button")[2].click();
        });
    },10000)
   
})