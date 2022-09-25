import axios from "axios";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

/* auto refetching / polling / realtime */
export default function Example3() {
  const queryClient = useQueryClient();
  const [intervalMs, setIntervalMs] = useState(1000);
  const [value, setValue] = useState("");

  const { status, data, error, isFetching } = useQuery(
    "todos",
    async () => {
      const response = await axios.get("../api/data");
      return response.data;
    },
    {
      // refetch the data every second
      refetchInterval: intervalMs,
    }
  );

  const addMutation = useMutation(
    (value) => fetch(`../api/data?add=${value}`),
    {
      onSuccess: () => queryClient.invalidateQueries("todos"),
    }
  );

  const clearMutation = useMutation(() => fetch(`../api/data?clear=1`), {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });

  if (status === "loading") return <div>loading</div>;
  if (status === "error") return <span>error: {error.message}</span>;

  return (
    <div>
      <label>
        query interval speed (ms): {"  "}
        <input
          value={intervalMs}
          onChange={(ev) => setIntervalMs(Number(ev.target.value))}
          type="number"
          step="100"
        />
        <span
          style={{
            display: "inline-block",
            marginLeft: ".5rem",
            width: 10,
            height: 10,
            background: isFetching ? "green" : "transparant",
            transition: isFetching ? "all .3s ease" : "none",
            borderRadius: "100%",
            transform: "scale(2)",
          }}
        />
      </label>
      <h2>todo list</h2>
    </div>
  );
}
