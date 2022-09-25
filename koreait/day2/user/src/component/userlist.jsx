import React from 'react';

//한 사람을 화면에 출력하는 컴포넌트
function User({user}){
    return (
        <div>
            <b>{user.username} <span>({user.email})</span></b>
        </div>
    )
}

//모든 사람을 화면에 출력하는 컴포넌트
function UserList(){
    const users = [
        {
            id:1,
            username:'김사과',
            email: 'apple@apple.com'
        },
        {
            id:2,
            username:'이메론',
            email: 'melon@melon.com'
        },
        {
            id:3,
            username:'배애리',
            email: 'berry@berry.com'
        },
        {
            id:4,
            username:'안카도',
            email: 'avocado@avocado.com'
        },
        {
            id:5,
            username:'오렌지',
            email: 'orange@orange.com'
        }
    ];

    return (
        <div>
            {/* 
            <div>
                <User user={users[0]}/>
            </div>
            <div>
                <User user={users[1]}/>
            </div>
            <div>
                <User user={users[2]}/>
            </div>
            <div>
                <User user={users[3]}/>
            </div>
            <div>
                <User user={users[4]}/>
            </div>    
            */}

            {/* map(): 해당 요소의 개수만큼 반복, 해당 요소는 변수에 저장*/}
            {/* 에러: Warning: Each child in a list should have a unique "key" prop.*/}
            {users.map((user, index) => (
                <User user={user} key={index} />
            ))}
        </div>
    )
}

export default UserList;