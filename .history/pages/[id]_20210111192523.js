import { useRouter } from "";
import DeatailsTemplate from "../templates/DetailsTemplate";
import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>Title</h1>
      <p>Post id: {router.query.id}</p>
    </>
  );
};
export default Details;
