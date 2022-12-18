import useState from react ;
import { Collapse, AutoComplete, Input } from 'antd';

import './Layout.css';
import './Element.css';

const { Panel } = Collapse;

function Music({ name, time }) {
  return(
    <div style={{display:"flex"}}>
      <p>{name}</p>
      <p>{time}초</p>
    </div>
  )
}

function App() {
  const [timer, setTimer] = useState("시작하기")
  const [speed, setSpeed] = useState(0.0)
  const [music_list, setMusicList] = useState([
    {
      "name" : "Musicccc",
      "time" : "4 : 10"
    },
    {
      "name" : "Musicccc",
      "time" : "4 : 10"
    },
    {
      "name" : "Musicccc",
      "time" : "4 : 10"
    },
    {
      "name" : "Musicccc",
      "time" : "4 : 10"
    },
    {
      "name" : "Musicccc",
      "time" : "4 : 10"
    }
  ])
  const [result, setResult] = useState(0.0)


  return (
    <div style={{background: "lightblue"}}>
      <div className='Main'>
        <div className='Header'>
          <h2>방송시간 계산기</h2>
        </div>

        <div className="InfoBox">
            <Collapse>
              <Panel header="샘플로 발표속도 측정하기">
                <p>안녕하세요 이것은 테스트입니다. 반갑습니다 여러분</p>
                <button>{timer}</button>
              </Panel>
            </Collapse>

            <div style={{display:"flex"}}>
              <p>발표 속도</p>
              <input className='TimeInput' value={speed}/>
              <p>초</p>
            </div>
        </div>

        <div className='MusicBox'>
          <p>음악리스트 추가</p>
          <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{ width: 300 }}
          >
            <Input.Search size="large" placeholder="음악을 검색하세요" enterButton />
          </AutoComplete>
          <div className='MusicList'>
            {music_list.map(music => (
              <Music name={music.name} time={music.time}/>
            ))}
          </div>
        </div>
          
        <div className='TextBox'>
          <input className='ScriptBox' placeholder='스크립트를 입력해주세요'/>
        </div>

        <div style={{marginTop:"20px"}}>
          <div>
            <button className='ResultButton'>계산하기</button>
          </div>
          <div className="ResultBox">
            <h1>{result}초</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
