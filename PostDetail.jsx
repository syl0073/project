import { useParams, useNavigate } from "react-router-dom";

const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const post = {
        id,
        title: `${id}번째 글`,
        content: "이곳은 글의 상세 내용입니다.",
    };

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => navigate(`/${id}/edit`)}>수정하기</button>
        </div>
    );
};

export default PostDetail;
