import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../app";

export default function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Totla items : {totalNum}</li>
      <li>Items Completed : {totalCompletedNum}</li>
      <li>Items UnCompleted : {totalUncompletedNum}</li>
      <li>Percent completed : {formattedPercentCompleted}</li>
    </ul>
  );
}
