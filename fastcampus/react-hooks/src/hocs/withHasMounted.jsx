import React from 'react';

// 인자로 받은 컴포넌트에 mount되었다는 표시를 props로 추가하여 새로운 컴포넌트를 반환
export default function withHasMounted(Component) {
    class NewComponent extends React.Component {
        state = {
            hasMounted: false
        }

        componentDidMount() {
            this.setState({hasMounted: true})
        }

        render() {
            const {hasMounted} = this.state;
    
            // 인자로 넘어 온 컴포넌트에 hasMounted props추
            // {...this.props}: 원래 컴포넌트에 넘어 온 props도 넘겨줘야함
            return <Component {...this.props} hasMounted={hasMounted}/>
        }
    }

    // 디버깅을 위해 hoc컴포넌트라는 디스플레이 네임을 지어준다
    NewComponent.displayName = `withHasMounted(${Component.name})`

    return NewComponent

}