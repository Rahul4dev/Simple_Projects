import { Tooltip } from './Tooltip';

function App() {
  return (
    <div className="App">
      <button className="">Tooltip</button>
      <Tooltip
        text={'Pressing this button will close the tooltip, not exactly😂'}
      >
        ⚠️
      </Tooltip>
      <Tooltip
        text={
          'This is placed over the button, WYSIWYG is what you see is what yor get'
        }
      >
        🤣
      </Tooltip>
      <Tooltip
        text={
          "we're learning how to make tooltip, which will be cool feature to add to the upcoming project"
        }
      >
        😉
      </Tooltip>
      <Tooltip
        text={'We should create such projects to enhance their functionality'}
      >
        🤓
      </Tooltip>
      <Tooltip text={'Next project will be on Blockchain'}>🦿</Tooltip>
      <Tooltip text={'Hello Guys, we are learning about tooltip today'}>
        🙋‍♂️
      </Tooltip>
    </div>
  );
}

export default App;
