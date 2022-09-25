import axios from "axios";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";

// custom hook
function usePosts() {
  return useQuery("posts", async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  });
}

function Posts({ setPostId }) {
  console.log("Posts render");
  const queryClient = useQueryClient();
  // posts 서버 데이터 fetch + 쿼리 데이터 인스턴스 생성
  const { status, data, error, isFetching } = usePosts();
  console.log("status", status);
  console.log("fetching?", isFetching);

  return (
    <div>
      <h1>posts</h1>
      {status === "loading" ? (
        "Loading"
      ) : status === "error" ? (
        <span>error: {error.message}</span>
      ) : (
        <>
          <div>
            {data.map((post) => (
              <p key={post.id}>
                <a
                  onClick={() => setPostId(post.id)}
                  href="#"
                  style={
                    // post 서버 데이터 (쿼리 데이터)의 최신 상태 조회
                    queryClient.getQueryData(["post", post.id])
                      ? {
                          fontWeight: "bold",
                          color: "green",
                        }
                      : {}
                  }
                >
                  {post.title}
                </a>
              </p>
            ))}
          </div>
          <div>{isFetching ? "background updating.. " : ""}</div>
        </>
      )}
    </div>
  );
}

const getPostId = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};

// custom hook
function usePost(postId) {
  return useQuery(["post", postId], () => getPostId(postId), {
    enabled: !!postId,
  });
}

function Post({ postId, setPostId }) {
  // post 서버 데이터 fetch + 쿼리 데이터 인스턴스 생성
  const { status, data, error, isFetching } = usePost(postId);

  return (
    <div>
      <div>
        <a onClick={() => setPostId(-1)} href="#">
          back
        </a>
      </div>
      {!postId || status === "loading" ? (
        "Loading"
      ) : status === "error" ? (
        <span>error: {error.message}</span>
      ) : (
        <>
          <h1>{data.title}</h1>
          <div>
            <p>{data.body}</p>
          </div>
          <div>{isFetching ? "background updating.." : ""}</div>
        </>
      )}
    </div>
  );
}

function Example2() {
  // 클라이언트 데이터
  const [postId, setPostId] = useState(-1);

  return (
    <>
      <p>
        As you visit the posts below, you will notice them in a loading state
        the first time you load them. However, after you return to this list and
        click on any posts you have already visited again, you will see them
        load instantly and background refresh right before your eyes!{" "}
        <strong>
          (You may need to throttle your network speed to simulate longer
          loading sequences)
        </strong>
      </p>
      {postId > -1 ? (
        <Post postId={postId} setPostId={setPostId} />
      ) : (
        <Posts setPostId={setPostId} />
      )}
    </>
  );
}

export default Example2;
