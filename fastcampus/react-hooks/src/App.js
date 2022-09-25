import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4";
import Example5 from "./components/Example5";
import Example6 from "./components/Example6";
import Example7 from "./components/Example7";
import Exmaple8 from "./components/Example8";
import useWindowWidth from "./hooks/useWindowWidth";
import withHasMounted from './hocs/withHasMounted';
import useHasMounted from "./hooks/useHasMounted";


function App({hasMounted}) {
  const width = useWindowWidth();
  const hasMountedFromHooks = useHasMounted();

  // withHasMounted hoc가 추가한 hasMounted props
  console.log(hasMounted);
  // useHasMounted hook이 리턴한 값
  console.log(hasMountedFromHooks)

  return (
    <div>
      {/* <Example1/>
      <Example2/>
      <Example3/>
      <Example4/>
      <Example5/>
      <Example6/>
      <Example7/> */}
      <Exmaple8/>
      {/* {width} */}
    </div>
  );
}

export default withHasMounted(App);
