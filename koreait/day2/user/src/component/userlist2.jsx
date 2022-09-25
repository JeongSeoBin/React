import React, {useEffect} from 'react';

//한 사람을 화면에 출력하는 컴포넌트
const User = React.memo(function User({user, onRemove, onToggle}){
    //마운트시, 언마운트시, 컴포넌트가 바뀔때 실행
    // useEffect(() => {
    //     //console.log('컴포넌트가 화면에 나타남');
    //     console.log(user);
    //     console.log('user값이 설정되었음')
    //     return () => {
    //         //console.log('컴포넌트가 화면에서 사라짐')
    //         console.log(user);
    //         console.log('user가 바뀌기 전');
    //     }
    // }, [user]);

    //deps 파라미터 생략: 컴포넌트가 리랜더링될 때마다 무조건 실행
    // useEffect(() => {
    //     console.log(user);
    // });

    return (
        <div>
            <b 
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'deeppink' : 'black'
                }}
                onClick={() => onToggle(user.id)}

            >{user.username}</b> <span>({user.email})</span> &nbsp;&nbsp;
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
})

//모든 사람을 화면에 출력하는 컴포넌트
function UserList({users, onRemove, onToggle}){

    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default React.memo(UserList);