
import {render} from '@testing-library/react';
import NavBar from "../NavBar";

describe("NavBar", () =>{
    it("renders correctly" , () => {
        const navbar = render(<NavBar />);
        expect(navbar).toMatchSnapshot();
    })
})