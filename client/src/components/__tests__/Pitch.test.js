import {render} from '@testing-library/react';
import Pitch from "../Pitch";

describe("Header", () =>{
    it("renders correctly" , () => {
        const pitch = render(<Pitch />);
        expect(pitch).toMatchSnapshot();
    })
})