import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Button from "./Button";


describe("Button 컴포넌트 (@testing-library/react)", () => {
    it("컴포넌트가 정상적으로 생성된다", () => {
        // render(): 컴포넌트를 랜더한다
        const view = render(<Button />);
        expect(view).not.toBe(null)
    })

    it("'button'이라고 쓰여있는 엘리먼트는 HTMLButtonElement 이다", () => {
        render(<Button />);
        //screen.getByText(): 해당 text를 가지고 있는 HTMLElement를 찾아서 리턴
        const buttonElement = screen.getByText('button');
        expect(buttonElement).toBeInstanceOf(HTMLButtonElement)
    })

    it("버튼을 클락하면 p태그 안에 '버튼이 방금 눌렸다'라고 쓰여진다", () => {
        render(<Button />);
        const buttonElement = screen.getByText('button');

        // fireEvent: 이벤트 발생
        fireEvent.click(buttonElement);

        const p = screen.getByText('버튼이 방금 눌렸다');
        expect(p).not.toBeNull();
        expect(p).toBeInstanceOf(HTMLParagraphElement);
    })

    it('버튼을 클릭하기 전에는 p태그 안에 "버튼이 눌리지 않았다"라고 쓰여진다', () => {
        render(<Button />);

        const p = screen.getByText("버튼이 눌리지 않았다");
        expect(p).not.toBeNull();
        expect(p).toBeInstanceOf(HTMLParagraphElement);
    })

    it('버튼을 클릭하고 5토 뒤에는 p태그안에 "버튼이 눌리지 않았다"라고 쓰여진다', () => {
        // 이 구간에서 fakeTimer를 사용할 수 있다
        jest.useFakeTimers();

        render(<Button />);
        const buttonElement = screen.getByText('button');

        // fireEvent: 이벤트 발생
        fireEvent.click(buttonElement);

        /* 
            Warning: An update to Button inside a test was not wrapped in act(...).
            When testing, code that causes React state updates should be wrapped into act(...):
            
            act(() => {
                fire events that update state
            });
        */

        // act()
        // 테스트 방법론인 'Arrange Act Assert'중 Act
        // * Arrange: 테스트 코드를 준비해둔 구간
        // * Act: Arrange에 행위를 가함
        // * Assert: 확인하는 부분
     
        act(() => {
            //5초 흐른다
            jest.advanceTimersByTime(5000)
        })

        const p = screen.getByText('버튼이 눌리지 않았다');
        expect(p).not.toBeNull();
        expect(p).toBeInstanceOf(HTMLParagraphElement);
    })

    it('버튼을 클릭하면 5초 동안 버튼이 비활성화 된다', () => {
        jest.useFakeTimers();

        render(<Button />);
        const buttonElement = screen.getByText('button');

        fireEvent.click(buttonElement);

        // 비활설화
        // expect(buttonElement.disabled).toBeTruthy();
        // testing-library/jest-dom 라이브러리에서 제공하는 함수로 작성
        expect(buttonElement).toBeDisabled();
    
        act(() => {
            jest.advanceTimersByTime(5000)
        })

        //활성화
        // expect(buttonElement.disabled).toBeFalsy();
        expect(buttonElement).not.toBeDisabled();
    })
})