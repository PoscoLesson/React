import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PostItem from './PostItem';

export default function Post() {
  const requestURL = useRef(
    'https://crudcrud.com/api/59f41d7eab9245909ef9e1310241a196/post'
  );

  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    title: '',
    writer: '',
    content: '',
  });

  // 컴포넌트가 마운트될 때, 게시글 목록 받아오기
  useEffect(() => {
    axios
      .get(requestURL.current)
      .then((response) => {
        setPosts(response.data);
      })
      .catch(handleError);
  }, []);

  // 에러 핸들링 함수
  const handleError = (error) => {
    if (error.response) {
      // 서버가 응답을 반환했지만, 오류가 있는 경우
      console.log('응답 상태 코드: ', error.response.status);
    } else if (error.request) {
      // 요청이 전송되었으나 응답을 받지 못한 경우
      console.log('요청은 성공했지만 응답을 받지 못함');
    } else {
      // 요청을 설정하는 중에 발생한 오류
      console.log('요청 자체에 문제 발생:', error.message);
    }
  };

  // 새 게시글을 등록하는 함수
  const handleCreatePost = () => {
    axios
      .post(requestURL.current, post)
      .then((response) => {
        // 응답으로 받은 데이터를 새 게시글 객체 생성
        const newPost = { ...response.data, id: response.data._id };
        // 새 게시글을 기존 목록에 추가합니다.
        setPosts([...posts, newPost]);
        setPost({
          title: '',
          writer: '',
          content: '',
        });
      })
      .catch(handleError);
  };

  // 게시글을 삭제하는 함수
  const handleDeletePost = (id) => {
    axios
      .delete(`${requestURL.current}/${id}`)
      .then(() => {
        // 삭제된 게시글을 제외하고 목록을 업데이트
        setPosts(posts.filter((post) => post._id !== id));
      })
      .catch(handleError);
  };

  return (
    <>
      <input
        type='text'
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder='제목'
      />
      <input
        type='text'
        value={post.writer}
        onChange={(e) => setPost({ ...post, writer: e.target.value })}
        placeholder='작성자'
      />
      <input
        type='text'
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
        placeholder='내용'
      />
      <button onClick={handleCreatePost}>등록</button>

      {posts.length !== 0 && <h3>게시글 목록</h3>}
      {posts.map((post) => (
        <PostItem
          key={post._id}
          post={post}
          onDelete={() => handleDeletePost(post._id)}
        />
      ))}
    </>
  );
}
