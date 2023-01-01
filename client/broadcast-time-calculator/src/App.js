import { useEffect, useState, useRef } from 'react';
import { Collapse, AutoComplete, Input } from 'antd';

import './Layout.css';
import './Element.css';

const { Panel } = Collapse;

const padNumber = (num, length) => {
  return String(num).padStart(length, '0');
};

function Music({ name, time }) {
  return(
    <div style={{display:"flex"}}>
      <p>{name}</p>
      <p>{time}초</p>
    </div>
  )
}

const music_list = [
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
]

function App(props) {
  // 아무것도 입력하지 않으면 undefined가 들어오기 때문에 유효성 검사부터..
  const tempHour = props.hour ? parseInt(props.hour) : 0;
  const tempMin = props.min ? parseInt(props.min) : 0;
  const tempSec = props.sec ? parseInt(props.sec) : 0;
  // 타이머를 초단위로 변환한 initialTime과 setInterval을 저장할 interval ref
  const initialTime = useRef(tempHour * 60 * 60 + tempMin * 60 + tempSec);

  const [count_button, setCountButton] = useState("시작하기")
  const [minute, setMin] = useState(padNumber(tempMin, 2));
  const [second, setSec] = useState(padNumber(tempSec, 2));
  const interval = useRef(null);

  const start_test = () => {
    if (count_button == "시작하기"){
      setCountButton("중지")
    } else {
      setCountButton("시작하기")
    }
  }

  useEffect(() => {
    console.log("useEffect--------------------")
    if(count_button == "중지") {
      interval.current = setInterval(() => {
        initialTime.current += 1;
        setSec(padNumber(initialTime.current % 60, 2));
        setMin(padNumber(parseInt(initialTime.current / 60), 2));
      }, 1000);
      return () => clearInterval(interval.current);
    }
  }, [count_button, second]);

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
                <p>{minute} : {second}</p>
                <button onClick={start_test}>{count_button}</button>
              </Panel>
            </Collapse>

            <div style={{display:"flex"}}>
              <p>발표 속도</p>
              <input className='TimeInput' value="0.0"/>
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
            <h1>0.0초</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
