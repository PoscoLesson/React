import { useState, useRef } from 'react';
import axios from 'axios';

export default function UseOpenApi() {
  // requestURL 구조
  // const requestURL = useRef('https://crudcrud.com/api/고유한 엔드포인트');

  // HTTP 요청을 실패하도록 임의로 수정된 요청 URL
  // const requestURL = useRef(
  //   'https://crudcrud.com/api/aaa/고유한 엔드포인트'
  // );

  // 실습에서 사용된 requestURL
  const requestURL = useRef(
    'https://crudcrud.com/api/7be57c703e9a423790b834548bb92e87'
  );

  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    age: '',
  });
  const [updateUserData, setUpdateUserData] = useState({
    name: '',
    age: '',
  });

  const getAllUsers = () => {
    axios
      .get(`${requestURL.current}/user`)
      .then((response) => {
        console.log('유저 목록:', response.data);
      })
      .catch((error) => {
        if (error.response) {
          // 서버가 응답했으나 요청이 실패한 경우
          console.log('응답 상태 코드: ', error.response.status);
        } else if (error.request) {
          // 요청이 이루어졌으나, 응답을 받지 못한 경우
          console.log('요청은 성공했지만 응답을 받지 못함');
        } else {
          // 요청 자체에 문제가 있는 경우
          console.log('요청 자체에 문제 발생:', error.message);
        }
      });
  };

  const createUser = () => {
    axios
      .post(`${requestURL.current}/user`, userData)
      .then((response) => {
        console.log('생성된 유저 정보:', response.data);
        setUserData({ name: '', age: '' });
        setUserId(response.data._id);
      })
      .catch((error) => {
        if (error.response) {
          // 서버가 응답했으나 요청이 실패한 경우
          console.log('응답 상태 코드: ', error.response.status);
        } else if (error.request) {
          // 요청이 이루어졌으나, 응답을 받지 못한 경우
          console.log('요청은 성공했지만 응답을 받지 못함');
        } else {
          // 요청 자체에 문제가 있는 경우
          console.log('요청 자체에 문제 발생:', error.message);
        }
      });
  };

  const updateUser = () => {
    axios
      .put(`${requestURL.current}/user/${userId}`, updateUserData)
      .then((response) => {
        console.log('유저 정보 수정 성공');
        setUpdateUserData({ name: '', age: '' });
      })
      .catch((error) => {
        if (error.response) {
          // 서버가 응답했으나 요청이 실패한 경우
          console.log('응답 상태 코드: ', error.response.status);
        } else if (error.request) {
          // 요청이 이루어졌으나, 응답을 받지 못한 경우
          console.log('요청은 성공했지만 응답을 받지 못함');
        } else {
          // 요청 자체에 문제가 있는 경우
          console.log('요청 자체에 문제 발생:', error.message);
        }
      });
  };

  const deleteUser = () => {
    axios
      .delete(`${requestURL.current}/user/${userId}`)
      .then((response) => {
        console.log('유저 삭제 성공');
        setUserId('');
      })
      .catch((error) => {
        if (error.response) {
          // 서버가 응답했으나 요청이 실패한 경우
          console.log('응답 상태 코드: ', error.response.status);
        } else if (error.request) {
          // 요청이 이루어졌으나, 응답을 받지 못한 경우
          console.log('요청은 성공했지만 응답을 받지 못함');
        } else {
          // 요청 자체에 문제가 있는 경우
          console.log('요청 자체에 문제 발생:', error.message);
        }
      });
  };

  return (
    <>
      <button onClick={getAllUsers}>모든 유저 조회</button>

      <div>
        <input
          type='text'
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          placeholder='이름'
        />
        <input
          type='text'
          value={userData.age}
          onChange={(e) => setUserData({ ...userData, age: e.target.value })}
          placeholder='나이'
        />
        <button onClick={createUser}>유저 생성</button>
      </div>

      <div>
        <input
          type='text'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder='수정할 사용자 ID'
        />
        <input
          type='text'
          value={updateUserData.name}
          onChange={(e) =>
            setUpdateUserData({ ...updateUserData, name: e.target.value })
          }
          placeholder='이름'
        />
        <input
          type='text'
          value={updateUserData.age}
          onChange={(e) =>
            setUpdateUserData({ ...updateUserData, age: e.target.value })
          }
          placeholder='나이'
        />
        <button onClick={updateUser}>유저 정보 수정</button>
      </div>

      <div>
        <input
          type='text'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder='삭제할 사용자 ID'
        />
        <button onClick={deleteUser}>유저 삭제</button>
      </div>
    </>
  );
}
