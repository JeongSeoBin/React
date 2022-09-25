import React from 'react';

//사람을 추가하는 컴포넌트
function CreateUser({username, email, onChange, onCreate}){
    return (
        <div>
            <input name="username" placeholder="이름" onChange={onChange} value={username}/>
            <input name="email" placeholder="이메일" onChange={onChange} value={email}/>
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser);