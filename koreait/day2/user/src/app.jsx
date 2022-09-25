import React, {useRef, useState, useMemo, useCallback} from 'react';
// import UserList from './component/userlist';
import UserList from './component/userlist2';
import CreateUser from './component/createuser';

function countActiveUser(users){
  console.log('선택된 사용자 수를 세는 중');
  return users.filter(user => user.active).length;
}

function App() {
  //username, email입력의 상태를 관리
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const {username, email} = inputs;

  //리랜더링될때마다 함수를 새로 생성하는데 재사용하는데 문제가 없다면 기존 함수를 재활용 -> useCallback
  //useCallbakc(함수, deps): deps가 변경될때만 함수를 재생성한다
  const onChange = useCallback((e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);

  //회원배열의 상태를 관리
  const [users, setUsers] = useState([
    {
        id:1,
        username:'김사과',
        email: 'apple@apple.com',
        active: true
    },
    {
        id:2,
        username:'이메론',
        email: 'melon@melon.com',
        active: false
    },
    {
        id:3,
        username:'배애리',
        email: 'berry@berry.com',
        active: false
    },
    {
        id:4,
        username:'안카도',
        email: 'avocado@avocado.com',
        active: false
    },
    {
        id:5,
        username:'오렌지',
        email: 'orange@orange.com',
        active: false
    }
  ]);

  //users의 id를 관리하는 useRef
  const nextId = useRef(6);

  const onCreate = useCallback(() => {
    //새로 추가할 사람
    const user = {
      //current값으로 현재 useRef 값 조회
      id: nextId.current,
      username: username,
      email: email
    };

    //회원배열에 새로운 사람 추가
    //setUsers([...users, user]);
    setUsers(users.concat(user));

    //입력란 reset
    setInputs({
      username: '',
      email: ''
    });

    //current값을 수정하여 현재 useRef 값 수정
    nextId.current += 1;
  }, [users, username, email])

  const onRemove = useCallback(id => {
    //user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    //filter(): 요소 개수만큼 반복하면서 조건을 만족하는 요소만 남김
    setUsers(users.filter(user => user.id !== id));
  }, [users])

  const onToggle = useCallback(id => {
    setUsers(
      //전달받은 id와 일치하는 사람의 active값을 반대로 바꾼다
      users.map(user => user.id === id ? {...user, active: !user.active} : user)
    );
  }, [users])

  // return (
  //   <div>
  //       {/* <UserList/> */}
  //   </div>
  // );

  //users가 변경될때만 실행되면 되는데 입력란에 입력할때도 리렌더링이 일어나서 호출된다
  //리소스를 많이 먹으므로 다른 방법이 필요하다 => useMemo
  //useMemo(계산, deps): 계산하고 deps가 변경될때만 갱신하고 그렇지 않은 경우에는 재사용 
  const count = useMemo(() => countActiveUser(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>선택된 사용자 수 : {count}</div>
    </>
  );
}

export default App;
