// import { useParams } from 'react-router-dom';

// 하나의 파라미터만 사용하는 경우
// export default function Product() {
//   const { productId } = useParams();

//   return <div>전달 받은 productId : {productId}</div>;
// }

// 여러 개의 파라미터를 사용하는 경우
// export default function Product() {
//   const { id, name } = useParams();

//   return (
//     <>
//       <div>전달 받은 id : {id}</div>
//       <div>전달 받은 name : {name}</div>
//     </>
//   );
// }

import { useSearchParams } from 'react-router-dom';

export default function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get('productId');

  return <div>전달 받은 productId : {productId}</div>;
}
