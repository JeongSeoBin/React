import { RecoilRoot, atom, useRecoilState, selector, useRecoilValue} from "recoil";

const textState = atom({
  key: 'textState',
  default: ''
});

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);
    return text.length;
  }
})

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br/>
      echo: {text}
    </div>
  )
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return (
    <>
      character count: {count}
    </>
  )

}

function CharacterCounter() {
  return (
    <div>
      <TextInput/>
      <CharacterCount/>
    </div>
  )
}

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter/>
    </RecoilRoot>
  );
}

export default App;
